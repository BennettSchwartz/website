type AssetsBinding = {
  fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
};

interface Env {
  ASSETS: AssetsBinding;
}

const SITEMAP_LINK_HEADER = '</sitemap.xml>; rel="describedby"; type="application/xml"';

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.hostname === "www.gustycube.com") {
      url.protocol = "https:";
      url.hostname = "gustycube.com";
      url.port = "";
      return Response.redirect(url.toString(), 301);
    }

    const response = await env.ASSETS.fetch(request);
    const contentType = response.headers.get("content-type") ?? "";

    if (!response.ok || !contentType.includes("text/html")) {
      return response;
    }

    const headers = new Headers(response.headers);
    headers.append("Link", SITEMAP_LINK_HEADER);

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
