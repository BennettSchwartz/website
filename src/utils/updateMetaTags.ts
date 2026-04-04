/**
 * Utility function to dynamically update meta tags for SPA routing
 * This ensures proper SEO when navigating between different sections
 */

export interface MetaTagsConfig {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
}

export function updateMetaTags(config: MetaTagsConfig): void {
  // Update title
  if (config.title) {
    document.title = config.title;
    updateMetaTag('name', 'title', config.title);
    updateMetaTag('property', 'og:title', config.ogTitle || config.title);
    updateMetaTag('property', 'twitter:title', config.twitterTitle || config.title);
  }

  // Update description
  if (config.description) {
    updateMetaTag('name', 'description', config.description);
    updateMetaTag('property', 'og:description', config.ogDescription || config.description);
    updateMetaTag('property', 'twitter:description', config.twitterDescription || config.description);
  }

  // Update keywords
  if (config.keywords) {
    updateMetaTag('name', 'keywords', config.keywords);
  }

  // Update URLs
  if (config.ogUrl) {
    updateMetaTag('property', 'og:url', config.ogUrl);
    updateMetaTag('property', 'twitter:url', config.ogUrl);
    
    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonicalLink) {
      canonicalLink.href = config.ogUrl;
    }
  }
}

function updateMetaTag(attrName: 'name' | 'property', attrValue: string, content: string): void {
  let element = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement;
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  
  element.content = content;
}

// Default meta tags for main page
export const DEFAULT_META_TAGS: MetaTagsConfig = {
  title: 'Bennett Schwartz - Software Developer, Researcher & Entrepreneur',
  description: 'Bennett Schwartz (GustyCube) is an American software developer, researcher, and entrepreneur. CEO of Ignyte Solutions, specializing in AI, distributed systems, and infrastructure software.',
  keywords: 'Bennett Schwartz, GustyCube, Bennett Schwartz developer, Bennett H. Schwartz, Ignyte Solutions CEO, software researcher, AI developer, distributed systems, infrastructure software',
  ogUrl: 'https://gustycube.com/',
};

// Meta tags for Minecraft Portfolio page
export const MINECRAFT_META_TAGS: MetaTagsConfig = {
  title: 'Minecraft Portfolio - Bennett Schwartz | GustyCube',
  description: 'Bennett Schwartz (GustyCube) Minecraft portfolio showcasing creative projects, custom builds, and development work in the Minecraft ecosystem.',
  keywords: 'Bennett Schwartz, GustyCube, Minecraft, Portfolio, Game Development, Creative Builds',
  ogUrl: 'https://gustycube.com/minecraft-portfolio/',
};
