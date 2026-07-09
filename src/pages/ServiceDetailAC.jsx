// src/pages/ServiceDetailAC.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  breadcrumbHome: { km: 'ទំព័រដើម', en: 'Home' },
  breadcrumbServices: { km: 'សេវាកម្ម', en: 'Services' },
  breadcrumbAC: { km: 'ម៉ាស៊ីនត្រជាក់', en: 'Air Conditioner' },
  expertBadge: { km: 'សេវាកម្មជំនាញ', en: 'Expert Service' },
  heroTitle: { km: 'សេវាម៉ាស៊ីនត្រជាក់', en: 'Air Conditioner Service' },
  heroDesc: { km: 'សម្អាត ជួសជុល ថែទាំ បញ្ចូលហ្គាស និងដំឡើងម៉ាស៊ីនត្រជាក់ដោយជាងជំនាញដែលអាចទុកចិត្តបាន។', en: 'Clean, repair, maintain, gas refill, and install air conditioners by trusted professional technicians.' },
  loginToBook: { km: 'ចូលប្រើដើម្បីកក់សេវា', en: 'Login to Book Service' },
  howItWorks: { km: 'មើលរបៀបដំណើរការ', en: 'See How It Works' },
  problemsTitle: { km: 'បញ្ហាម៉ាស៊ីនត្រជាក់ដែលយើងអាចដោះស្រាយបាន', en: 'AC Problems We Can Solve' },
  problemsSub: { km: 'មិនថាបញ្ហាតូច ឬធំ ក្រុមការងារយើងនឹងទៅដល់ទីតាំងលោកអ្នកភ្លាមៗ។', en: 'No matter how big or small the issue, our team will arrive at your location promptly.' },
  problemNotCool: { km: 'មិនត្រជាក់', en: 'Not Cooling' },
  problemNotCoolDesc: { km: 'ពិនិត្យ និងដោះស្រាយបញ្ហាមិនត្រជាក់', en: 'Inspect and fix cooling issues' },
  problemWaterLeak: { km: 'ទឹកហូរ', en: 'Water Leak' },
  problemWaterLeakDesc: { km: 'ជួសជុលបញ្ហាទឹកហូរចេញពីម៉ាស៊ីន', en: 'Repair water leaking from the unit' },
  problemNotOn: { km: 'មិនដំណើរការ', en: 'Not Turning On' },
  problemNotOnDesc: { km: 'ពិនិត្យប្រព័ន្ធភ្លើង និងគ្រឿងបន្លាស់', en: 'Check electrical system and parts' },
  problemCleaning: { km: 'សម្អាតម៉ាស៊ីន', en: 'AC Cleaning' },
  problemCleaningDesc: { km: 'លាងសម្អាតកម្ចាត់ធូលី និងមេរោគ', en: 'Deep clean to remove dust and bacteria' },
  problemGas: { km: 'បញ្ចូលហ្គាស', en: 'Gas Refill' },
  problemGasDesc: { km: 'ពិនិត្យ និងបំពេញហ្គាសតាមបច្ចេកទេស', en: 'Check and refill refrigerant to spec' },
  problemInstall: { km: 'ដំឡើង / ផ្លាស់ទី', en: 'Install / Relocate' },
  problemInstallDesc: { km: 'ដំឡើងថ្មី ឬប្តូរទីតាំងម៉ាស៊ីន', en: 'New installation or moving existing unit' },
  benefitsTitle: { km: 'ហេតុអ្វីត្រូវថែទាំម៉ាស៊ីនត្រជាក់?', en: 'Why Maintain Your Air Conditioner?' },
  benefitCool: { km: 'ជួយឱ្យត្រជាក់លឿន', en: 'Cools faster' },
  benefitEnergy: { km: 'កាត់បន្ថយការប្រើប្រាស់ភ្លើង', en: 'Reduces electricity consumption' },
  benefitAir: { km: 'បន្ថយធូលី និងក្លិន', en: 'Reduces dust and odors' },
  benefitLife: { km: 'ពន្យារអាយុកាលម៉ាស៊ីន', en: 'Extends unit lifespan' },
  benefitWater: { km: 'កាត់បន្ថយបញ្ហាទឹកហូរ', en: 'Prevents water leaks' },
  benefitPrevent: { km: 'បង្ការការខូចធ្ងន់ធ្ងរ', en: 'Prevents major breakdowns' },
  noticeTitle: { km: 'តម្លៃច្បាស់លាស់ក្រោយពិនិត្យការងារ', en: 'Clear Pricing After Inspection' },
  noticeDesc: { km: 'តម្លៃចុងក្រោយនឹងបង្ហាញក្នុង E-Invoice បន្ទាប់ពីជាងបញ្ចប់ការងារ។', en: 'The final price will be shown in the E‑Invoice after the technician completes the work.' },
  askInfo: { km: 'សាកសួរព័ត៌មាន', en: 'Ask for Info' },
  faqTitle: { km: 'សំណួរដែលសួរញឹកញាប់', en: 'Frequently Asked Questions' },
  faq1Q: { km: 'តើគួរលាងម៉ាស៊ីនត្រជាក់រៀងរាល់ប៉ុន្មានខែម្តង?', en: 'How often should I clean my air conditioner?' },
  faq1A: { km: 'ជាទូទៅ លោកអ្នកគួរលាងសម្អាតម៉ាស៊ីនត្រជាក់រៀងរាល់ ៣ ទៅ ៦ ខែម្តង ដើម្បីធានាបាននូវខ្យល់អាកាសបរិសុទ្ធ និងសន្សំសំចៃភ្លើង។', en: 'Generally, you should clean your air conditioner every 3 to 6 months to ensure fresh air and save energy.' },
  faq2Q: { km: 'ហេតុអ្វីម៉ាស៊ីនត្រជាក់មានទឹកហូរចេញមកក្រៅ?', en: 'Why is water leaking from my air conditioner?' },
  faq2A: { km: 'មូលហេតុចម្បងគឺដោយសារការកកស្ទះទុយោបង្ហូរទឹក ឬមានធូលីដីច្រើននៅក្នុងថាសទឹក។ ជាងរបស់យើងអាចជួយសម្អាត និងដោះស្រាយបញ្ហានេះបានយ៉ាងឆាប់រហ័ស។', en: 'The main cause is a clogged drain pipe or excessive dust in the drip tray. Our technician can quickly clean and fix this issue.' },
  faq3Q: { km: 'តើសេវាបញ្ចូលហ្គាសមានតម្លៃប៉ុន្មាន?', en: 'How much does a gas refill cost?' },
  faq3A: { km: 'តម្លៃបញ្ចូលហ្គាសអាស្រ័យលើប្រភេទហ្គាស (R22, R32, R410A) និងបរិមាណដែលខ្វះខាត។ ជាងនឹងពិនិត្យ និងជូនដំណឹងតម្លៃមុនពេលអនុវត្ត។', en: 'The cost depends on the type of gas (R22, R32, R410A) and the amount needed. The technician will inspect and inform you of the price before proceeding.' },
};

