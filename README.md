
  # Personal Website

  This is my personal website, feel free to take the styles if you please :)

  Of course, the content and branding are still mine

## Development

`bun install --frozen-lockfile` installs dependencies. `bun run dev` starts Vite.

`bun run build` prerenders the homepage and the routes in `src/content/pages.ts`,
including page-specific metadata and structured data. It also generates
`build/sitemap.xml`, `build/llms.txt`, and a real 404 page.

Run `bun test` after building to check the generated pages and Worker behavior.
Use `bunx wrangler dev --local` to preview production asset routing.

Project and competition detail content lives in `src/content/pages.ts`. Shared
identity metadata lives in `src/content/site.ts`; update `contentUpdated` there
when making substantive content changes. Homepage copy remains in its components.
  
