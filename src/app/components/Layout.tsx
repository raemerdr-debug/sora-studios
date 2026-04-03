import { Outlet, useLocation } from 'react-router';
import { Navbar } from './Navbar';
import { PageLoader } from './PageLoader';
import { useLayoutEffect } from 'react';

export function Layout() {
  const location = useLocation();

  // Scroll to top on every route change
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.key]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageLoader locationKey={location.key}>
        <main>
          <Outlet />
        </main>
      </PageLoader>
    </div>
  );
}
