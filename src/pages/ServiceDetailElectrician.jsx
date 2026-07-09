// src/pages/ServiceDetailElectrician.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  breadcrumbHome: { km: 'ទំព័រដើម', en: 'Home' },
  breadcrumbServices: { km: 'សេវាកម្ម', en: 'Services' },
  breadcrumbElectrician: { km: 'ជាងភ្លើង', en: 'Electrician' },
  expertBadge: { km: 'សេវាកម្មអាទិភាព', en: 'Priority Service' },
  heroTitle: { km: 'សេវាជាងភ្លើង', en: 'Electrical Service' },
  heroDesc: { km: 'ជួសជុល និងថែទាំប្រព័ន្ធភ្លើងដោយអ្នកជំនាញដែលមានបទពិសោធន៍ខ្ពស់។', en: 'Repair and maintain electrical systems by highly experienced professionals.' },
  loginToBook: { km: 'ចូលប្រើដើម្បីកក់សេវា', en: 'Login to Book Service' },
  howItWorks: { km: 'មើលរបៀបដំណើរការ', en: 'See How It Works' },
  problemsTitle: { km: 'បញ្ហាអគ្គិសនីដែលយើងអាចដោះស្រាយបាន', en: 'Electrical Problems We Can Solve' },
  problemsSub: { km: 'មិនថាបញ្ហាតូច ឬធំ ក្រុមការងារយើងនឹងទៅដល់ទីតាំងលោកអ្នកភ្លាមៗ។', en: 'No matter how big or small the issue, our team will arrive at your location promptly.' },
  problemShort: { km: 'ឆ្លងចរន្ត', en: 'Short Circuit' },
  problemShortDesc: { km: 'បញ្ហាឆ្លងចរន្តអគ្គិសនី', en: 'Electrical short circuit issues' },
  problemBreaker: { km: 'Breaker', en: 'Breaker' },
  problemBreakerDesc: { km: 'បញ្ហាលោតប៉ាន់ ឬដាច់ប៉ាន់', en: 'Tripping or broken breaker' },
  problemOutlet: { km: 'ព្រីភ្លើង', en: 'Outlet' },
  problemOutletDesc: { km: 'ជួសជុលរន្ធដោតភ្លើង', en: 'Repair electrical outlets' },
  problemSwitch: { km: 'កុងតាក់', en: 'Switch' },
  problemSwitchDesc: { km: 'ប្តូរកុងតាក់ភ្លើង', en: 'Replace light switches' },
  problemWiring: { km: 'ខ្សែភ្លើង', en: 'Wiring' },
  problemWiringDesc: { km: 'រៀបចំខ្សែភ្លើង និងបណ្តាញអគ្គិសនី', en: 'Rewiring and electrical cabling' },
  problemInstall: { km: 'ដំឡើង', en: 'Installation' },
  problemInstallDesc: { km: 'ដំឡើងឧបករណ៍អគ្គិសនីថ្មី', en: 'Install new electrical equipment' },
  stepsTitle: { km: 'របៀបកក់សេវា', en: 'How to Book a Service' },
  step1: { km: 'ជ្រើសរើសសេវា', en: 'Select Service' },
  step2: { km: 'បញ្ជាក់ទីតាំង', en: 'Set Location' },
  step3: { km: 'រង់ចាំការបញ្ជាក់', en: 'Await Confirmation' },
  step4: { km: 'ជួសជុល', en: 'Repair' },
  step5: { km: 'ទូទាត់ប្រាក់', en: 'Payment' },
  safetyTitle: { km: 'សុវត្ថិភាពជាចម្បង', en: 'Safety First' },
  safetyDesc: { km: 'កុំប៉ះខ្សែភ្លើងដែលដាច់ ឬឧបករណ៍អគ្គិសនីដែលមានសញ្ញាឆ្លងដោយខ្លួនឯង។', en: 'Do not touch broken wires or electrical devices showing signs of a short circuit by yourself.' },
  emergencyCall: { km: 'ហៅបន្ទាន់ ០៩៩ ៩៩៩ ៩៩៩', en: 'Emergency Call 099 999 999' },
  faqTitle: { km: 'សំណួរដែលសួរញឹកញាប់', en: 'Frequently Asked Questions' },
  faq1Q: { km: 'តើត្រូវរង់ចាំយូរប៉ុណ្ណាទម្រាំជាងភ្លើងទៅដល់?', en: 'How long does it take for an electrician to arrive?' },
  faq1A: { km: 'ជាមធ្យម ជាងរបស់យើងនឹងទៅដល់ទីតាំងលោកអ្នកក្នុងរយៈពេល ២០ ទៅ ៤០ នាទី អាស្រ័យលើចម្ងាយ និងចរាចរណ៍។', en: 'On average, our electrician will arrive at your location within 20 to 40 minutes, depending on distance and traffic.' },
  faq2Q: { km: 'តើសេវាកម្មមានការធានាដែរឬទេ?', en: 'Is there a warranty on the service?' },
  faq2A: { km: 'បាទ! រាល់ការជួសជុលទាំងអស់មានការធានារយៈពេល ៣០ ថ្ងៃលើការងារបច្ចេកទេស និងគ្រឿងបន្លាស់ដែលប្តូរដោយយើងខ្ញុំ។', en: 'Yes! All repairs come with a 30‑day warranty on the workmanship and parts replaced by us.' },
  faq3Q: { km: 'តើតម្លៃសេវាកម្មគិតយ៉ាងដូចម្តេច?', en: 'How is the service priced?' },
  faq3A: { km: 'តម្លៃសេវាចាប់ផ្តើមពី $៥ ឡើងទៅ។ ជាងនឹងធ្វើការវាយតម្លៃ និងរាយការណ៍តម្លៃសរុបជូនលោកអ្នកមុនពេលចាប់ផ្តើមការងារ។', en: 'Service prices start from $5 and up. The electrician will assess and provide a total cost before starting any work.' },
};

