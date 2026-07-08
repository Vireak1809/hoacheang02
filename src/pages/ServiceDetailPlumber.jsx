// pages/ServiceDetailPlumber.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ServiceDetailPlumber = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    { id: 1, q: 'តើជាងទឹកនឹងទៅដល់ក្នុងរយៈពេលប៉ុន្មាន?', a: 'ជាមធ្យម ជាងរបស់យើងនឹងទៅដល់ទីតាំងលោកអ្នកក្នុងរយៈពេល ៣០ ទៅ ៦០ នាទី អាស្រ័យលើចម្ងាយ និងចរាចរណ៍នៅក្នុងរាជធានីភ្នំពេញ។' },
    { id: 2, q: 'តើសម្ភារៈសម្រាប់ប្តូរថ្មី ជាងជាអ្នកយកមកស្រាប់ឬ?', a: 'ជាងរបស់យើងមានគ្រឿងបន្លាស់ស្តង់ដារមួយចំនួនជាប់ខ្លួន។ ប៉ុន្តែប្រសិនបើត្រូវការសម្ភារៈជាក់លាក់ ជាងអាចទៅទិញជូនលោកអ្នកបាន ដោយគិតថ្លៃតាមវិក្កយបត្រជាក់ស្តែង។' },
    { id: 3, q: 'តើមានការធានាលើការជួសជុលដែរឬទេ?', a: 'បាទ! យើងមានការធានារយៈពេល ១៤ ថ្ងៃលើការជួសជុលដដែល។ ប្រសិនបើមានបញ្ហាកើតឡើងវិញក្នុងអំឡុងពេលនេះ យើងនឹងបញ្ជូនជាងទៅពិនិត្យឡើងវិញដោយឥតគិតថ្លៃ។' }
  ];

  const problems = [
    { icon: 'plumbing', label: 'បំពង់ទឹកលេចធ្លាយ', desc: 'ជួសជុលបំពង់ទឹកដែលបែក ឬលេច' },
    { icon: 'wash', label: 'បង្គន់ស្ទះ', desc: 'បូម និងសម្អាតបង្គន់ ឬលូដែលស្ទះ' },
    { icon: 'water_damage', label: 'ក្បាលទឹកខូច', desc: 'ប្តូរក្បាលរ៉ូប៊ីណេ និងគ្រឿងក្នុងបន្ទប់ទឹក' },
    { icon: 'propane_tank', label: 'ម៉ាស៊ីនបូមទឹកខូច', desc: 'ជួសជុល និងតម្លើងម៉ាស៊ីនបូមទឹក' },
    { icon: 'water_drop', label: 'ទឹកមិនឡើង', desc: 'ពិនិត្យ និងដោះស្រាយបញ្ហាទឹកខ្សោយ' },
    { icon: 'construction', label: 'ដំឡើងប្រព័ន្ធទឹកថ្មី', desc: 'រៀបចំបណ្តាញទឹកក្នុងផ្ទះទាំងមូល' }
  ];

  return (
    <div className="animate-enter">
      {/* Breadcrumb */}
      <div className="bg-surface-container-low py-3 border-b border-outline-variant">
        <div className="container-custom">
          <nav className="flex items-center text-sm text-on-surface-variant gap-1 flex-wrap">
            <Link to="/" className="hover:text-primary transition">ទំព័រដើម</Link>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <Link to="/services" className="hover:text-primary transition">សេវាកម្ម</Link>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span className="text-primary font-bold">ជាងទឹក</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-container text-white py-12 md:py-20">
        <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 md:space-y-6">
            <span className="px-3 py-1 bg-secondary text-white rounded-full text-sm inline-block">សេវាកម្មជំនាញ</span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">សេវាជាងទឹក</h1>
            <p className="text-lg text-surface-variant max-w-lg">
              ជួសជុល និងដោះស្រាយបញ្ហាទឹកក្នុងផ្ទះ ដូចជា បំពង់ទឹកលេចធ្លាយ បង្គន់ស្ទះ ក្បាលទឹកខូច និងម៉ាស៊ីនបូមទឹក។
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/login" className="px-6 py-3 md:px-8 md:py-4 bg-secondary text-white rounded-xl font-bold hover:scale-105 transition shadow-lg">
                Login ដើម្បីកក់សេវា
              </Link>
              <Link to="/how-it-works" className="px-6 py-3 md:px-8 md:py-4 border border-white text-white rounded-xl font-bold hover:bg-white/10 transition">
                មើលរបៀបដំណើរការ
              </Link>
            </div>
          </div>
          <div className="hidden md:block relative h-[300px] md:h-[400px]">
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                alt="សេវាជាងទឹកអាជីព"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida/AP1WRLs7wB22tgCXYqc3yCN3JQXXlF_A9mGPJTRkXYrJRBNIYwlYfkmB0BEHIb-6wlF8cS6mVP0QbrR6KVgFi8A9zDWW0b2YIn6uzp5bdjv_SFRY2iHzZVR7XbJIJR9RWulqKvGqxLnMBfPU4HQUjRmOGt_zjWlxGz2_GwyUcRMWDpv2skELRxSEjQ_HNrNmVFEtO_q2plvq5V3pTk-eeW3v9ANnImAfjcGg2KxFtVvJjQV_vqKdVV7bH8GVrig"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-12 md:py-16 bg-surface">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">បញ្ហាដែលជាងទឹកអាចជួយបាន</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto mt-2">ដោះស្រាយរាល់បញ្ហាប្រព័ន្ធទឹកគ្រប់ប្រភេទដោយអ្នកជំនាញ</p>
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
            <h2 className="text-2xl md:text-3xl font-bold text-primary">របៀបកក់សេវាជាងទឹក</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {[
              { num: '១', label: 'Login ឬបង្កើតគណនី' },
              { num: '២', label: 'ជ្រើសរើសសេវា ជាងទឹក' },
              { num: '៣', label: 'ពិពណ៌នាបញ្ហា និង Upload' },
              { num: '៤', label: 'កំណត់ទីតាំងលើ Map' },
              { num: '៥', label: 'ជ្រើសរើសជាងដែលនៅជិត' },
              { num: '៦', label: 'ទទួលសេវា និង E-Invoice' }
            ].map((step, i) => (
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
              <h3 className="text-lg md:text-2xl font-bold text-primary">តម្លាភាពក្នុងការគិតថ្លៃ</h3>
              <p className="text-sm md:text-base text-on-surface-variant">
                តម្លៃចុងក្រោយនឹងត្រូវបង្ហាញក្នុង E-Invoice បន្ទាប់ពីជាងបញ្ចប់ការងារ។
              </p>
            </div>
            <button className="px-4 md:px-6 py-2 bg-primary text-white rounded-lg font-bold shrink-0 hover:opacity-90 transition">
              ហៅបន្ទាន់ ០៩៩ ៩៩៩ ៩៩៩
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="container-custom max-w-2xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">សំណួរដែលសួរញឹកញាប់</h2>
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