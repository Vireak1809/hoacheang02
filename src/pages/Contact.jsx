// src/pages/Contact.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  pageTitle: { km: 'ទំនាក់ទំនងយើង', en: 'Contact Us' },
  pageSubtitle: { km: 'មានសំណួរ ឬចង់ស្វែងយល់បន្ថែមអំពី ហៅជាង សូមទាក់ទងមកយើង។', en: 'Have questions or want to learn more about Hao Chang? Contact us.' },
  pageDesc: { km: 'ក្រុមការងាររបស់យើងរីករាយក្នុងការឆ្លើយសំណួរ និងទទួលមតិយោបល់ពីអ្នក។', en: 'Our team is happy to answer questions and receive your feedback.' },
  phoneLabel: { km: 'លេខទូរស័ព្ទ', en: 'Phone' },
  emailLabel: { km: 'អ៊ីមែល', en: 'Email' },
  telegramLabel: { km: 'Telegram', en: 'Telegram' },
  facebookLabel: { km: 'Facebook', en: 'Facebook' },
  locationLabel: { km: 'ទីតាំង', en: 'Location' },
  contactInfoPhone: { km: '+855 12 345 678', en: '+855 12 345 678' },
  contactInfoEmail: { km: 'support@haochang.com', en: 'support@haochang.com' },
  contactInfoTelegram: { km: '@HaoChangSupport', en: '@HaoChangSupport' },
  contactInfoFacebook: { km: 'Hao Chang', en: 'Hao Chang' },
  contactInfoLocation: { km: 'Phnom Penh, Cambodia', en: 'Phnom Penh, Cambodia' },
  formTitle: { km: 'ផ្ញើសារមកយើង', en: 'Send Us a Message' },
  nameLabel: { km: 'ឈ្មោះ', en: 'Name' },
  namePlaceholder: { km: 'បញ្ចូលឈ្មោះ', en: 'Enter your name' },
  phoneInputLabel: { km: 'លេខទូរស័ព្ទ', en: 'Phone Number' },
  phonePlaceholder: { km: '012 345 678', en: '012 345 678' },
  emailInputLabel: { km: 'អ៊ីមែល', en: 'Email' },
  emailPlaceholder: { km: 'example@email.com', en: 'example@email.com' },
  subjectLabel: { km: 'ប្រធានបទ', en: 'Subject' },
  subjectPlaceholder: { km: 'ប្រធានបទនៃសារ', en: 'Message subject' },
  messageLabel: { km: 'សារ', en: 'Message' },
  messagePlaceholder: { km: 'សរសេរសាររបស់អ្នកនៅទីនេះ...', en: 'Write your message here...' },
  submitButton: { km: 'ផ្ញើសារ', en: 'Send Message' },
  successAlert: { km: 'សាររបស់អ្នកត្រូវបានផ្ញើដោយជោគជ័យ។', en: 'Your message has been sent successfully.' },
  helpTitle: { km: 'ត្រូវការជំនួយ?', en: 'Need Help?' },
  helpDesc: { km: 'ជ្រើសរើសប្រភេទនៃជំនួយដែលអ្នកត្រូវការ៖', en: 'Choose the type of help you need:' },
  helpBooking: { km: 'ការកក់សេវាកម្ម', en: 'Service Booking' },
  helpRegistration: { km: 'ការចុះឈ្មោះ', en: 'Registration' },
  helpReport: { km: 'រាយការណ៍បញ្ហា', en: 'Report a Problem' },
  helpEmergency: { km: 'សេវាបន្ទាន់', en: 'Emergency Service' },
  supportButton: { km: 'ទាក់ទង Support', en: 'Contact Support' },
  serviceAreaTitle: { km: 'តំបន់សេវាកម្ម', en: 'Service Area' },
  serviceAreaDesc: { km: 'យើងផ្ដល់សេវាកម្មទូទាំងរាជធានីភ្នំពេញ', en: 'We provide services throughout Phnom Penh' },
  serviceAreaCity: { km: 'ភ្នំពេញ, កម្ពុជា', en: 'Phnom Penh, Cambodia' },
  serviceAreaCoverage: { km: 'គ្របដណ្តប់ ១៤ ខណ្ឌ', en: 'Covering 14 districts' },
};

