import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  const location = useLocation();
  
  // Hide navbar/footer on admin and dashboard pages
  const isAdminOrDashboard = location.pathname.startsWith('/admin') || location.pathname.startsWith('/dashboard');

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      {!isAdminOrDashboard && <Footer />}
    </div>
  );
}
