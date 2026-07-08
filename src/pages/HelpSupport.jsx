// src/pages/HelpSupport.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  pageTitle: { km: 'ជំនួយ', en: 'Help' },
  pageSubtitle: { km: 'ស្វែងរកចម្លើយ សួរសំណួរ ឬទាក់ទង Support', en: 'Find answers, ask questions, or contact support' },
  // Search section
  searchHeading: { km: 'តើយើងអាចជួយអ្វីបានខ្លះ?', en: 'How can we help you?' },
  searchPlaceholder: { km: 'ស្វែងរកសំណួរ ឬប្រធានបទ...', en: 'Search questions or topics...' },
  searchButton: { km: 'ស្វែងរក', en: 'Search' },
  popularTopics: { km: 'ប្រធានបទពេញនិយម:', en: 'Popular topics:' },
  topicBooking: { km: 'របៀបកក់សេវា', en: 'How to book' },
  topicPayment: { km: 'ការបង់ប្រាក់', en: 'Payments' },
  topicInvoice: { km: 'E-Invoice', en: 'E-Invoice' },
  // Categories
  catPlatform: { km: 'របៀបប្រើ Platform', en: 'Platform Guide' },
  catPlatformDesc: { km: 'ណែនាំពីរបៀបប្រើប្រាស់ App និង Website', en: 'How to use the App & Website' },
  catBooking: { km: 'ការកក់សេវា', en: 'Service Booking' },
  catBookingDesc: { km: 'របៀបជ្រើសរើសជាង និងបញ្ជាក់ការកក់', en: 'How to select a technician & confirm booking' },
  catPayment: { km: 'ការបង់ប្រាក់', en: 'Payments' },
  catPaymentDesc: { km: 'ព័ត៌មានអំពី ABA Pay និងមធ្យោបាយផ្សេងទៀត', en: 'About ABA Pay and other methods' },
  catInvoice: { km: 'E-Invoice', en: 'E-Invoice' },
  catInvoiceDesc: { km: 'របៀបមើល និងទាញយកវិក្កយបត្រ', en: 'How to view & download invoices' },
  catProblem: { km: 'បញ្ហាជាមួយជាង', en: 'Issues with Technician' },
  catProblemDesc: { km: 'អ្វីដែលត្រូវធ្វើប្រសិនបើជួបបញ្ហាជាមួយបច្ចេកទេស', en: 'What to do if you encounter a problem' },
  catSecurity: { km: 'គណនី និងសុវត្ថិភាព', en: 'Account & Security' },
  catSecurityDesc: { km: 'ការផ្លាស់ប្តូរលេខសម្ងាត់ និងការការពារទិន្នន័យ', en: 'Password change & data protection' },
  // FAQ
  faqTitle: { km: 'សំណួរញឹកញាប់', en: 'Frequently Asked Questions' },
  // FAQs questions and answers as keys
  faq1q: { km: 'តើខ្ញុំត្រូវធ្វើដូចម្តេចដើម្បីកក់សេវាកម្ម?', en: 'How do I book a service?' },
  faq1a: { km: 'លោកអ្នកគ្រាន់តែជ្រើសរើសប្រភេទសេវាកម្ម បន្ទាប់មកជ្រើសរើសជាងដែលនៅជិត និងជ្រើសរើសពេលវេលាដែលលោកអ្នកទំនេរ។', en: 'Simply choose the service type, then select a nearby technician and pick a time that suits you.' },
  faq2q: { km: 'តើ Hao Chang មានធានាលើការជួសជុលដែរឬទេ?', en: 'Does Hao Chang guarantee the repairs?' },
  faq2a: { km: 'បាទ! រាល់ការជួសជុលតាមរយៈ Hao Chang នឹងទទួលបានការធានាគុណភាពរយៈពេល ៧ ថ្ងៃលើការងារដែលបានធ្វើរួច។', en: 'Yes! All repairs through Hao Chang come with a 7‑day quality guarantee on work done.' },
  faq3q: { km: 'តើខ្ញុំអាចលុបចោលការកក់បានទេ?', en: 'Can I cancel a booking?' },
  faq3a: { km: 'លោកអ្នកអាចលុបចោលការកក់បានយ៉ាងតិច ២ ម៉ោងមុនពេលណាត់ជួប ដោយមិនអស់ប្រាក់កម្រៃសេវា។', en: 'You can cancel up to 2 hours before the appointment at no charge.' },
  faq4q: { km: 'តើមានការគិតថ្លៃសេវាចុះត្រួតពិនិត្យដែរឬទេ?', en: 'Is there an inspection fee?' },
  faq4a: { km: 'ថ្លៃសេវាចុះត្រួតពិនិត្យដំបូងគឺ $5 ប៉ុន្តែប្រសិនបើលោកអ្នកយល់ព្រមធ្វើការជួសជុល ថ្លៃសេវានេះនឹងត្រូវកាត់ចេញពីវិក្កយបត្រសរុប។', en: 'The initial inspection fee is $5, but if you agree to the repair it will be deducted from the final invoice.' },
  // Support
  contactSupport: { km: 'ទាក់ទង Support', en: 'Contact Support' },
  phoneSupport: { km: '012 345 678', en: '012 345 678' },
  telegramSupport: { km: '@HaoChangSupport', en: '@HaoChangSupport' },
  emailSupport: { km: 'support@haochang.com', en: 'support@haochang.com' },
  sendMessage: { km: 'ផ្ញើសារ Support', en: 'Send Message' },
  reportIssue: { km: 'រាយការណ៍បញ្ហា', en: 'Report Issue' },
  // Report form
  reportTitle: { km: 'ទម្រង់រាយការណ៍បញ្ហា', en: 'Issue Report Form' },
  issueTypeLabel: { km: 'ប្រភេទបញ្ហា', en: 'Issue Type' },
  issueType1: { km: 'បញ្ហាជាមួយជាង', en: 'Issue with technician' },
  issueType2: { km: 'បញ្ហាជាមួយការបង់ប្រាក់', en: 'Payment issue' },
  issueType3: { km: 'បញ្ហាបច្ចេកទេសលើ App', en: 'App technical issue' },
  bookingIdLabel: { km: 'លេខកក់ (Booking ID)', en: 'Booking ID' },
  bookingIdPlaceholder: { km: '#12345', en: '#12345' },
  descLabel: { km: 'ពណ៌នាបញ្ហា', en: 'Describe the issue' },
  descPlaceholder: { km: 'សូមរៀបរាប់ពីបញ្ហា...', en: 'Please describe the problem...' },
  submitReport: { km: 'ផ្ញើរបាយការណ៍', en: 'Submit Report' },
};

