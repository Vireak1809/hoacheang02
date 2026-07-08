// src/pages/HowItWorks.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  heroTitle: { km: 'របៀបដំណើរការ', en: 'How It Works' },
  heroDesc: { km: 'ហៅជាង ធ្វើឱ្យការរកជាងកាន់តែងាយស្រួល ជាមួយប្រព័ន្ធបច្ចេកវិទ្យាទំនើប ដើម្បីជួយអ្នកដោះស្រាយបញ្ហានៅក្នុងផ្ទះដោយភាពជឿជាក់ និងរហ័សបំផុត។', en: 'Hao Chang makes finding a technician easy, with a modern technology system to help you solve home problems reliably and fast.' },

  // Steps
  step1Label: { km: 'ចុះឈ្មោះប្រើប្រាស់', en: 'Sign Up' },
  step1Desc: { km: 'បង្កើតគណនីរបស់អ្នកងាយៗជាមួយលេខទូរស័ព្ទ', en: 'Create your account easily with your phone number' },
  step2Label: { km: 'ជ្រើសរើសសេវាកម្ម', en: 'Select a Service' },
  step2Desc: { km: 'មានសេវាកម្មជាច្រើនដូចជា ជួសជុលអគ្គិសនី ម៉ាស៊ីនត្រជាក់ ទឹក និងសំណង់', en: 'Various services like electrical, AC, plumbing, and construction' },
  step3Label: { km: 'រៀបរាប់បញ្ហា', en: 'Describe the Problem' },
  step3Desc: { km: 'ផ្ដល់ព័ត៌មានលម្អិតអំពីបញ្ហា និងភ្ជាប់ជាមួយរូបភាព', en: 'Provide detailed info about the issue and attach photos' },
  step4Label: { km: 'បញ្ជាក់ទីតាំង', en: 'Set Location' },
  step4Desc: { km: 'កំណត់ទីតាំងផ្ទះរបស់អ្នកនៅលើផែនទី', en: 'Pin your house location on the map' },
  step5Label: { km: 'ជ្រើសរើសជាង', en: 'Choose a Technician' },
  step5Desc: { km: 'ពិនិត្យមើលប្រវត្តិរូប ការវាយតម្លៃ និងតម្លៃសេវាកម្ម', en: 'Check profile, ratings, and service pricing' },
  step6Label: { km: 'តាមដានដំណើរការ', en: 'Track Progress' },
  step6Desc: { km: 'តាមដានទីតាំងរបស់ជាង និងស្ថានភាពការងារ', en: 'Track technician location and job status' },
  step7Label: { km: 'បង់ប្រាក់ងាយៗ', en: 'Pay Easily' },
  step7Desc: { km: 'បង់ប្រាក់តាមរយៈ ABA ឬមធ្យោបាយផ្សេងៗ', en: 'Pay via ABA or other methods' },
  step8Label: { km: 'ការវាយតម្លៃ', en: 'Rating & Review' },
  step8Desc: { km: 'ផ្ដល់ពិន្ទុ និងមតិយោបល់ ដើម្បីជួយកែលម្អគុណភាពសេវាកម្ម', en: 'Give a score and comment to help improve service quality' },

  // CTA
  ctaTitle: { km: 'ត្រៀមខ្លួនរួចរាល់ហើយឬនៅ?', en: 'Ready to get started?' },
  ctaDesc: { km: 'កុំរង់ចាំយូរ! ចាប់ផ្ដើមស្វែងរកជាងជំនាញដើម្បីដោះស្រាយបញ្ហានៅក្នុងគេហដ្ឋានរបស់អ្នកថ្ងៃនេះ។', en: 'Don\'t wait! Start finding a skilled technician to solve your home problems today.' },
  ctaButton: { km: 'ចាប់ផ្ដើមបង្កើតគណនី', en: 'Create an Account' },

  // FAQ
  faqTitle: { km: 'សំណួរដែលសួរញឹកញាប់', en: 'Frequently Asked Questions' },
  faq1q: { km: 'តើខ្ញុំត្រូវរង់ចាំយូរប៉ុន្មាន?', en: 'How long do I have to wait?' },
  faq1a: { km: 'ជាទូទៅជាងនឹងឆ្លើយតបក្នុងរយៈពេល ១៥ ទៅ ៣០ នាទី បន្ទាប់ពីអ្នកដាក់សំណើ។', en: 'Typically a technician will respond within 15 to 30 minutes after you submit a request.' },
  faq2q: { km: 'តើការទូទាត់ប្រាក់មានសុវត្ថិភាពដែរឬទេ?', en: 'Is payment secure?' },
  faq2a: { km: 'ប្រព័ន្ធទូទាត់របស់យើងត្រូវបានការពារដោយសុវត្ថិភាពខ្ពស់បំផុត ជាមួយដៃគូធនាគារក្នុងស្រុក។', en: 'Our payment system is protected by top security with local banking partners.' },
};

