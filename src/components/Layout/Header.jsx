// src/components/Layout/Header.jsx
import React, { useState, useCallback } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logoSvg from "../../assets/logo.svg?raw";  // ← changed
import { useLanguage } from "../../contexts/LanguageContext";
import { useAuth } from "../../contexts/AuthContext";

const translations = {
  home: { km: 'ទំព័រដើម', en: 'Home' },
  findTechnician: { km: 'ស្វែងរកជាង', en: 'Find Technician' },
  booking: { km: 'ការកក់', en: 'Bookings' },
  messages: { km: 'សារ', en: 'Messages' },
  services: { km: 'សេវាកម្ម', en: 'Services' },
  plumber: { km: 'ជាងទឹក', en: 'Plumber' },
  electrician: { km: 'ជាងភ្លើង', en: 'Electrician' },
  ac: { km: 'ម៉ាស៊ីនត្រជាក់', en: 'Air Conditioner' },
  accountInfo: { km: 'ព័ត៌មានគណនី', en: 'Account Info' },
  myBookings: { km: 'ការកក់របស់ខ្ញុំ', en: 'My Bookings' },
  help: { km: 'ជំនួយ', en: 'Help' },
  logout: { km: 'ចាកចេញ', en: 'Logout' },
  account: { km: 'គណនី', en: 'Account' },
  khmer: { km: 'ខ្មែរ', en: 'Khmer' },
  english: { km: 'English', en: 'English' },
  aboutUs: { km: 'អំពីយើង', en: 'About Us' },
  contact: { km: 'ទំនាក់ទំនង', en: 'Contact' },
  howItWorks: { km: 'របៀបដំណើរការ', en: 'How It Works' },
  login: { km: 'ចូលប្រើ', en: 'Login' },
  register: { km: 'បង្កើតគណនី', en: 'Create Account' },
};

const LanguageToggle = ({ lang, setLang, compact }) => (
  <div
    className={`flex items-center bg-surface-container rounded-full p-0.5 select-none ${
      compact ? 'text-xs' : 'text-sm'
    }`}
  >
    <button
      onClick={() => setLang('km')}
      className={`px-2.5 py-1 rounded-full font-medium transition-all ${
        lang === 'km'
          ? 'bg-primary text-white shadow-sm'
          : 'text-on-surface-variant hover:text-primary'
      }`}
    >
      ខ្មែរ
    </button>
    <button
      onClick={() => setLang('en')}
      className={`px-2.5 py-1 rounded-full font-medium transition-all ${
        lang === 'en'
          ? 'bg-primary text-white shadow-sm'
          : 'text-on-surface-variant hover:text-primary'
      }`}
    >
      EN
    </button>
  </div>
);

