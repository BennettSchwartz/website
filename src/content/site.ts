import { detailPages } from './pages';

export const siteUrl = 'https://gustycube.com';
export const contentUpdated = '2026-10-12';
export const siteTitle = 'Bennett Schwartz - Student, Developer & Founder';
export const siteDescription = 'Bennett Schwartz (GustyCube), a high honor roll sophomore at Morristown Beard School. Projects, competition results, and interests in technology and civil liberties.';

export function normalizePath(path: string) {
  return path.replace(/\/+$/, '') || '/';
}

export const sitePaths = ['/', ...detailPages.map((page) => page.path)];

const person = {
  '@type': 'Person',
  '@id': `${siteUrl}/#person`,
  name: 'Bennett Schwartz',
  alternateName: ['GustyCube', 'Bennett H. Schwartz', 'Bennett Hudson Schwartz'],
  url: siteUrl,
  image: `${siteUrl}/bennett-schwartz.png`,
  description: siteDescription,
  jobTitle: ['Student', 'Software Developer', 'Founder'],
  knowsAbout: ['Computer science', 'Mathematics', 'Latin', 'Constitutional law', 'Civil liberties'],
  affiliation: { '@type': 'EducationalOrganization', name: 'Morristown Beard School' },
  sameAs: [
    'https://github.com/BennettSchwartz',
    'https://x.com/BennettSchwartz',
    'https://www.linkedin.com/in/gustycube/',
    'https://devpost.com/BennettSchwartz',
  ],
};

function organizations() {
  return detailPages.filter((page) => page.path.startsWith('/projects/')).map((page) => ({
    '@type': 'Organization',
    '@id': `${siteUrl}${page.path}#organization`,
    name: page.title,
    description: page.description,
    url: `${siteUrl}${page.path}`,
    founder: { '@id': person['@id'] },
    ...(page.path === '/projects/veridity' ? { sameAs: 'https://veridity.org' } : {}),
  }));
}

export function structuredData(path: string) {
  const page = detailPages.find((item) => item.path === path);
  const url = `${siteUrl}${path}`;
  const home = path === '/';
  if (!home && !page) return [];

  return {
    '@context': 'https://schema.org',
    '@graph': [
      home ? person : { '@type': 'Person', '@id': person['@id'], name: person.name, url: siteUrl },
      ...(home ? organizations() : organizations().filter((org) => org.url === url)),
      {
        '@type': home ? 'ProfilePage' : 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: home ? 'Bennett Schwartz' : page!.title,
        description: home ? siteDescription : page!.description,
        dateModified: contentUpdated,
        ...(home ? { mainEntity: { '@id': person['@id'] } } : { author: { '@id': person['@id'] } }),
        isPartOf: { '@id': `${siteUrl}/#website` },
      },
      { '@type': 'WebSite', '@id': `${siteUrl}/#website`, name: 'Bennett Schwartz', url: siteUrl },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
          ...(!home ? [{ '@type': 'ListItem', position: 2, name: page!.title, item: url }] : []),
        ],
      },
    ],
  };
}
