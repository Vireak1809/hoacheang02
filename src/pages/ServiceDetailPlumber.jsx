// src/pages/ServiceDetailPlumber.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  breadcrumbHome: { km: 'ទំព័រដើម', en: 'Home' },
  breadcrumbServices: { km: 'សេវាកម្ម', en: 'Services' },
  breadcrumbPlumber: { km: 'ជាងទឹក', en: 'Plumber' },
  expertBadge: { km: 'សេវាកម្មជំនាញ', en: 'Expert Service' },
  heroTitle: { km: 'សេវាជាងទឹក', en: 'Plumbing Service' },
  heroDesc: { km: 'ជួសជុល និងដោះស្រាយបញ្ហាទឹកក្នុងផ្ទះ ដូចជា បំពង់ទឹកលេចធ្លាយ បង្គន់ស្ទះ ក្បាលទឹកខូច និងម៉ាស៊ីនបូមទឹក។', en: 'Repair and resolve household water issues such as leaking pipes, clogged toilets, broken faucets, and water pumps.' },
  loginToBook: { km: 'ចូលប្រើដើម្បីកក់សេវា', en: 'Login to Book Service' },
  howItWorks: { km: 'មើលរបៀបដំណើរការ', en: 'See How It Works' },
  problemsTitle: { km: 'បញ្ហាដែលជាងទឹកអាចជួយបាន', en: 'Problems Our Plumbers Can Solve' },
  problemsSub: { km: 'ដោះស្រាយរាល់បញ្ហាប្រព័ន្ធទឹកគ្រប់ប្រភេទដោយអ្នកជំនាញ', en: 'Expertly handling all types of plumbing system issues' },
  problemLeak: { km: 'បំពង់ទឹកលេចធ្លាយ', en: 'Leaking Pipes' },
  problemLeakDesc: { km: 'ជួសជុលបំពង់ទឹកដែលបែក ឬលេច', en: 'Fix broken or leaking water pipes' },
  problemClog: { km: 'បង្គន់ស្ទះ', en: 'Clogged Toilet' },
  problemClogDesc: { km: 'បូម និងសម្អាតបង្គន់ ឬលូដែលស្ទះ', en: 'Unblock and clean toilet or drain blockages' },
  problemFaucet: { km: 'ក្បាលទឹកខូច', en: 'Broken Faucet' },
  problemFaucetDesc: { km: 'ប្តូរក្បាលរ៉ូប៊ីណេ និងគ្រឿងក្នុងបន្ទប់ទឹក', en: 'Replace faucets and bathroom fixtures' },
  problemPump: { km: 'ម៉ាស៊ីនបូមទឹកខូច', en: 'Water Pump Broken' },
  problemPumpDesc: { km: 'ជួសជុល និងតម្លើងម៉ាស៊ីនបូមទឹក', en: 'Repair and install water pumps' },
  problemPressure: { km: 'ទឹកមិនឡើង / សម្ពាធទឹកទាប', en: 'No Water / Low Pressure' },
  problemPressureDesc: { km: 'ពិនិត្យ និងដោះស្រាយបញ្ហាទឹកខ្សោយ', en: 'Inspect and resolve low water pressure issues' },
  problemInstall: { km: 'ដំឡើងប្រព័ន្ធទឹកថ្មី', en: 'New Plumbing Installation' },
  problemInstallDesc: { km: 'រៀបចំបណ្តាញទឹកក្នុងផ្ទះទាំងមូល', en: 'Set up an entire household water system' },
  stepsTitle: { km: 'របៀបកក់សេវាជាងទឹក', en: 'How to Book a Plumbing Service' },
  step1: { km: 'ចូលប្រើ ឬបង្កើតគណនី', en: 'Login or Create Account' },
  step2: { km: 'ជ្រើសរើសសេវាជាងទឹក', en: 'Select Plumbing Service' },
  step3: { km: 'រៀបរាប់បញ្ហា និងភ្ជាប់រូបភាព', en: 'Describe Issue & Upload Photos' },
  step4: { km: 'កំណត់ទីតាំងលើផែនទី', en: 'Set Location on Map' },
  step5: { km: 'ជ្រើសរើសជាងដែលនៅជិត', en: 'Choose a Nearby Plumber' },
  step6: { km: 'ទទួលសេវា និង E-Invoice', en: 'Receive Service & E-Invoice' },
  transparencyTitle: { km: 'តម្លាភាពក្នុងការគិតថ្លៃ', en: 'Transparent Pricing' },
  transparencyDesc: { km: 'តម្លៃចុងក្រោយនឹងត្រូវបង្ហាញក្នុង E-Invoice បន្ទាប់ពីជាងបញ្ចប់ការងារ។', en: 'The final price will be shown in the E-Invoice after the plumber completes the work.' },
  emergencyCall: { km: 'ហៅបន្ទាន់ ០៩៩ ៩៩៩ ៩៩៩', en: 'Emergency Call: 099 999 999' },
  faqTitle: { km: 'សំណួរដែលសួរញឹកញាប់', en: 'Frequently Asked Questions' },
  faq1Q: { km: 'តើត្រូវរង់ចាំយូរប៉ុណ្ណាទម្រាំជាងទឹកទៅដល់?', en: 'How long will it take for the plumber to arrive?' },
  faq1A: { km: 'ជាមធ្យម ជាងរបស់យើងនឹងទៅដល់ទីតាំងលោកអ្នកក្នុងរយៈពេល ៣០ ទៅ ៦០ នាទី អាស្រ័យលើចម្ងាយ និងចរាចរណ៍នៅភ្នំពេញ។', en: 'On average, our plumber will arrive at your location within 30 to 60 minutes, depending on distance and traffic in Phnom Penh.' },
  faq2Q: { km: 'តើជាងយកសម្ភារៈប្តូរថ្មីមកស្រាប់ឬទេ?', en: 'Do you provide the replacement materials?' },
  faq2A: { km: 'ជាងរបស់យើងមានគ្រឿងបន្លាស់ស្តង់ដារមួយចំនួនជាប់ខ្លួន។ ប៉ុន្តែប្រសិនបើត្រូវការសម្ភារៈជាក់លាក់ ជាងអាចទៅទិញជូនលោកអ្នកបាន ដោយគិតថ្លៃតាមវិក្កយបត្រជាក់ស្តែង។', en: 'Our plumbers carry some standard spare parts with them. However, if specific materials are required, the plumber can purchase them for you, and the cost will be charged based on the actual invoice.' },
  faq3Q: { km: 'តើមានការធានាលើការជួសជុលដែរឬទេ?', en: 'Is there a warranty on the repair?' },
  faq3A: { km: 'បាទ! យើងមានការធានារយៈពេល ១៤ ថ្ងៃលើការជួសជុលដដែល។ ប្រសិនបើមានបញ្ហាកើតឡើងវិញក្នុងអំឡុងពេលនេះ យើងនឹងបញ្ជូនជាងទៅពិនិត្យឡើងវិញដោយឥតគិតថ្លៃ។', en: 'Yes! We offer a 14-day warranty on the same repair. If the issue recurs within this period, we will send a plumber to re-inspect at no extra charge.' },
};

