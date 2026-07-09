// src/components/Layout/Layout.jsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import GuestHeader from './GuestHeader'; // ត្រូវប្រាកដថាមានឯកសារនេះ
import Footer from './Footer';
import { useAuth } from '../../contexts/AuthContext';

const Layout = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  // 🔥 Scroll to top on every route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // លាក់ Header/Footer លើទំព័រ Login/Register
  const isAuthPage = ['/login', '/register'].includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      {!isAuthPage && (isLoggedIn ? <Header /> : <GuestHeader />)}
      <main className={`flex-1 ${!isAuthPage ? 'pt-20' : ''}`}>
        {children}
      </main>
      {!isAuthPage && <Footer />}
    </div>
  );
};

export default Layout;