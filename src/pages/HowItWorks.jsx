// src/pages/HowItWorks.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    { num: '1', icon: 'person_add', label: 'ចុះឈ្មោះប្រើប្រាស់', desc: 'បង្កើតគណនីរបស់អ្នកងាយៗជាមួយលេខទូរស័ព្ទ' },
    { num: '2', icon: 'handyman', label: 'ជ្រើសរើសសេវាកម្ម', desc: 'មានសេវាកម្មជាច្រើនដូចជា ជួសជុលអគ្គិសនី ម៉ាស៊ីនត្រជាក់ ទឹក និងសំណង់' },
    { num: '3', icon: 'description', label: 'រៀបរាប់បញ្ហា', desc: 'ផ្ដល់ព័ត៌មានលម្អិតអំពីបញ្ហា និងភ្ជាប់ជាមួយរូបភាព' },
    { num: '4', icon: 'location_on', label: 'បញ្ជាក់ទីតាំង', desc: 'កំណត់ទីតាំងផ្ទះរបស់អ្នកនៅលើផែនទី' },
    { num: '5', icon: 'badge', label: 'ជ្រើសរើសជាង', desc: 'ពិនិត្យមើលប្រវត្តិរូប ការវាយតម្លៃ និងតម្លៃសេវាកម្ម' },
    { num: '6', icon: 'near_me', label: 'តាមដានដំណើរការ', desc: 'តាមដានទីតាំងរបស់ជាង និងស្ថានភាពការងារ' },
    { num: '7', icon: 'payments', label: 'បង់ប្រាក់ងាយៗ', desc: 'បង់ប្រាក់តាមរយៈ ABA ឬមធ្យោបាយផ្សេងៗ' },
    { num: '8', icon: 'grade', label: 'ការវាយតម្លៃ', desc: 'ផ្ដល់ពិន្ទុ និងមតិយោបល់ ដើម្បីជួយកែលម្អគុណភាពសេវាកម្ម' }
  ];

  return (
    <div className="animate-enter">
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-16 md:py-24">
        <div className="container-custom text-center relative z-10">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-6">របៀបដំណើរការ</h1>
          <p className="text-on-primary-container text-lg max-w-2xl mx-auto opacity-90 leading-relaxed">
            ហៅជាង ធ្វើឱ្យការរកជាងកាន់តែងាយស្រួល ជាមួយប្រព័ន្ធបច្ចេកវិទ្យាទំនើប ដើម្បីជួយអ្នកដោះស្រាយបញ្ហានៅក្នុងផ្ទះដោយភាពជឿជាក់ និងរហ័សបំផុត។
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
                <h3 className="text-xl font-bold text-primary mb-2">{step.label}</h3>
                <p className="text-sm text-on-surface-variant flex-grow">{step.desc}</p>
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
              <h2 className="text-white text-3xl font-bold mb-4">ត្រៀមខ្លួនរួចរាល់ហើយឬនៅ?</h2>
              <p className="text-on-primary-container text-lg mb-6 opacity-90">
                កុំរង់ចាំយូរ! ចាប់ផ្ដើមស្វែងរកជាងជំនាញដើម្បីដោះស្រាយបញ្ហានៅក្នុងគេហដ្ឋានរបស់អ្នកថ្ងៃនេះ។
              </p>
              <Link to="/register">
                <button className="px-12 py-4 bg-secondary text-white text-xl font-bold rounded-xl hover:scale-105 transition shadow-lg shadow-secondary/30">
                  ចាប់ផ្ដើមបង្កើតគណនី
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
            <h2 className="text-3xl font-bold text-primary mb-4">សំណួរដែលសួរញឹកញាប់</h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant">
              <h4 className="text-xl font-bold text-primary mb-2">តើខ្ញុំត្រូវរង់ចាំយូរប៉ុន្មាន?</h4>
              <p className="text-sm text-on-surface-variant">ជាទូទៅជាងនឹងឆ្លើយតបក្នុងរយៈពេល ១៥ ទៅ ៣០ នាទី បន្ទាប់ពីអ្នកដាក់សំណើ។</p>
            </div>
            <div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant">
              <h4 className="text-xl font-bold text-primary mb-2">តើការទូទាត់ប្រាក់មានសុវត្ថិភាពដែរឬទេ?</h4>
              <p className="text-sm text-on-surface-variant">ប្រព័ន្ធទូទាត់របស់យើងត្រូវបានការពារដោយសុវត្ថិភាពខ្ពស់បំផុត ជាមួយដៃគូធនាគារក្នុងស្រុក។</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;