const Header = () => {
  const { lang, setLang } = useLanguage();
  const { logout, isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const t = (key) => translations[key]?.[lang] || key;

  // ===== Guest Navigation =====
  const guestNavLinks = [
    { path: '/', label: t('home') },
    { path: '/services', label: t('services') },
    { path: '/how-it-works', label: t('howItWorks') },
    { path: '/about', label: t('aboutUs') },
    { path: '/contact', label: t('contact') },
  ];

  // ===== Logged-in Navigation =====
  const loggedInNavLinks = [
    { path: '/dashboard', label: t('home') },
    { path: '/booking/history', label: t('booking') },
    { path: '/messages', label: t('messages') },
    { path: '/about', label: t('aboutUs') },
    { path: '/contact', label: t('contact') },
  ];

  const serviceSubLinks = [
    { path: '/select/plumber', label: t('plumber') },
    { path: '/select/electrician', label: t('electrician') },
    { path: '/select/ac', label: t('ac') },
  ];

  // Extra booking-flow paths for Services tab
  const serviceFlowPaths = [
    '/problem-detail',
    '/map-location',
    '/booking/confirm',
    '/technicians',
  ];

  // Additional paths that belong under "Bookings"
  const bookingsExtraPaths = [
    '/service/in-progress',
    '/booking/track',
  ];

  const isActive = (path) => location.pathname === path;
  const isServiceActive =
    serviceSubLinks.some(link => location.pathname.startsWith(link.path)) ||
    serviceFlowPaths.some(path => location.pathname.startsWith(path));

  const handleLogout = useCallback(() => {
    logout();
    window.location.href = '/';
  }, [logout]);

  // ===== Render Desktop Nav =====
  const renderNavItems = () => {
    if (!isLoggedIn) {
      return guestNavLinks.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`text-sm font-medium transition h-full flex items-center border-b-2 ${
            isActive(link.path)
              ? 'text-primary border-primary'
              : 'text-on-surface-variant border-transparent hover:text-primary hover:border-primary/30'
          }`}
        >
          {link.label}
        </Link>
      ));
    }

    const items = [];
    loggedInNavLinks.forEach((link, index) => {
      let isLinkActive = isActive(link.path);

      if (link.path === '/booking/history') {
        isLinkActive = isLinkActive || bookingsExtraPaths.some(
          path => location.pathname.startsWith(path)
        );
      }

      if (index === 0) {
        items.push(
          <Link
            key={link.path}
            to={link.path}
            className={`text-sm font-medium transition h-full flex items-center border-b-2 ${
              isLinkActive
                ? 'text-primary border-primary'
                : 'text-on-surface-variant border-transparent hover:text-primary hover:border-primary/30'
            }`}
          >
            {link.label}
          </Link>
        );
        // Services dropdown
        items.push(
          <div
            key="services-dropdown"
            className="relative h-full flex items-center"
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <button
              className={`text-sm font-medium transition h-full flex items-center gap-1 border-b-2 ${
                isServiceActive
                  ? 'text-primary border-primary'
                  : 'text-on-surface-variant border-transparent hover:text-primary hover:border-primary/30'
              }`}
            >
              {t('services')}
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>
            <div
              className={`absolute left-0 top-full mt-0 w-48 bg-white rounded-xl shadow-xl border border-outline-variant overflow-hidden transition-all duration-200 ${
                servicesDropdown ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}
            >
              {serviceSubLinks.map((sub) => (
                <Link
                  key={sub.path}
                  to={sub.path}
                  className={`block px-4 py-2.5 text-sm hover:bg-surface-container transition ${
                    isActive(sub.path) ? 'text-primary bg-primary-container/20' : 'text-on-surface'
                  }`}
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          </div>
        );
      } else {
        items.push(
          <Link
            key={link.path}
            to={link.path}
            className={`text-sm font-medium transition h-full flex items-center border-b-2 ${
              isLinkActive
                ? 'text-primary border-primary'
                : 'text-on-surface-variant border-transparent hover:text-primary hover:border-primary/30'
            }`}
          >
            {link.label}
          </Link>
        );
      }
    });
    return items;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface border-b border-outline-variant shadow-sm h-16 md:h-20">
      <div className="container-custom h-full flex items-center justify-between gap-2">
        {/* Logo – now an inline SVG component */}
        <Link to={isLoggedIn ? "/dashboard" : "/"} className="shrink-0 flex items-center">
          <div
              className="h-8 w-8 md:h-10 md:w-10"
              dangerouslySetInnerHTML={{ __html: logoSvg }}
            />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 h-full">
          {renderNavItems()}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-1.5 md:gap-3 shrink-0">
          <LanguageToggle lang={lang} setLang={setLang} compact />

          {isLoggedIn ? (
            <>
              <button className="relative p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition">
                <span className="material-symbols-outlined text-xl">notifications</span>
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-secondary rounded-full border-2 border-surface"></span>
              </button>

              {/* User Profile */}
              <div
                className="hidden sm:block relative group cursor-pointer"
                onMouseEnter={() => setUserDropdown(true)}
                onMouseLeave={() => setUserDropdown(false)}
              >
                <div className="flex items-center gap-2 pl-3 border-l border-outline-variant">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary-container flex items-center justify-center text-white overflow-hidden">
                    <span className="material-symbols-outlined">account_circle</span>
                  </div>
                  <span className="hidden md:block text-sm font-medium">សុភា</span>
                  <span className="material-symbols-outlined text-sm">expand_more</span>
                </div>

                <div className={`absolute right-0 top-[80%] w-56 bg-white rounded-xl shadow-xl border border-outline-variant overflow-hidden transition-all duration-200 ${
                  userDropdown ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}>
                  <div className="py-2">
                    <Link to="/profile" className="block px-4 py-2 text-sm hover:bg-surface-container transition">{t('accountInfo')}</Link>
                    {/* Removed My Bookings link */}
                    <Link to="/help" className="block px-4 py-2 text-sm hover:bg-surface-container transition">{t('help')}</Link>
                    <div className="border-t border-outline-variant my-1"></div>
                    <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-error hover:bg-error-container/10 transition">
                      {t('logout')}
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/login" className="px-4 py-2 text-sm font-medium text-primary hover:bg-primary/5 rounded-xl transition">
                {t('login')}
              </Link>
              <Link to="/register" className="px-4 py-2 bg-primary text-white rounded-xl text-sm font-medium hover:opacity-90 transition">
                {t('register')}
              </Link>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-primary hover:bg-surface-container rounded-lg transition"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <span className="material-symbols-outlined">{mobileOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* ===== Mobile Menu ===== */}
      <div
        className={`lg:hidden bg-surface border-b border-outline-variant shadow-lg overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-[85vh] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-3 space-y-0.5">
          {isLoggedIn && (
            <div className="flex sm:hidden items-center gap-3 py-3 mb-1 border-b border-outline-variant/30">
              <div className="w-11 h-11 rounded-full bg-primary-container flex items-center justify-center text-white shrink-0">
                <span className="material-symbols-outlined">account_circle</span>
              </div>
              <div>
                <p className="text-sm font-semibold">សុភា</p>
                <Link to="/profile" className="text-xs text-primary" onClick={() => setMobileOpen(false)}>
                  {t('accountInfo')}
                </Link>
              </div>
            </div>
          )}

          {!isLoggedIn ? (
            guestNavLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 text-sm font-medium border-b border-outline-variant/30 transition ${
                  isActive(link.path) ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))
          ) : (
            <>
              {/* Home link (first) */}
              <Link
                to="/dashboard"
                className={`block py-3 text-sm font-medium border-b border-outline-variant/30 transition ${
                  isActive('/dashboard') ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {t('home')}
              </Link>

              {/* Services – now a direct link right after Home */}
              <Link
                to="/services"
                className={`block py-3 text-sm font-medium border-b border-outline-variant/30 transition ${
                  isServiceActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {t('services')}
              </Link>

              {/* Remaining links (Booking, Messages, About, Contact) – skip "Home" and "Services" */}
              {loggedInNavLinks.slice(1).map((link) => {
                let isLinkActive = isActive(link.path);
                if (link.path === '/booking/history') {
                  isLinkActive = isLinkActive || bookingsExtraPaths.some(
                    path => location.pathname.startsWith(path)
                  );
                }

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block py-3 text-sm font-medium border-b border-outline-variant/30 transition ${
                      isLinkActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* Help & Logout remain unchanged */}
              <Link to="/help" className="block py-3 text-sm text-on-surface-variant hover:text-primary border-b border-outline-variant/30 transition" onClick={() => setMobileOpen(false)}>
                {t('help')}
              </Link>
              <button onClick={() => { handleLogout(); setMobileOpen(false); }} className="block w-full text-left py-3 text-sm font-medium text-error hover:bg-error-container/10 transition rounded-lg mt-1">
                {t('logout')}
              </button>
            </>
          )}

          {/* Guest bottom actions unchanged */}
          {!isLoggedIn && (
            <>
              <Link to="/help" className="block py-3 text-sm text-on-surface-variant hover:text-primary border-b border-outline-variant/30 transition" onClick={() => setMobileOpen(false)}>
                {t('help')}
              </Link>
              <div className="flex gap-3 mt-3">
                <Link to="/login" className="flex-1 text-center py-3 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary/5 transition">
                  {t('login')}
                </Link>
                <Link to="/register" className="flex-1 text-center py-3 text-sm font-medium bg-primary text-white rounded-lg hover:opacity-90 transition">
                  {t('register')}
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;