// src/components/Layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

const translations = {
  brandName: { km: 'ហៅជាង', en: 'Hao Chang' },
  brandDesc: {
    km: 'សេវាកម្មជួសជុលគេហដ្ឋានដែលមានទំនុកចិត្តបំផុតនៅកម្ពុជា។',
    en: 'The most trusted home repair service in Cambodia.'
  },
  quickLinks: { km: 'តំណភ្ជាប់', en: 'Quick Links' },
  home: { km: 'ទំព័រដើម', en: 'Home' },
  about: { km: 'អំពីយើង', en: 'About Us' },
  howItWorks: { km: 'របៀបដំណើរការ', en: 'How It Works' },
  services: { km: 'សេវាកម្ម', en: 'Services' },
  plumber: { km: 'ជាងទឹក', en: 'Plumber' },
  electrician: { km: 'ជាងភ្លើង', en: 'Electrician' },
  ac: { km: 'ម៉ាស៊ីនត្រជាក់', en: 'Air Conditioner' },
  contact: { km: 'ទំនាក់ទំនង', en: 'Contact Us' },
  phone: { km: '+855 96 243 5509', en: '+855 96 243 5509' },
  email: { km: 'info@haochang.com', en: 'info@haochang.com' },
  location: { km: 'ភ្នំពេញ, កម្ពុជា', en: 'Phnom Penh, Cambodia' },
  followUs: { km: 'តាមដានយើង', en: 'Follow Us' },
  rights: {
    km: '© 2026 Hao Chang. រក្សាសិទ្ធិគ្រប់យ៉ាង។',
    en: '© 2026 Hao Chang. All rights reserved.'
  },
  privacy: { km: 'គោលការណ៍ឯកជនភាព', en: 'Privacy Policy' },
  terms: { km: 'លក្ខខណ្ឌប្រើប្រាស់', en: 'Terms of Service' },
};

// Social Icons as SVG
const SocialIcon = ({ href, icon, label, color }) => {
  const iconMap = {
    facebook: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    telegram: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
    youtube: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    instagram: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  };

  const colorMap = {
    facebook: 'hover:text-[#1877F2]',
    telegram: 'hover:text-[#26A5E4]',
    youtube: 'hover:text-[#FF0000]',
    instagram: 'hover:text-[#E4405F]',
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 ${colorMap[color] || 'hover:text-secondary'}`}
      aria-label={label}
    >
      {iconMap[icon]}
    </a>
  );
};

const Footer = () => {
  const { lang } = useLanguage();
  const t = (key) => translations[key]?.[lang] || key;

  const socialLinks = [
    { icon: 'facebook', href: 'https://www.facebook.com/share/1DPoX3wgQa/?mibextid=wwXIfr', label: 'Facebook', color: 'facebook' },
    { icon: 'telegram', href: 'https://t.me/Thann_vireak', label: 'Telegram', color: 'telegram' },
    { icon: 'youtube', href: '#', label: 'YouTube', color: 'youtube' },
    { icon: 'instagram', href: '#', label: 'Instagram', color: 'instagram' },
  ];

  return (
    <footer className="bg-primary-container text-white pt-12 pb-6 px-4 w-full mt-auto">
      <div className="container-custom">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <span className="text-2xl font-bold">{t('brandName')}</span>
            <p className="text-sm text-on-primary-container leading-relaxed max-w-xs">
              {t('brandDesc')}
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, idx) => (
                <SocialIcon key={idx} {...social} />
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm text-secondary-fixed uppercase tracking-wider">
              {t('quickLinks')}
            </h4>
            <nav className="flex flex-col gap-2 text-sm text-on-primary-container">
              <Link to="/dashboard" className="hover:text-white transition-colors duration-200">
                {t('home')}
              </Link>
              <Link to="/about" className="hover:text-white transition-colors duration-200">
                {t('about')}
              </Link>
              <Link to="/how-it-works" className="hover:text-white transition-colors duration-200">
                {t('howItWorks')}
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm text-secondary-fixed uppercase tracking-wider">
              {t('services')}
            </h4>
            <nav className="flex flex-col gap-2 text-sm text-on-primary-container">
              <Link to="/service/plumber" className="hover:text-white transition-colors duration-200">
                {t('plumber')}
              </Link>
              <Link to="/service/electrician" className="hover:text-white transition-colors duration-200">
                {t('electrician')}
              </Link>
              <Link to="/service/ac" className="hover:text-white transition-colors duration-200">
                {t('ac')}
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm text-secondary-fixed uppercase tracking-wider">
              {t('contact')}
            </h4>
            <div className="flex flex-col gap-3 text-sm text-on-primary-container">
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">call</span>
                {t('phone')}
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">mail</span>
                {t('email')}
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">location_on</span>
                {t('location')}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-4 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-on-primary-container">
          <p>{t('rights')}</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors duration-200">
              {t('privacy')}
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors duration-200">
              {t('terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;