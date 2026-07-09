// src/pages/Services.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  title: { km: 'សេវាកម្មរបស់យើង', en: 'Our Services' },
  subtitle: { km: 'ស្វែងរកជាងជំនាញដែលអាចទុកចិត្តបាន', en: 'Find skilled technicians you can trust' },
  
  // Service cards
  plumberTitle: { km: 'ជាងទឹក (Plumbing)', en: 'Plumbing' },
  plumberItems: { km: ['ការលេចធ្លាយទឹក', 'ស្ទះលូ និងបង្គន់', 'ដំឡើងក្បាលម៉ាស៊ីន', 'ជួសជុលម៉ាស៊ីនបូមទឹក'], en: ['Pipe Leakage', 'Clogged Drains & Toilets', 'Faucet Installation', 'Water Pump Repair'] },
  plumberLink: { km: 'មើលសេវាជាងទឹក', en: 'View Plumbing Services' },
  
  electricianTitle: { km: 'ជាងភ្លើង (Electric)', en: 'Electrical' },
  electricianItems: { km: ['ឆ្លងចរន្តអគ្គិសនី', 'ដំឡើងឧបករណ៍អគ្គិសនី', 'ប្តូរបណ្តាញខ្សែភ្លើង', 'ជួសជុលប្រអប់ហ្វុយហ្ស៊ីប'], en: ['Short Circuit Fix', 'Electrical Installation', 'Rewiring', 'Fuse Box Repair'] },
  electricianLink: { km: 'មើលសេវាជាងភ្លើង', en: 'View Electrical Services' },
  
  acTitle: { km: 'ម៉ាស៊ីនត្រជាក់ (AC)', en: 'Air Conditioning' },
  acItems: { km: ['លាងសម្អាតម៉ាស៊ីនត្រជាក់', 'បញ្ចូលហ្គាស', 'ជួសជុលម៉ាស៊ីនត្រជាក់', 'ដំឡើងម៉ាស៊ីនត្រជាក់ថ្មី'], en: ['AC Cleaning', 'Gas Refill', 'AC Repair', 'New AC Installation'] },
  acLink: { km: 'មើលសេវាម៉ាស៊ីនត្រជាក់', en: 'View AC Services' },
  
  // Why Choose Us
  whyTitle: { km: 'ហេតុអ្វីជ្រើសរើស Hao Chang?', en: 'Why Choose Hao Chang?' },
  skilled: { km: 'ជាងមានជំនាញ', en: 'Skilled Technicians' },
  skilledDesc: { km: 'រាល់ជាងទាំងអស់មានបទពិសោធន៍យ៉ាងតិច ៣ ឆ្នាំ', en: 'Every technician has at least 3 years of experience' },
  fast: { km: 'រហ័សទាន់ចិត្ត', en: 'Fast Response' },
  fastDesc: { km: 'ជាងនឹងទៅដល់ក្នុងរយៈពេល ៣០ នាទី', en: 'Technicians will arrive within 30 minutes' },
  invoice: { km: 'E-Invoice ច្បាស់លាស់', en: 'E-Invoice' },
  invoiceDesc: { km: 'ទទួលវិក្កយបត្រអេឡិចត្រូនិចភ្លាមៗ', en: 'Receive electronic invoices immediately' },
  
  // CTA
  ctaTitle: { km: 'ត្រៀមខ្លួនដើម្បីកក់សេវា?', en: 'Ready to Book a Service?' },
  ctaDesc: { km: 'ចុះឈ្មោះឥឡូវនេះ ដើម្បីចាប់ផ្ដើមប្រើប្រាស់សេវាកម្មជួសជុលគេហដ្ឋានដែលរហ័ស និងទុកចិត្តបាន។', en: 'Sign up now to start using our fast and reliable home repair services.' },
  ctaButton: { km: 'ចាប់ផ្ដើមប្រើប្រាស់', en: 'Get Started' },
};

const Services = () => {
  const { lang } = useLanguage();
  const t = (key) => translations[key]?.[lang] || key;

  const services = [
    {
      icon: 'water_drop',
      titleKey: 'plumberTitle',
      itemsKey: 'plumberItems',
      link: '/service/plumber',
      linkLabelKey: 'plumberLink',
      color: 'bg-primary-container text-white',
    },
    {
      icon: 'bolt',
      titleKey: 'electricianTitle',
      itemsKey: 'electricianItems',
      link: '/service/electrician',
      linkLabelKey: 'electricianLink',
      color: 'bg-secondary-container text-on-secondary-container',
    },
    {
      icon: 'ac_unit',
      titleKey: 'acTitle',
      itemsKey: 'acItems',
      link: '/service/ac',
      linkLabelKey: 'acLink',
      color: 'bg-surface-tint text-white',
    },
  ];

  const benefits = [
    { icon: 'verified_user', titleKey: 'skilled', descKey: 'skilledDesc' },
    { icon: 'timer', titleKey: 'fast', descKey: 'fastDesc' },
    { icon: 'receipt_long', titleKey: 'invoice', descKey: 'invoiceDesc' },
  ];

  return (
    <div className="animate-enter">
      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-primary-container overflow-hidden">
        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('title')}</h1>
          <p className="text-lg text-on-primary-container max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-surface">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((svc, idx) => (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 flex flex-col h-full shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border border-outline-variant/30"
              >
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${svc.color}`}>
                  <span className="material-symbols-outlined text-4xl">{svc.icon}</span>
                </div>
                <h2 className="text-2xl font-bold text-primary mb-4">{t(svc.titleKey)}</h2>
                <ul className="space-y-2 mb-auto">
                  {t(svc.itemsKey).map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-on-surface-variant text-sm">
                      <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to={svc.link}>
                  <button className="mt-6 w-full py-3 bg-primary text-white font-bold rounded-xl hover:opacity-90 transition">
                    {t(svc.linkLabelKey)}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-surface-container-low">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-4">
              <h3 className="text-3xl font-bold text-primary">{t('whyTitle')}</h3>
              <div className="space-y-3">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="p-2 bg-secondary/10 rounded-full">
                      <span className="material-symbols-outlined text-secondary">{benefit.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface">{t(benefit.titleKey)}</h4>
                      <p className="text-sm text-on-surface-variant">{t(benefit.descKey)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full">
              <div
                className="aspect-video rounded-2xl overflow-hidden shadow-xl bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url(https://lh3.googleusercontent.com/aida-public/AB6AXuCUtUtnQHaqqPpydvE5SmFeafNcEotirxoM3KUQjN77JtCrbRxPVBCfuFt2eYP42sXxWpgzLusJKtan2nwOHXwqc3iXH5Ow7UF7XQbFwYmlRe6JLvHXonDg_bcs4l28kKvbN82YR6a_v799ipw92p1-_Z-7QFbdAsgh0KHA_NGVyDqPQUVN6Oqs73-fVhwzGr8jbvFFSXwLl31kvfTG1gfmUJDk89LLcRSeeV7Yi4BiizOAPaiNaw68w_w3S3gzI7UOdhEofkjgcm8)',
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-full mb-4">
            <span className="material-symbols-outlined text-4xl">account_circle</span>
          </div>
          <h3 className="text-3xl font-bold mb-4">{t('ctaTitle')}</h3>
          <p className="text-base text-white/80 mb-6 max-w-xl mx-auto">{t('ctaDesc')}</p>
          <Link to="/register">
            <button className="px-10 py-4 bg-secondary text-white font-bold rounded-full hover:scale-105 transition shadow-lg">
              {t('ctaButton')}
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;