const ServiceDetailAC = () => {
  const { lang } = useLanguage();
  const t = (key) => translations[key]?.[lang] || key;
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    { id: 1, q: t('faq1Q'), a: t('faq1A') },
    { id: 2, q: t('faq2Q'), a: t('faq2A') },
    { id: 3, q: t('faq3Q'), a: t('faq3A') }
  ];

  const problems = [
    { icon: 'ac_unit', label: t('problemNotCool'), desc: t('problemNotCoolDesc') },
    { icon: 'opacity', label: t('problemWaterLeak'), desc: t('problemWaterLeakDesc') },
    { icon: 'power_off', label: t('problemNotOn'), desc: t('problemNotOnDesc') },
    { icon: 'cleaning_services', label: t('problemCleaning'), desc: t('problemCleaningDesc') },
    { icon: 'gas_meter', label: t('problemGas'), desc: t('problemGasDesc') },
    { icon: 'home_repair_service', label: t('problemInstall'), desc: t('problemInstallDesc') }
  ];

  const benefits = [
    { icon: 'speed', label: t('benefitCool') },
    { icon: 'energy_savings_leaf', label: t('benefitEnergy') },
    { icon: 'air', label: t('benefitAir') },
    { icon: 'calendar_today', label: t('benefitLife') },
    { icon: 'water_drop', label: t('benefitWater') },
    { icon: 'report_problem', label: t('benefitPrevent') }
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
            <span className="text-primary font-bold">{t('breadcrumbAC')}</span>
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
                src="https://i.pinimg.com/736x/69/9e/be/699ebe5061f9381f0d002110bc41f782.jpg"
                alt="AC Technician"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problems - Only Icons, No Images */}
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

      {/* Benefits */}
      <section className="py-12 md:py-16 bg-surface-container-low">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">{t('benefitsTitle')}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {benefits.map((item, idx) => (
              <div key={idx} className="bg-white p-4 md:p-6 rounded-xl shadow-sm flex items-start gap-3 md:gap-4">
                <span className="material-symbols-outlined text-secondary text-2xl md:text-3xl">{item.icon}</span>
                <span className="text-sm md:text-base text-on-surface">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notice */}
      <section className="py-6 md:py-8">
        <div className="container-custom">
          <div className="bg-secondary-container/10 rounded-2xl p-4 md:p-8 flex flex-col md:flex-row items-center gap-4 md:gap-6 border-l-8 border-secondary shadow-sm">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-secondary text-white rounded-full flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-3xl md:text-4xl">payments</span>
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-lg md:text-2xl font-bold text-on-secondary-container">{t('noticeTitle')}</h3>
              <p className="text-sm md:text-base text-on-surface-variant">{t('noticeDesc')}</p>
            </div>
            <button className="px-4 md:px-6 py-2 bg-secondary text-white rounded-lg font-bold shrink-0 hover:opacity-90 transition">
              {t('askInfo')}
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

export default ServiceDetailAC;