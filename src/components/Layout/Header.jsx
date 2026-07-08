import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import LogoIcon from "../../assets/logo.svg";
import { useLanguage } from "../../contexts/LanguageContext";

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
};

const Header = () => {
  const { lang, setLang } = useLanguage(); // ✅ ហៅ hook ក្នុង component
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const t = (key) => translations[key]?.[lang] || key;

  const navLinks = [
    { path: '/dashboard', label: t('home') },
    { path: '/technicians', label: t('findTechnician') },
    { path: '/booking/history', label: t('booking') },
    { path: '/messages', label: t('messages') },
  ];

  const serviceSubLinks = [
    { path: '/select/plumber', label: t('plumber') },
    { path: '/select/electrician', label: t('electrician') },
    { path: '/select/ac', label: t('ac') },
  ];

  const isActive = (path) => location.pathname === path;
  const isServiceActive = serviceSubLinks.some(link => location.pathname.startsWith(link.path));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface border-b border-outline-variant shadow-sm h-20">
      <div className="container-custom h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/dashboard" className="text-2xl md:text-3xl font-bold text-primary hover:opacity-80 transition">
          <img src={LogoIcon} alt="logo" className="w-10 h-10" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 h-full">
          {navLinks.map((link) => (
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
          ))}

          {/* Dropdown សេវាកម្ម */}
          <div
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
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Language Switcher */}
          <div className="hidden md:flex items-center gap-1 text-sm border-r border-outline-variant pr-3 select-none">
            <span
              onClick={() => setLang('km')}
              className={`cursor-pointer transition ${lang === 'km' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'}`}
            >
              {t('khmer')}
            </span>
            <span className="text-outline">|</span>
            <span
              onClick={() => setLang('en')}
              className={`cursor-pointer transition ${lang === 'en' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'}`}
            >
              {t('english')}
            </span>
          </div>

          {/* Notifications */}
          <button className="relative p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-secondary rounded-full border-2 border-surface"></span>
          </button>

          {/* User Profile */}
          <div
            className="relative group cursor-pointer"
            onMouseEnter={() => setUserDropdown(true)}
            onMouseLeave={() => setUserDropdown(false)}
          >
            <div className="flex items-center gap-2 pl-3 border-l border-outline-variant">
              <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-white overflow-hidden">
                <span className="material-symbols-outlined">account_circle</span>
              </div>
              <span className="hidden sm:block text-sm font-medium">សុភា</span>
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </div>

            <div className={`absolute right-0 top-[80%] w-56 bg-white rounded-xl shadow-xl border border-outline-variant overflow-hidden transition-all duration-200 ${
              userDropdown ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
            }`}>
              <div className="py-2">
                <Link to="/profile" className="block px-4 py-2 text-sm hover:bg-surface-container transition">{t('accountInfo')}</Link>
                <Link to="/booking/history" className="block px-4 py-2 text-sm hover:bg-surface-container transition">{t('myBookings')}</Link>
                <Link to="/help" className="block px-4 py-2 text-sm hover:bg-surface-container transition">{t('help')}</Link>
                <div className="border-t border-outline-variant my-1"></div>
                <button
                  onClick={() => navigate('/login')}
                  className="block w-full text-left px-4 py-2 text-sm text-error hover:bg-error-container/10 transition"
                >
                  {t('logout')}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-primary hover:bg-surface-container rounded-lg transition"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="material-symbols-outlined">{mobileOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-surface border-b border-outline-variant overflow-hidden transition-all duration-300 ${
        mobileOpen ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 py-4 space-y-1">
          {/* Language Switcher for Mobile */}
          <div className="flex items-center gap-2 py-2 mb-2 border-b border-outline-variant/30">
            <span
              onClick={() => setLang('km')}
              className={`text-sm cursor-pointer ${lang === 'km' ? 'text-primary font-bold' : 'text-on-surface-variant'}`}
            >
              {t('khmer')}
            </span>
            <span className="text-outline">|</span>
            <span
              onClick={() => setLang('en')}
              className={`text-sm cursor-pointer ${lang === 'en' ? 'text-primary font-bold' : 'text-on-surface-variant'}`}
            >
              {t('english')}
            </span>
          </div>

          {navLinks.map((link) => (
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
          ))}

          {/* សេវាកម្ម mobile accordion */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={`w-full flex items-center justify-between py-3 text-sm font-medium border-b border-outline-variant/30 transition ${
                isServiceActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              <span>{t('services')}</span>
              <span className="material-symbols-outlined text-sm transition-transform duration-200"
                style={{ transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                expand_more
              </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${
              mobileServicesOpen ? 'max-h-40 opacity-100 mt-1' : 'max-h-0 opacity-0'
            }`}>
              {serviceSubLinks.map((sub) => (
                <Link
                  key={sub.path}
                  to={sub.path}
                  className={`block pl-6 py-2 text-sm transition ${
                    isActive(sub.path) ? 'text-primary font-medium' : 'text-on-surface-variant hover:text-primary'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/profile" className="block py-3 text-sm text-on-surface-variant hover:text-primary border-b border-outline-variant/30 transition" onClick={() => setMobileOpen(false)}>{t('account')}</Link>
          <Link to="/help" className="block py-3 text-sm text-on-surface-variant hover:text-primary border-b border-outline-variant/30 transition" onClick={() => setMobileOpen(false)}>{t('help')}</Link>
          <button
            onClick={() => { navigate('/login'); setMobileOpen(false); }}
            className="block w-full text-left py-3 text-sm text-error hover:bg-error-container/10 transition rounded-lg"
          >
            {t('logout')}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;