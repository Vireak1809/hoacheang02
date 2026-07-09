// src/pages/HowItWorks.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  title: { km: 'របៀបដំណើរការ', en: 'How It Works' },
  subtitle: { km: 'ហៅជាង ធ្វើឱ្យការរកជាងកាន់តែងាយស្រួល ជាមួយប្រព័ន្ធបច្ចេកវិទ្យាទំនើប ដើម្បីជួយអ្នកដោះស្រាយបញ្ហានៅក្នុងផ្ទះដោយភាពជឿជាក់ និងរហ័សបំផុត។', en: 'Hao Chang makes finding a technician easier with modern technology to help you solve home problems reliably and quickly.' },
  
  steps: [
    { num: '1', icon: 'person_add', label: { km: 'ចុះឈ្មោះប្រើប្រាស់', en: 'Create Account' }, desc: { km: 'បង្កើតគណនីរបស់អ្នកងាយៗជាមួយលេខទូរស័ព្ទ', en: 'Create your account easily with your phone number' } },
    { num: '2', icon: 'handyman', label: { km: 'ជ្រើសរើសសេវាកម្ម', en: 'Select Service' }, desc: { km: 'មានសេវាកម្មជាច្រើនដូចជា ជួសជុលអគ្គិសនី ម៉ាស៊ីនត្រជាក់ ទឹក និងសំណង់', en: 'Choose from many services like Electrical, AC, Plumbing, and Construction' } },
    { num: '3', icon: 'description', label: { km: 'រៀបរាប់បញ្ហា', en: 'Describe Problem' }, desc: { km: 'ផ្ដល់ព័ត៌មានលម្អិតអំពីបញ្ហា និងភ្ជាប់ជាមួយរូបភាព', en: 'Provide details about your issue and upload images' } },
    { num: '4', icon: 'location_on', label: { km: 'បញ្ជាក់ទីតាំង', en: 'Set Location' }, desc: { km: 'កំណត់ទីតាំងផ្ទះរបស់អ្នកនៅលើផែនទី', en: 'Specify your home location on the map' } },
    { num: '5', icon: 'badge', label: { km: 'ជ្រើសរើសជាង', en: 'Choose Technician' }, desc: { km: 'ពិនិត្យមើលប្រវត្តិរូប ការវាយតម្លៃ និងតម្លៃសេវាកម្ម', en: 'Check profiles, ratings, and service prices' } },
    { num: '6', icon: 'near_me', label: { km: 'តាមដានដំណើរការ', en: 'Track Progress' }, desc: { km: 'តាមដានទីតាំងរបស់ជាង និងស្ថានភាពការងារ', en: 'Track technician location and work status' } },
    { num: '7', icon: 'payments', label: { km: 'បង់ប្រាក់ងាយៗ', en: 'Pay Easily' }, desc: { km: 'បង់ប្រាក់តាមរយៈ ABA ឬមធ្យោបាយផ្សេងៗ', en: 'Pay via ABA or other payment methods' } },
    { num: '8', icon: 'grade', label: { km: 'ការវាយតម្លៃ', en: 'Rate Service' }, desc: { km: 'ផ្ដល់ពិន្ទុ និងមតិយោបល់ ដើម្បីជួយកែលម្អគុណភាពសេវាកម្ម', en: 'Leave a rating and feedback to help us improve' } },
  ],
  
  ctaTitle: { km: 'ត្រៀមខ្លួនរួចរាល់ហើយឬនៅ?', en: 'Ready to Get Started?' },
  ctaDesc: { km: 'កុំរង់ចាំយូរ! ចាប់ផ្ដើមស្វែងរកជាងជំនាញដើម្បីដោះស្រាយបញ្ហានៅក្នុងគេហដ្ឋានរបស់អ្នកថ្ងៃនេះ។', en: "Don't wait! Start finding skilled technicians to solve your home problems today." },
  ctaButton: { km: 'ចាប់ផ្ដើមបង្កើតគណនី', en: 'Create Account Now' },
  
  faqTitle: { km: 'សំណួរដែលសួរញឹកញាប់', en: 'Frequently Asked Questions' },
  faq1: { km: 'តើខ្ញុំត្រូវរង់ចាំយូរប៉ុណ្ណា?', en: 'How long do I have to wait?' },
  faq1Answer: { km: 'ជាទូទៅជាងនឹងឆ្លើយតបក្នុងរយៈពេល ១៥ ទៅ ៣០ នាទី បន្ទាប់ពីអ្នកដាក់សំណើ។', en: 'Generally, technicians will respond within 15-30 minutes after you submit a request.' },
  faq2: { km: 'តើការទូទាត់ប្រាក់មានសុវត្ថិភាពដែរឬទេ?', en: 'Is payment secure?' },
  faq2Answer: { km: 'ប្រព័ន្ធទូទាត់របស់យើងត្រូវបានការពារដោយសុវត្ថិភាពខ្ពស់បំផុត ជាមួយដៃគូធនាគារក្នុងស្រុក។', en: 'Our payment system is protected with the highest security standards, partnered with local banks.' },
};

