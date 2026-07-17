import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  path: string; // e.g. "/white-label-jeans-manufacturer"
}

// Sets the page <title>, meta description and canonical URL for each route.
// Important for Google: every page gets its own keyword-targeted title.
export default function Seo({ title, description, path }: SeoProps) {
  useEffect(() => {
    document.title = title;

    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement('meta');
      desc.setAttribute('name', 'description');
      document.head.appendChild(desc);
    }
    desc.setAttribute('content', description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://www.venzaroblue.com${path}`);
  }, [title, description, path]);

  return null;
}
