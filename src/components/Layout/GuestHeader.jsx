import React from 'react';
import { Link } from 'react-router-dom';
import LogoIcon from "../../assets/logo.svg";
import { useLanguage } from "../../contexts/LanguageContext";

const translations = {
  login: { km: 'ចូលគណនី', en: 'Login' },
  register: { km: 'ចុះឈ្មោះ', en: 'Register' },
  khmer: { km: 'ខ្មែរ', en: 'Khmer' },
  english: { km: 'English', en: 'English' },
};

const LanguageToggle = ({ lang, setLang }) => (
  <div className="flex items-center bg-surface-container rounded-full p-0.5 text-sm select-none">
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

const GuestHeader = () => {
  const { lang, setLang } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface border-b border-outline-variant shadow-sm h-16 md:h-20">
      <div className="container-custom h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="shrink-0 text-2xl md:text-3xl font-bold text-primary hover:opacity-80 transition">
          <img src={LogoIcon} alt="logo" className="w-9 h-9 md:w-10 md:h-10" />
        </Link>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <LanguageToggle lang={lang} setLang={setLang} />

          <Link to="/login" className="btn-primary px-4 py-2 text-sm">
            {translations.login[lang]}
          </Link>
          <Link to="/register" className="btn-secondary px-4 py-2 text-sm">
            {translations.register[lang]}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default GuestHeader;