const Contact = () => {
  const { lang } = useLanguage();
  const t = (key) => translations[key]?.[lang] || key;

  const contactItems = [
    { icon: 'phone_in_talk', labelKey: 'phoneLabel', valueKey: 'contactInfoPhone' },
    { icon: 'mail', labelKey: 'emailLabel', valueKey: 'contactInfoEmail' },
    { icon: 'send', labelKey: 'telegramLabel', valueKey: 'contactInfoTelegram' },
    { icon: 'facebook', labelKey: 'facebookLabel', valueKey: 'contactInfoFacebook' },
    { icon: 'location_on', labelKey: 'locationLabel', valueKey: 'contactInfoLocation' },
  ];

  const helpItems = [
    { icon: 'calendar_month', labelKey: 'helpBooking' },
    { icon: 'app_registration', labelKey: 'helpRegistration' },
    { icon: 'report_problem', labelKey: 'helpReport' },
    { icon: 'emergency', labelKey: 'helpEmergency' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t('successAlert'));
  };

  return (
    <div className="animate-enter">
      {/* Hero */}
      <section className="bg-surface-container-low py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">{t('pageTitle')}</h1>
          <p className="text-xl text-on-surface-variant max-w-3xl mx-auto mb-4">
            {t('pageSubtitle')}
          </p>
          <p className="text-base text-on-surface-variant opacity-80">{t('pageDesc')}</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-surface">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {contactItems.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-outline-variant text-center">
                <div className="w-12 h-12 bg-primary-container text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                </div>
                <h3 className="font-bold text-primary mb-1">{t(item.labelKey)}</h3>
                <p className="text-sm text-on-surface-variant">{t(item.valueKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-surface-container-low">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-outline-variant">
              <h2 className="text-2xl font-bold text-primary mb-6">{t('formTitle')}</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">{t('nameLabel')}</label>
                    <input className="input-field" placeholder={t('namePlaceholder')} required type="text" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">{t('phoneInputLabel')}</label>
                    <input className="input-field" placeholder={t('phonePlaceholder')} required type="tel" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">{t('emailInputLabel')}</label>
                  <input className="input-field" placeholder={t('emailPlaceholder')} type="email" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">{t('subjectLabel')}</label>
                  <input className="input-field" placeholder={t('subjectPlaceholder')} type="text" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">{t('messageLabel')}</label>
                  <textarea className="input-field" placeholder={t('messagePlaceholder')} required rows="4"></textarea>
                </div>
                <button type="submit" className="btn-primary w-full text-lg">{t('submitButton')}</button>
              </form>
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-primary text-white p-8 rounded-2xl shadow-xl flex flex-col h-full">
                <h2 className="text-2xl font-bold mb-4">{t('helpTitle')}</h2>
                <p className="mb-6 opacity-80">{t('helpDesc')}</p>
                <ul className="space-y-4 mb-8">
                  {helpItems.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary-container">{item.icon}</span>
                      {t(item.labelKey)}
                    </li>
                  ))}
                </ul>
                <Link to="/help">
                  <button className="w-full py-4 bg-secondary-container text-primary font-bold rounded-xl hover:scale-[1.02] transition">
                    {t('supportButton')}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-surface-container">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">{t('serviceAreaTitle')}</h2>
            <p className="text-base text-on-surface-variant">{t('serviceAreaDesc')}</p>
          </div>
          <div className="w-full h-80 md:h-[450px] bg-outline-variant rounded-3xl overflow-hidden shadow-inner relative">
            <div className="absolute inset-0 bg-cover bg-center" style={{
              backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuAU9Z1HdEmdgePoDfZQKxcUD2ISH6BP5lsPj7yrym1JGrE8Kroob6vO9VEuLoOf0B9goR4jflBd79SekryGA8lLY7OKdGuwrLZYyqiam2v8BSbEMdgLPqJ7wO6-vFj3VMmPlhPTQy1IPofXcbOeNOJcuAF2mYwedvaBP7mbR7jHEJ7d1TmwzKJ-1I9cDw9RwIcr4x-thnhjUnogGjYMWW6w24HsIbX1rHHC7JgHYQI8ODGNF5Y0WU4AwE8TV6t3HSjf38lwMb1rzUQ)'
            }}></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                <span className="material-symbols-outlined">location_on</span>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg border border-outline-variant">
              <p className="font-bold text-primary">{t('serviceAreaCity')}</p>
              <p className="text-xs text-on-surface-variant">{t('serviceAreaCoverage')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;