const HowItWorks = () => {
  const { lang } = useLanguage();
  const t = (key) => translations[key]?.[lang] || key;

  const steps = [
    { num: '1', icon: 'person_add', labelKey: 'step1Label', descKey: 'step1Desc' },
    { num: '2', icon: 'handyman', labelKey: 'step2Label', descKey: 'step2Desc' },
    { num: '3', icon: 'description', labelKey: 'step3Label', descKey: 'step3Desc' },
    { num: '4', icon: 'location_on', labelKey: 'step4Label', descKey: 'step4Desc' },
    { num: '5', icon: 'badge', labelKey: 'step5Label', descKey: 'step5Desc' },
    { num: '6', icon: 'near_me', labelKey: 'step6Label', descKey: 'step6Desc' },
    { num: '7', icon: 'payments', labelKey: 'step7Label', descKey: 'step7Desc' },
    { num: '8', icon: 'grade', labelKey: 'step8Label', descKey: 'step8Desc' },
  ];

  return (
    <div className="animate-enter">
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-16 md:py-24">
        <div className="container-custom text-center relative z-10">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-6">{t('heroTitle')}</h1>
          <p className="text-on-primary-container text-lg max-w-2xl mx-auto opacity-90 leading-relaxed">
            {t('heroDesc')}
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 bg-surface-container-lowest">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="step-card group relative p-6 rounded-xl bg-surface shadow-md hover:shadow-lg transition border border-outline-variant/30 flex flex-col h-full">
                <div className="step-number absolute -top-4 -left-4 z-10 shadow-lg">{step.num}</div>
                <div className="w-16 h-16 rounded-lg bg-surface-container mb-4 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition">
                  <span className="material-symbols-outlined text-4xl">{step.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{t(step.labelKey)}</h3>
                <p className="text-sm text-on-surface-variant flex-grow">{t(step.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-surface-container">
        <div className="container-custom">
          <div className="bg-primary rounded-3xl overflow-hidden relative shadow-xl flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 p-8 md:p-12 relative z-10">
              <h2 className="text-white text-3xl font-bold mb-4">{t('ctaTitle')}</h2>
              <p className="text-on-primary-container text-lg mb-6 opacity-90">
                {t('ctaDesc')}
              </p>
              <Link to="/register">
                <button className="px-12 py-4 bg-secondary text-white text-xl font-bold rounded-xl hover:scale-105 transition shadow-lg shadow-secondary/30">
                  {t('ctaButton')}
                </button>
              </Link>
            </div>
            <div className="w-full md:w-1/2 h-64 md:h-[400px] relative">
              <div className="absolute inset-0 bg-cover bg-center" style={{
                backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuBwv0hJ0BxjqbqoYtwilLCcJXFPoX6anc5sL176_Q9D7Rb88vKZ7ir12Ni33_HcVZc00Btinxjlr2_YdYwbxRVVkS_U_hOrzY-Sx1cuytjkCP6F1X3o5IqsOV0hQrGD2bBMoAJXPURbYi4Wd7Dwfha0m5R5-XFbcve5JvKdTYmkybWpCv5k7BZZBdIhCmlfmXOiJ_uoVDENuO9vp8Lsoq7LcBHn8Wc-st0LUZS_Mm9MGzbrS9vobamfukFP_icLuIV0EETRbGgDFAM)'
              }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-surface">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary mb-4">{t('faqTitle')}</h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant">
              <h4 className="text-xl font-bold text-primary mb-2">{t('faq1q')}</h4>
              <p className="text-sm text-on-surface-variant">{t('faq1a')}</p>
            </div>
            <div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant">
              <h4 className="text-xl font-bold text-primary mb-2">{t('faq2q')}</h4>
              <p className="text-sm text-on-surface-variant">{t('faq2a')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;