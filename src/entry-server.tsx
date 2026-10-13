import { renderToString } from "react-dom/server";
import App from "./App";
import { getMetaTags } from "./utils/updateMetaTags";
import { contentUpdated, normalizePath, sitePaths, siteUrl, structuredData } from './content/site';
import { detailPages } from './content/pages';

export { contentUpdated, sitePaths, siteUrl, detailPages };

export function render(url: string) {
  const path = normalizePath(new URL(url, siteUrl).pathname);

  return {
    appHtml: renderToString(<App path={path} />),
    metaTags: getMetaTags(path),
    schema: structuredData(path),
  };
}