const HelpSupport = () => {
  const { lang } = useLanguage();
  const t = (key) => translations[key]?.[lang] || key;
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    { id: 1, qKey: 'faq1q', aKey: 'faq1a' },
    { id: 2, qKey: 'faq2q', aKey: 'faq2a' },
    { id: 3, qKey: 'faq3q', aKey: 'faq3a' },
    { id: 4, qKey: 'faq4q', aKey: 'faq4a' }
  ];

  const categories = [
    { icon: 'devices', labelKey: 'catPlatform', descKey: 'catPlatformDesc' },
    { icon: 'calendar_month', labelKey: 'catBooking', descKey: 'catBookingDesc' },
    { icon: 'payments', labelKey: 'catPayment', descKey: 'catPaymentDesc' },
    { icon: 'receipt_long', labelKey: 'catInvoice', descKey: 'catInvoiceDesc' },
    { icon: 'report_problem', labelKey: 'catProblem', descKey: 'catProblemDesc' },
    { icon: 'security', labelKey: 'catSecurity', descKey: 'catSecurityDesc' }
  ];

  return (
    <div className="container-custom py-6 md:py-10 animate-enter">
      <div className="mb-8 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">{t('pageTitle')}</h1>
        <p className="text-lg text-on-surface-variant max-w-2xl">{t('pageSubtitle')}</p>
      </div>

      {/* Search */}
      <div className="mb-8">
        <div className="bg-primary-container rounded-xl p-6 md:p-10 shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{t('searchHeading')}</h2>
            <div className="max-w-3xl flex flex-col md:flex-row gap-3">
              <div className="relative flex-grow">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-primary-container">search</span>
                <input className="w-full pl-12 pr-4 py-4 rounded-lg bg-surface border-none focus:ring-2 focus:ring-secondary text-base text-on-surface" placeholder={t('searchPlaceholder')} type="text" />
              </div>
              <button className="bg-secondary text-white px-8 py-4 rounded-lg text-sm font-medium hover:bg-on-secondary-container transition">{t('searchButton')}</button>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-white text-xs opacity-80">{t('popularTopics')}</span>
              <button className="bg-white/10 hover:bg-white/20 text-white text-xs px-3 py-1 rounded-full border border-white/20 transition">{t('topicBooking')}</button>
              <button className="bg-white/10 hover:bg-white/20 text-white text-xs px-3 py-1 rounded-full border border-white/20 transition">{t('topicPayment')}</button>
              <button className="bg-white/10 hover:bg-white/20 text-white text-xs px-3 py-1 rounded-full border border-white/20 transition">{t('topicInvoice')}</button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {categories.map((cat, idx) => (
          <div key={idx} className="bg-surface border border-outline-variant p-6 rounded-xl hover:shadow-lg transition group">
            <div className="w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-container transition">
              <span className="material-symbols-outlined text-primary group-hover:text-white">{cat.icon}</span>
            </div>
            <h3 className="text-2xl font-bold text-on-surface mb-1">{t(cat.labelKey)}</h3>
            <p className="text-sm text-on-surface-variant">{t(cat.descKey)}</p>
          </div>
        ))}
      </div>

      {/* FAQ & Contact */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-primary mb-6">{t('faqTitle')}</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="border border-outline-variant rounded-xl overflow-hidden bg-white shadow-sm">
                <button
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-surface-container-low transition"
                  onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}
                >
                  <span className="text-sm font-medium text-on-surface">{t(faq.qKey)}</span>
                  <span className={`material-symbols-outlined text-primary transition-transform duration-300 ${activeFaq === faq.id ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${activeFaq === faq.id ? 'max-h-60' : 'max-h-0'}`}>
                  <div className="bg-surface px-4 pb-4 pt-2 border-t border-outline-variant text-sm text-on-surface-variant">
                    {t(faq.aKey)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-surface-container-high p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-primary mb-4">{t('contactSupport')}</h2>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-on-surface">
                <span className="material-symbols-outlined text-primary">call</span>
                <span className="text-sm">{t('phoneSupport')}</span>
              </li>
              <li className="flex items-center gap-3 text-on-surface">
                <span className="material-symbols-outlined text-primary">send</span>
                <span className="text-sm">{t('telegramSupport')}</span>
              </li>
              <li className="flex items-center gap-3 text-on-surface">
                <span className="material-symbols-outlined text-primary">mail</span>
                <span className="text-sm">{t('emailSupport')}</span>
              </li>
            </ul>
            <div className="grid grid-cols-1 gap-3">
              <Link to="/messages">
                <button className="w-full bg-primary text-white py-3 rounded-lg text-sm font-medium hover:opacity-90 transition flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-sm">chat_bubble</span> {t('sendMessage')}
                </button>
              </Link>
              <button className="w-full border border-error text-error py-3 rounded-lg text-sm font-medium hover:bg-error-container transition flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm">flag</span> {t('reportIssue')}
              </button>
            </div>
          </div>

          <div className="bg-white border border-outline-variant p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold text-on-surface mb-4">{t('reportTitle')}</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-on-surface mb-1">{t('issueTypeLabel')}</label>
                <select className="input-field text-sm py-2">
                  <option>{t('issueType1')}</option>
                  <option>{t('issueType2')}</option>
                  <option>{t('issueType3')}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-on-surface mb-1">{t('bookingIdLabel')}</label>
                <input className="input-field text-sm py-2" placeholder={t('bookingIdPlaceholder')} type="text" />
              </div>
              <div>
                <label className="block text-sm font-medium text-on-surface mb-1">{t('descLabel')}</label>
                <textarea className="input-field text-sm py-2" placeholder={t('descPlaceholder')} rows="3"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg text-sm font-bold">
                {t('submitReport')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;