const HowItWorks = () => {
  const { lang } = useLanguage();
  const t = (key) => {
    if (typeof key === 'string' && translations[key]) {
      return translations[key]?.[lang] || key;
    }
    return key;
  };

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.step-card').forEach((card, i) => {
      card.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-500');
      card.style.transitionDelay = `${i * 100}ms`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const getTranslation = (obj) => obj?.[lang] || obj;

  return (
    <div className="animate-enter">
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-16 md:py-24">
        <div className="container-custom text-center relative z-10">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">{t('title')}</h1>
          <p className="text-on-primary-container text-lg max-w-2xl mx-auto opacity-90 leading-relaxed">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 bg-surface-container-lowest">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {translations.steps.map((step, idx) => (
              <div
                key={idx}
                className="step-card group relative p-6 rounded-xl bg-surface shadow-md hover:shadow-lg transition-all border border-outline-variant/30 flex flex-col h-full"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-secondary-container group-hover:text-on-secondary-container">
                  {step.num}
                </div>
                <div className="w-16 h-16 rounded-lg bg-surface-container mb-4 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-4xl">{step.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{getTranslation(step.label)}</h3>
                <p className="text-sm text-on-surface-variant flex-grow">{getTranslation(step.desc)}</p>
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
              <p className="text-on-primary-container text-lg mb-6 opacity-90">{t('ctaDesc')}</p>
              <Link to="/register">
                <button className="px-12 py-4 bg-secondary text-white text-xl font-bold rounded-xl hover:scale-105 transition shadow-lg shadow-secondary/30">
                  {t('ctaButton')}
                </button>
              </Link>
            </div>
            <div className="w-full md:w-1/2 h-64 md:h-[400px] relative">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url(https://lh3.googleusercontent.com/aida-public/AB6AXuBwv0hJ0BxjqbqoYtwilLCcJXFPoX6anc5sL176_Q9D7Rb88vKZ7ir12Ni33_HcVZc00Btinxjlr2_YdYwbxRVVkS_U_hOrzY-Sx1cuytjkCP6F1X3o5IqsOV0hQrGD2bBMoAJXPURbYi4Wd7Dwfha0m5R5-XFbcve5JvKdTYmkybWpCv5k7BZZBdIhCmlfmXOiJ_uoVDENuO9vp8Lsoq7LcBHn8Wc-st0LUZS_Mm9MGzbrS9vobamfukFP_icLuIV0EETRbGgDFAM)',
                }}
              ></div>
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
            <div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant hover:shadow-md transition-shadow">
              <h4 className="text-xl font-bold text-primary mb-2">{t('faq1')}</h4>
              <p className="text-base text-on-surface-variant">{t('faq1Answer')}</p>
            </div>
            <div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant hover:shadow-md transition-shadow">
              <h4 className="text-xl font-bold text-primary mb-2">{t('faq2')}</h4>
              <p className="text-base text-on-surface-variant">{t('faq2Answer')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;