// src/pages/Contact.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  title: { km: 'ទំនាក់ទំនងយើង', en: 'Contact Us' },
  subtitle: { km: 'មានសំណួរ ឬចង់ស្វែងយល់បន្ថែមអំពី ហៅជាង? សូមទាក់ទងមកយើង។', en: 'Have questions or want to learn more about Hao Chang? Contact us.' },
  desc: { km: 'ក្រុមការងាររបស់យើងរីករាយក្នុងការឆ្លើយសំណួរ និងទទួលមតិយោបល់ពីអ្នក។', en: 'Our team is happy to answer questions and receive your feedback.' },

  // Contact info
  phone: { km: 'លេខទូរស័ព្ទ', en: 'Phone' },
  phoneNumber: { km: '+855 12 345 678', en: '+855 12 345 678' },
  email: { km: 'អ៊ីមែល', en: 'Email' },
  emailAddress: { km: 'support@haochang.com', en: 'support@haochang.com' },
  telegram: { km: 'Telegram', en: 'Telegram' },
  telegramHandle: { km: '@HaoChangSupport', en: '@HaoChangSupport' },
  facebook: { km: 'Facebook', en: 'Facebook' },
  facebookPage: { km: 'Hao Chang', en: 'Hao Chang' },
  location: { km: 'ទីតាំង', en: 'Location' },
  locationAddress: { km: 'Phnom Penh, Cambodia', en: 'Phnom Penh, Cambodia' },

  // Form
  formTitle: { km: 'ផ្ញើសារមកយើង', en: 'Send Us a Message' },
  name: { km: 'ឈ្មោះ', en: 'Name' },
  phoneInput: { km: 'លេខទូរស័ព្ទ', en: 'Phone Number' },
  emailInput: { km: 'អ៊ីមែល', en: 'Email' },
  subject: { km: 'ប្រធានបទ', en: 'Subject' },
  message: { km: 'សារ', en: 'Message' },
  submit: { km: 'ផ្ញើសារ', en: 'Send Message' },

  // Help sidebar
  needHelp: { km: 'ត្រូវការជំនួយ?', en: 'Need Help?' },
  helpDesc: { km: 'ជ្រើសរើសប្រភេទនៃជំនួយដែលអ្នកត្រូវការ៖', en: 'Choose the type of help you need:' },
  helpBooking: { km: 'ការកក់សេវាកម្ម', en: 'Booking Service' },
  helpRegister: { km: 'ការចុះឈ្មោះ', en: 'Registration' },
  helpReport: { km: 'រាយការណ៍បញ្ហា', en: 'Report Issue' },
  helpEmergency: { km: 'សេវាបន្ទាន់', en: 'Emergency Service' },
  helpButton: { km: 'ទាក់ទង Support', en: 'Contact Support' },

  // FAQ
  faqTitle: { km: 'សំណួរញឹកញាប់', en: 'Frequently Asked Questions' },
  faq1: { km: 'តើខ្ញុំត្រូវរង់ចាំយូរប៉ុណ្ណា?', en: 'How long do I have to wait?' },
  faq1Answer: { km: 'ជាទូទៅជាងនឹងឆ្លើយតបក្នុងរយៈពេល ១៥ ទៅ ៣០ នាទី បន្ទាប់ពីអ្នកដាក់សំណើ។', en: 'Generally, technicians will respond within 15-30 minutes after you submit a request.' },
  faq2: { km: 'តើការទូទាត់ប្រាក់មានសុវត្ថិភាពដែរឬទេ?', en: 'Is payment secure?' },
  faq2Answer: { km: 'ប្រព័ន្ធទូទាត់របស់យើងត្រូវបានការពារដោយសុវត្ថិភាពខ្ពស់បំផុត ជាមួយដៃគូធនាគារក្នុងស្រុក។', en: 'Our payment system is protected with the highest security standards, partnered with local banks.' },
  faq3: { km: 'តើមានការធានាលើការជួសជុលដែរឬទេ?', en: 'Is there a warranty on repairs?' },
  faq3Answer: { km: 'រាល់ការជួសជុលតាមរយៈ Hao Chang មានការធានាគុណភាពរយៈពេល ៣០ ថ្ងៃ។', en: 'All repairs through Hao Chang come with a 30-day quality guarantee.' },
  viewAllFaq: { km: 'មើល FAQ បន្ថែម', en: 'View All FAQs' },

  // Map
  mapTitle: { km: 'តំបន់សេវាកម្ម', en: 'Service Area' },
  mapSub: { km: 'យើងផ្ដល់សេវាកម្មទូទាំងរាជធានីភ្នំពេញ', en: 'We provide services throughout Phnom Penh' },
};

