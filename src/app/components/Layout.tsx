import { Outlet, useLocation } from 'react-router';
import { Navbar } from './Navbar';
import { useEffect, useLayoutEffect } from 'react';

export function Layout() {
  const location = useLocation();

  // Scroll to top on every route change — useLayoutEffect ensures it runs before paint
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.key]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
