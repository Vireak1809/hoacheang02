// pages/CustomerDashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  greeting: { km: 'សួស្ដី, សុភា', en: 'Hello, Sophea' },
  greetingQuestion: { km: 'តើអ្នកត្រូវការជាងប្រភេទណាថ្ងៃនេះ?', en: 'What type of technician do you need today?' },
  searchPlaceholder: { km: 'ស្វែងរកសេវាកម្ម...', en: 'Search services...' },
  searchButton: { km: 'ស្វែងរក', en: 'Search' },
  plumberLabel: { km: 'ជាងទឹក', en: 'Plumber' },
  plumberPrice: { km: 'ចាប់ផ្ដើមពី $15', en: 'Starting from $15' },
  electricianLabel: { km: 'ជាងអគ្គិសនី', en: 'Electrician' },
  electricianPrice: { km: 'ចាប់ផ្ដើមពី $20', en: 'Starting from $20' },
  acLabel: { km: 'ម៉ាស៊ីនត្រជាក់', en: 'Air Conditioner' },
  acPrice: { km: 'ចាប់ផ្ដើមពី $18', en: 'Starting from $18' },
  emergencyBadge: { km: 'សេវាបន្ទាន់ 24/7', en: '24/7 Emergency Service' },
  emergencyTitle: { km: 'ត្រូវការជាងបន្ទាន់?', en: 'Need an urgent repair?' },
  emergencyDesc: { km: 'យើងមានបច្ចេកទេសជំនាញៗនៅក្បែរលោកអ្នកបំផុត។', en: 'We have skilled technicians near you.' },
  emergencyButton: { km: 'ហៅជាងបន្ទាន់', en: 'Call Emergency Technician' },
  recentBookingTitle: { km: 'ការកក់ចុងក្រោយ', en: 'Recent Booking' },
  recentTechName: { km: 'ជាង វិច្ឆិកា', en: 'Mr. Vicheka' },
  recentTechSpecialty: { km: 'ជំនាញជួសជុលម៉ាស៊ីនត្រជាក់', en: 'AC Repair Specialist' },
  recentStatus: { km: 'កំពុងមកដល់', en: 'On the way' },
  totalLabel: { km: 'តម្លៃសរុប', en: 'Total' },
  totalPrice: { km: '$18.00', en: '$18.00' },
  viewDetails: { km: 'មើលព័ត៌មានលម្អិត', en: 'View Details' },
};

const CustomerDashboard = () => {
  const { lang } = useLanguage();
  const t = (key) => translations[key]?.[lang] || key;

  const services = [
    { icon: 'plumbing', labelKey: 'plumberLabel', priceKey: 'plumberPrice', link: '/select/plumber' },
    { icon: 'electrical_services', labelKey: 'electricianLabel', priceKey: 'electricianPrice', link: '/select/electrician' },
    { icon: 'ac_unit', labelKey: 'acLabel', priceKey: 'acPrice', link: '/select/ac' }
  ];

  return (
    <div className="container-custom py-6 md:py-10 animate-enter">
      {/* Greeting */}
      <section className="mb-6 md:mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">{t('greeting')}</h1>
        <p className="text-lg text-on-surface-variant">{t('greetingQuestion')}</p>
      </section>

      {/* Search */}
      <div className="max-w-2xl mb-8">
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline">search</span>
          <input
            className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl shadow-lg focus:ring-2 focus:ring-primary/20 outline-none text-base"
            placeholder={t('searchPlaceholder')}
          />
          <Link to="/technicians">
            <button className="absolute right-2 top-1/2 -translate-y-1/2 px-5 py-2 bg-primary text-white rounded-xl text-sm font-medium hover:opacity-90 transition">
              {t('searchButton')}
            </button>
          </Link>
        </div>
      </div>

      {/* Service Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        {services.map((svc, idx) => (
          <Link
            key={idx}
            to={svc.link}
            className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition border border-transparent hover:border-primary/10 text-center"
          >
            <div className="w-20 h-20 rounded-full bg-surface-container-lowest flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
              <span className="material-symbols-outlined text-4xl text-primary">{svc.icon}</span>
            </div>
            <h3 className="text-xl font-bold text-primary">{t(svc.labelKey)}</h3>
            <p className="text-sm text-on-surface-variant">{t(svc.priceKey)}</p>
          </Link>
        ))}
      </div>

      {/* Emergency Banner */}
      <div className="relative rounded-3xl overflow-hidden mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
        <div className="relative p-6 md:p-10 flex flex-col items-start gap-4 max-w-lg">
          <span className="px-3 py-1 bg-secondary text-white rounded-full text-xs font-bold uppercase tracking-wider">
            {t('emergencyBadge')}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white">{t('emergencyTitle')}</h2>
          <p className="text-white/80 text-base">{t('emergencyDesc')}</p>
          <Link to="/problem-detail">
            <button className="mt-2 bg-secondary hover:bg-secondary-container text-white px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-bold shadow-lg hover:scale-105 transition flex items-center gap-2">
              <span className="material-symbols-outlined">call</span> {t('emergencyButton')}
            </button>
          </Link>
        </div>
      </div>

      {/* Recent Booking */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-outline-variant/30 max-w-md">
        <h2 className="text-2xl font-bold text-primary mb-4">{t('recentBookingTitle')}</h2>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-surface-container overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_oRyXbP503tpXnC3vuL68JH0woLhiBJLQ4T92NIxEeIi-pFaUKHuW1CXVd9icuXDJogc5gw1O4q6WDDdZ0meQ5HuD62qBwQbhN9CvnpQgCUUGHpi1gKw_CzyCA4tOoY-SVRC5gEjvFKoNxFpysJxLOu2pugjpXZdplEMvgLPhYVZsfMycvMp-QMhdudO0O0Y7t5xRxi6BJKDtR74u8GZRSTOMqhHsSJwEcnmByVItOF3wJP3UI5Q3vdv1S3u45hxr5djBGWDlUzc"
              alt="Technician"
            />
          </div>
          <div>
            <h4 className="font-medium">{t('recentTechName')}</h4>
            <p className="text-sm text-on-surface-variant">{t('recentTechSpecialty')}</p>
          </div>
          <span className="ml-auto px-3 py-1 bg-secondary-fixed text-on-secondary-fixed rounded-full text-xs font-bold">
            {t('recentStatus')}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-on-surface-variant">{t('totalLabel')}</span>
          <span className="font-bold text-primary">{t('totalPrice')}</span>
        </div>
        <Link to="/booking/track">
          <button className="w-full mt-4 py-3 border border-primary text-primary rounded-xl text-sm font-medium hover:bg-primary/5 transition">
            {t('viewDetails')}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CustomerDashboard;