const Contact = () => {
  const { lang } = useLanguage();
  const t = (key) => translations[key]?.[lang] || key;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t('messageSent') || 'សាររបស់អ្នកត្រូវបានផ្ញើដោយជោគជ័យ។');
    e.target.reset();
  };

  // Facebook SVG icon (Bootstrap-style)
  const FacebookIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="currentColor"
      className="bi bi-facebook"
      viewBox="0 0 16 16"
    >
      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
    </svg>
  );

  const contactItems = [
    { icon: 'phone_in_talk', label: t('phone'), value: t('phoneNumber'), color: 'text-primary' },
    { icon: 'mail', label: t('email'), value: t('emailAddress'), color: 'text-primary' },
    { icon: 'send', label: t('telegram'), value: t('telegramHandle'), color: 'text-primary' },
    { icon: 'facebook_svg', label: t('facebook'), value: t('facebookPage'), color: 'text-[#1877F2]' }, // use special key
    { icon: 'location_on', label: t('location'), value: t('locationAddress'), color: 'text-primary' },
  ];

  return (
    <div className="animate-enter">
      {/* Hero */}
      <section className="bg-surface-container-low py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">{t('title')}</h1>
          <p className="text-xl text-on-surface-variant max-w-3xl mx-auto mb-4">{t('subtitle')}</p>
          <p className="text-base text-on-surface-variant opacity-80">{t('desc')}</p>
        </div>
      </section>

      {/* Contact Info Cards with improved icons */}
      <section className="py-16 bg-surface">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {contactItems.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-outline-variant text-center hover:shadow-md transition-all group">
                <div className="w-14 h-14 bg-primary-container/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {item.icon === 'facebook_svg' ? (
                    <FacebookIcon />
                  ) : (
                    <span className={`material-symbols-outlined text-4xl ${item.color}`}>{item.icon}</span>
                  )}
                </div>
                <h3 className="font-bold text-primary mb-1">{item.label}</h3>
                <p className="text-sm text-on-surface-variant">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Help Sidebar (unchanged) */}
      <section className="py-16 bg-surface-container-low">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-outline-variant">
              <h2 className="text-2xl font-bold text-primary mb-6">{t('formTitle')}</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">{t('name')}</label>
                    <input className="input-field" placeholder={t('name')} required type="text" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">{t('phoneInput')}</label>
                    <input className="input-field" placeholder="012 345 678" required type="tel" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">{t('emailInput')}</label>
                  <input className="input-field" placeholder="example@email.com" type="email" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">{t('subject')}</label>
                  <input className="input-field" placeholder={t('subject')} type="text" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">{t('message')}</label>
                  <textarea className="input-field" placeholder={t('message')} required rows="4"></textarea>
                </div>
                <button type="submit" className="btn-primary w-full text-lg">{t('submit')}</button>
              </form>
            </div>

            {/* Help Sidebar */}
            <div className="flex flex-col gap-6">
              <div className="bg-primary text-white p-8 rounded-2xl shadow-xl flex flex-col h-full">
                <h2 className="text-2xl font-bold mb-4">{t('needHelp')}</h2>
                <p className="mb-6 opacity-80">{t('helpDesc')}</p>
                <ul className="space-y-4 mb-8">
                  {[
                    { icon: 'calendar_month', label: t('helpBooking') },
                    { icon: 'app_registration', label: t('helpRegister') },
                    { icon: 'report_problem', label: t('helpReport') },
                    { icon: 'emergency', label: t('helpEmergency') },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary-container">{item.icon}</span>
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/help" className="w-full py-4 bg-secondary-container text-primary font-bold rounded-xl hover:scale-[1.02] transition text-center">
                  {t('helpButton')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview (unchanged) */}
      <section className="py-16 bg-surface">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">{t('faqTitle')}</h2>
            <div className="w-20 h-1 bg-secondary-container mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { q: t('faq1'), a: t('faq1Answer') },
              { q: t('faq2'), a: t('faq2Answer') },
              { q: t('faq3'), a: t('faq3Answer') },
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-surface-container-low border border-outline-variant hover:shadow-md transition-shadow">
                <h4 className="text-lg font-bold text-primary mb-2">{item.q}</h4>
                <p className="text-base text-on-surface-variant">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/help" className="px-8 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all">
              {t('viewAllFaq')}
            </Link>
          </div>
        </div>
      </section>

      {/* Map (unchanged) */}
      <section className="py-16 bg-surface-container">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">{t('mapTitle')}</h2>
            <p className="text-base text-on-surface-variant">{t('mapSub')}</p>
          </div>
          <div className="w-full h-80 md:h-[450px] bg-outline-variant rounded-3xl overflow-hidden shadow-inner relative">
            <div className="absolute inset-0 bg-cover bg-center" style={{
              backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuAU9Z1HdEmdgePoDfZQKxcUD2ISH6BP5lsPj7yrym1JGrE8Kroob6vO9VEuLoOf0B9goR4jflBd79SekryGA8lLY7OKdGuwrLZYyqiam2v8BSbEMdgLPqJ7wO6-vFj3VMmPlhPTQy1IPofXcbOeNOJcuAF2mYwedvaBP7mbR7jHEJ7d1TmwzKJ-1I9cDw9RwIcr4x-thnhjUnogGjYMWW6w24HsIbX1rHHC7JgHYQI8ODGNF5Y0WU4AwE8TV6t3HSjf38lwMb1rzUQ)'
            }}></div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                <span className="material-symbols-outlined">location_on</span>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg border border-outline-variant">
              <p className="font-bold text-primary">ភ្នំពេញ, កម្ពុជា</p>
              <p className="text-xs text-on-surface-variant">គ្របដណ្តប់ ១៤ ខណ្ឌ</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;