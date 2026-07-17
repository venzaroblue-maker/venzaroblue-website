import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Fixes SPA bug: without this, navigating to a new page keeps the old scroll position.
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
}
