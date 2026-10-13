import { describe, expect, mock, test } from "bun:test";
import worker from "../src/worker";

const sitemapLink = '</sitemap.xml>; rel="describedby"; type="application/xml"';

describe("website Worker", () => {
  test.each([
    ["https://www.gustycube.com/", "https://gustycube.com/"],
    [
      "https://www.gustycube.com/projects/veridity?source=profile&view=full",
      "https://gustycube.com/projects/veridity?source=profile&view=full",
    ],
    [
      "http://www.gustycube.com:8080/robots.txt?value=a%2Fb",
      "https://gustycube.com/robots.txt?value=a%2Fb",
    ],
  ])("redirects %s to the canonical host without fetching assets", async (from, to) => {
    const fetch = mock(async () => new Response("unused"));
    const response = await worker.fetch(new Request(from), { ASSETS: { fetch } });

    expect(response.status).toBe(301);
    expect(response.headers.get("Location")).toBe(to);
    expect(fetch).not.toHaveBeenCalled();
  });

  test.each(["/", "/competitions", "/projects/veridity"])(
    "adds sitemap discovery to successful HTML at %s and preserves response data",
    async (path) => {
      const request = new Request(`https://gustycube.com${path}`);
      const existingLink = '</styles.css>; rel="preload"; as="style"';
      const asset = new Response("<h1>Readable page</h1>", {
        status: 200,
        statusText: "OK",
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Cache-Control": "public, max-age=300",
          Link: existingLink,
        },
      });
      const fetch = mock(async () => asset);
      const response = await worker.fetch(request, { ASSETS: { fetch } });

      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(request);
      expect(response.status).toBe(200);
      expect(response.statusText).toBe("OK");
      expect(response.headers.get("Link")).toBe(`${existingLink}, ${sitemapLink}`);
      expect(response.headers.get("Cache-Control")).toBe("public, max-age=300");
      expect(await response.text()).toBe("<h1>Readable page</h1>");
    },
  );

  test("passes non-HTML assets through unchanged", async () => {
    const request = new Request("https://gustycube.com/robots.txt");
    const asset = new Response("User-agent: *\nAllow: /\n", {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
    const fetch = mock(async () => asset);
    const response = await worker.fetch(request, { ASSETS: { fetch } });

    expect(response).toBe(asset);
    expect(response.headers.has("Link")).toBe(false);
    expect(await response.text()).toBe("User-agent: *\nAllow: /\n");
  });

  test.each([301, 404, 500])("preserves unsuccessful HTML status %s unchanged", async (status) => {
    const asset = new Response("<h1>Original response</h1>", {
      status,
      headers: { "Content-Type": "text/html" },
    });
    const response = await worker.fetch(new Request("https://gustycube.com/missing"), {
      ASSETS: { fetch: async () => asset },
    });

    expect(response).toBe(asset);
    expect(response.status).toBe(status);
    expect(response.headers.has("Link")).toBe(false);
    expect(await response.text()).toBe("<h1>Original response</h1>");
  });
});
