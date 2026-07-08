// components/Layout/Layout.jsx
import React from 'react';
import Header from '../layout/Header';
import GuestHeader from '../layout/GuestHeader';
import Footer from '../layout/Footer'; // ប្រសិនបើមាន Footer, កែ path តាមហ្រង project របស់អ្នក
import { useAuth } from '../../contexts/AuthContext';

const Layout = ({ children }) => {
  const { isLoggedIn } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      {/* ជ្រើសរើស Header ដោយផ្អែកលើស្ថានភាព login */}
      {isLoggedIn ? <Header /> : <GuestHeader />}

      {/* Spacer សម្រាប់ fixed header (h-20 = 80px) */}
      <main className="flex-1 pt-20">
        {children}
      </main>

      {/* Footer បើមាន */}
      {typeof Footer !== 'undefined' && <Footer />}
    </div>
  );
};

export default Layout;