// src/pages/AboutUs.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../translations';

const AboutUs = () => {
  const { lang } = useLanguage();
  const t = (key) => translations[key]?.[lang] || key;

  return (
    <div className="animate-enter">
      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-primary-container overflow-hidden">
        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {t('aboutUsTitle')}
          </h1>
          <p className="text-lg text-on-primary-container max-w-2xl mx-auto leading-relaxed">
            {t('aboutUsSubtitle')}
          </p>
          <div className="mt-6 flex justify-center"><div className="h-1 w-24 bg-secondary rounded-full"></div></div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-surface-container-lowest">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img className="w-full aspect-[4/3] object-cover" src="https://lh3.googleusercontent.com/... (ដដែល)" alt="Team" />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-primary">{t('ourStory')}</h2>
              <div className="h-1 w-12 bg-secondary rounded-full mb-4"></div>
              <p className="text-base text-on-surface-variant leading-relaxed">{t('ourStoryPara1')}</p>
              <p className="text-base text-on-surface-variant leading-relaxed">{t('ourStoryPara2')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <span className="material-symbols-outlined text-secondary text-5xl mb-4">rocket_launch</span>
          <h2 className="text-3xl font-bold mb-6">{t('missionTitle')}</h2>
          <div className="max-w-3xl mx-auto border-l-4 border-secondary pl-6 py-4 bg-primary-container/30 rounded-r-lg">
            <p className="text-xl italic leading-relaxed text-left md:text-center md:pl-0 md:border-l-0">
              {t('missionText')}
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-surface">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary">{t('coreValues')}</h2>
            <p className="text-base text-on-surface-variant mt-2">{t('coreValuesSub')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: 'verified_user', titleKey: 'trustTitle', descKey: 'trustDesc' },
              { icon: 'visibility', titleKey: 'transparencyTitle', descKey: 'transparencyDesc' },
              { icon: 'bolt', titleKey: 'speedTitle', descKey: 'speedDesc' }
            ].map((value, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition border-t-4 border-primary">
                <div className="w-12 h-12 bg-primary-fixed rounded-lg flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary text-3xl">{value.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">{t(value.titleKey)}</h3>
                <p className="text-sm text-on-surface-variant">{t(value.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-surface-container">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">{t('ctaTitle')}</h2>
          <p className="text-base text-on-surface-variant mb-6 max-w-xl mx-auto">{t('ctaDesc')}</p>
          <Link to="/register">
            <button className="bg-secondary text-white px-10 py-4 rounded-full text-xl font-bold hover:scale-105 transition shadow-lg">
              {t('ctaButton')}
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;