const ServiceDetailPlumber = () => {
  const { lang } = useLanguage();
  const t = (key) => translations[key]?.[lang] || key;
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    { id: 1, q: t('faq1Q'), a: t('faq1A') },
    { id: 2, q: t('faq2Q'), a: t('faq2A') },
    { id: 3, q: t('faq3Q'), a: t('faq3A') }
  ];

  const problems = [
    { icon: 'plumbing', label: t('problemLeak'), desc: t('problemLeakDesc') },
    { icon: 'wash', label: t('problemClog'), desc: t('problemClogDesc') },
    { icon: 'water_damage', label: t('problemFaucet'), desc: t('problemFaucetDesc') },
    { icon: 'propane_tank', label: t('problemPump'), desc: t('problemPumpDesc') },
    { icon: 'water_drop', label: t('problemPressure'), desc: t('problemPressureDesc') },
    { icon: 'construction', label: t('problemInstall'), desc: t('problemInstallDesc') }
  ];

  const steps = [
    { num: '១', label: t('step1') },
    { num: '២', label: t('step2') },
    { num: '៣', label: t('step3') },
    { num: '៤', label: t('step4') },
    { num: '៥', label: t('step5') },
    { num: '៦', label: t('step6') }
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
            <span className="text-primary font-bold">{t('breadcrumbPlumber')}</span>
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
                alt="Professional plumbing service - water pipe repair"
                className="w-full h-full object-cover"
                src="https://i.pinimg.com/736x/72/c5/36/72c536d00c84ea08ae57a84816b79e4e.jpg"
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

      {/* Booking Steps */}
      <section className="py-12 md:py-16 bg-surface-container">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">{t('stepsTitle')}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg md:text-2xl shadow-lg border-4 border-surface">
                  {step.num}
                </div>
                <h4 className="text-xs md:text-sm font-bold text-primary">{step.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notice */}
      <section className="py-6 md:py-8">
        <div className="container-custom">
          <div className="bg-surface-container-high rounded-2xl p-4 md:p-8 flex flex-col md:flex-row items-center gap-4 md:gap-6 border-l-8 border-secondary shadow-sm">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-secondary text-white rounded-full flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-3xl md:text-4xl">receipt_long</span>
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-lg md:text-2xl font-bold text-primary">{t('transparencyTitle')}</h3>
              <p className="text-sm md:text-base text-on-surface-variant">{t('transparencyDesc')}</p>
            </div>
            <button className="px-4 md:px-6 py-2 bg-primary text-white rounded-lg font-bold shrink-0 hover:opacity-90 transition">
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

export default ServiceDetailPlumber;