const ServiceDetailElectrician = () => {
  const { lang } = useLanguage();
  const t = (key) => translations[key]?.[lang] || key;
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    { id: 1, q: t('faq1Q'), a: t('faq1A') },
    { id: 2, q: t('faq2Q'), a: t('faq2A') },
    { id: 3, q: t('faq3Q'), a: t('faq3A') }
  ];

  const problems = [
    { icon: 'bolt', label: t('problemShort'), desc: t('problemShortDesc') },
    { icon: 'toggle_off', label: t('problemBreaker'), desc: t('problemBreakerDesc') },
    { icon: 'power', label: t('problemOutlet'), desc: t('problemOutletDesc') },
    { icon: 'light', label: t('problemSwitch'), desc: t('problemSwitchDesc') },
    { icon: 'settings_input_component', label: t('problemWiring'), desc: t('problemWiringDesc') },
    { icon: 'construction', label: t('problemInstall'), desc: t('problemInstallDesc') }
  ];

  const steps = [
    { num: '១', label: t('step1') },
    { num: '២', label: t('step2') },
    { num: '៣', label: t('step3') },
    { num: '៤', label: t('step4') },
    { num: '៥', label: t('step5') }
  ];

  return (
    <div className="animate-enter">
      {/* Breadcrumb */}
      <div className="bg-surface-container-low py-3 border-b border-outline-variant">
        <div className="container-custom">
          <nav className="flex items-center text-sm text-on-surface-variant gap-1 flex-wrap">
            <Link to="/" className="hover:text-primary transition">{t('breadcrumbHome')}</Link>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <Link to="/services" className="hover:text-primary transition">{t('breadcrumbServices')}</Link>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span className="text-primary font-bold">{t('breadcrumbElectrician')}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-container text-white py-12 md:py-20">
        <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 md:space-y-6">
            <span className="px-3 py-1 bg-secondary text-white rounded-full text-sm inline-block">{t('expertBadge')}</span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">{t('heroTitle')}</h1>
            <p className="text-lg text-surface-variant max-w-lg">{t('heroDesc')}</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/login" className="px-6 py-3 md:px-8 md:py-4 bg-secondary text-white rounded-xl font-bold hover:scale-105 transition shadow-lg">
                {t('loginToBook')}
              </Link>
              <Link to="/how-it-works" className="px-6 py-3 md:px-8 md:py-4 border border-white text-white rounded-xl font-bold hover:bg-white/10 transition">
                {t('howItWorks')}
              </Link>
            </div>
          </div>
          <div className="hidden md:block relative h-[300px] md:h-[400px]">
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeasOmYAibJFbclG20qpW1p0z_eIxTzo4kWpJYAAZZtAet5ucBWiVWKeFloBb3jmaQAjHvrKF8rXbsT-xPXl4MvuT9WhPCcrdxaEOkUaKchnlhCDVjP1-FgidtRKNzUCky6Pcu7C-7UZXyYjre77TaQOudAWNzPKz1dSW_bMSuoT5i4fL42s37ovkbJfyb2ypqtD_AAhm-6MCO1GQAvDYZ5X3_B1GwbGyIcjCu0KVn-viHMffIm3rZofkaQTw3XDdktTe8hxI4Zjw"
                alt="Electrician"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-12 md:py-16 bg-surface">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">{t('problemsTitle')}</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto mt-2">{t('problemsSub')}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {problems.map((p, idx) => (
              <div key={idx} className="p-4 md:p-6 rounded-xl bg-white shadow-sm border border-outline-variant hover:border-primary hover:shadow-md transition-all group text-center space-y-2">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-primary-container/10 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition">
                  <span className="material-symbols-outlined text-primary text-3xl md:text-4xl">{p.icon}</span>
                </div>
                <h3 className="text-base md:text-xl font-bold text-primary">{p.label}</h3>
                <p className="text-xs md:text-sm text-on-surface-variant">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Steps */}
      <section className="py-12 md:py-16 bg-surface-container">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">{t('stepsTitle')}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-2">
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center font-bold text-lg md:text-2xl shadow-lg border-4 border-surface ${
                  i === 2 ? 'bg-secondary text-white animate-pulse' : 'bg-primary text-white'
                }`}>
                  {step.num}
                </div>
                <h4 className="text-xs md:text-sm font-bold text-primary">{step.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Banner */}
      <section className="py-6 md:py-8">
        <div className="container-custom">
          <div className="bg-error-container rounded-2xl p-4 md:p-8 flex flex-col md:flex-row items-center gap-4 md:gap-6 border-l-8 border-error shadow-sm">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-error text-white rounded-full flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-3xl md:text-4xl">warning</span>
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-lg md:text-2xl font-bold text-on-error-container">{t('safetyTitle')}</h3>
              <p className="text-sm md:text-base text-on-error-container/80">{t('safetyDesc')}</p>
            </div>
            <button className="px-4 md:px-6 py-2 bg-error text-white rounded-lg font-bold shrink-0 hover:opacity-90 transition">
              {t('emergencyCall')}
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="container-custom max-w-2xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">{t('faqTitle')}</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="border border-outline-variant rounded-xl overflow-hidden bg-white shadow-sm">
                <button
                  className="w-full flex justify-between items-center p-4 md:p-5 hover:bg-surface transition-colors"
                  onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}
                >
                  <span className="text-base md:text-lg font-medium text-left text-on-surface">{faq.q}</span>
                  <span className={`material-symbols-outlined transition-transform duration-300 ${activeFaq === faq.id ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${activeFaq === faq.id ? 'max-h-60 p-4 md:p-5 pt-0' : 'max-h-0'}`}>
                  <div className="border-t border-outline-variant pt-3 text-sm md:text-base text-on-surface-variant">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailElectrician;
