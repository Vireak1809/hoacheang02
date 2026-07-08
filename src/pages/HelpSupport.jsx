// src/pages/HelpSupport.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HelpSupport = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    { id: 1, q: 'តើខ្ញុំត្រូវធ្វើដូចម្តេចដើម្បីកក់សេវាកម្ម?', a: 'លោកអ្នកគ្រាន់តែជ្រើសរើសប្រភេទសេវាកម្ម បន្ទាប់មកជ្រើសរើសជាងដែលនៅជិត និងជ្រើសរើសពេលវេលាដែលលោកអ្នកទំនេរ។' },
    { id: 2, q: 'តើ Hao Chang មានធានាលើការជួសជុលដែរឬទេ?', a: 'បាទ! រាល់ការជួសជុលតាមរយៈ Hao Chang នឹងទទួលបានការធានាគុណភាពរយៈពេល ៧ ថ្ងៃលើការងារដែលបានធ្វើរួច។' },
    { id: 3, q: 'តើខ្ញុំអាចលុបចោលការកក់បានទេ?', a: 'លោកអ្នកអាចលុបចោលការកក់បានយ៉ាងតិច ២ ម៉ោងមុនពេលណាត់ជួប ដោយមិនអស់ប្រាក់កម្រៃសេវា។' },
    { id: 4, q: 'តើមានការគិតថ្លៃសេវាចុះត្រួតពិនិត្យដែរឬទេ?', a: 'ថ្លៃសេវាចុះត្រួតពិនិត្យដំបូងគឺ $5 ប៉ុន្តែប្រសិនបើលោកអ្នកយល់ព្រមធ្វើការជួសជុល ថ្លៃសេវានេះនឹងត្រូវកាត់ចេញពីវិក្កយបត្រសរុប។' }
  ];

  return (
    <div className="container-custom py-6 md:py-10 animate-enter">
      <div className="mb-8 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">ជំនួយ</h1>
        <p className="text-lg text-on-surface-variant max-w-2xl">ស្វែងរកចម្លើយ សួរសំណួរ ឬទាក់ទង Support</p>
      </div>

      {/* Search */}
      <div className="mb-8">
        <div className="bg-primary-container rounded-xl p-6 md:p-10 shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">តើយើងអាចជួយអ្វីបានខ្លះ?</h2>
            <div className="max-w-3xl flex flex-col md:flex-row gap-3">
              <div className="relative flex-grow">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-primary-container">search</span>
                <input className="w-full pl-12 pr-4 py-4 rounded-lg bg-surface border-none focus:ring-2 focus:ring-secondary text-base text-on-surface" placeholder="ស្វែងរកសំណួរ ឬប្រធានបទ..." type="text" />
              </div>
              <button className="bg-secondary text-white px-8 py-4 rounded-lg text-sm font-medium hover:bg-on-secondary-container transition">ស្វែងរក</button>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-white text-xs opacity-80">ប្រធានបទពេញនិយម:</span>
              <button className="bg-white/10 hover:bg-white/20 text-white text-xs px-3 py-1 rounded-full border border-white/20 transition">របៀបកក់សេវា</button>
              <button className="bg-white/10 hover:bg-white/20 text-white text-xs px-3 py-1 rounded-full border border-white/20 transition">ការបង់ប្រាក់</button>
              <button className="bg-white/10 hover:bg-white/20 text-white text-xs px-3 py-1 rounded-full border border-white/20 transition">E-Invoice</button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {[
          { icon: 'devices', label: 'របៀបប្រើ Platform', desc: 'ណែនាំពីរបៀបប្រើប្រាស់ App និង Website' },
          { icon: 'calendar_month', label: 'ការកក់សេវា', desc: 'របៀបជ្រើសរើសជាង និងបញ្ជាក់ការកក់' },
          { icon: 'payments', label: 'ការបង់ប្រាក់', desc: 'ព័ត៌មានអំពី ABA Pay និងមធ្យោបាយផ្សេងទៀត' },
          { icon: 'receipt_long', label: 'E-Invoice', desc: 'របៀបមើល និងទាញយកវិក្កយបត្រ' },
          { icon: 'report_problem', label: 'បញ្ហាជាមួយជាង', desc: 'អ្វីដែលត្រូវធ្វើប្រសិនបើជួបបញ្ហាជាមួយបច្ចេកទេស' },
          { icon: 'security', label: 'គណនី និងសុវត្ថិភាព', desc: 'ការផ្លាស់ប្តូរលេខសម្ងាត់ និងការការពារទិន្នន័យ' }
        ].map((cat, idx) => (
          <div key={idx} className="bg-surface border border-outline-variant p-6 rounded-xl hover:shadow-lg transition group">
            <div className="w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-container transition">
              <span className="material-symbols-outlined text-primary group-hover:text-white">{cat.icon}</span>
            </div>
            <h3 className="text-2xl font-bold text-on-surface mb-1">{cat.label}</h3>
            <p className="text-sm text-on-surface-variant">{cat.desc}</p>
          </div>
        ))}
      </div>

      {/* FAQ & Contact */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-primary mb-6">សំណួរញឹកញាប់</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="border border-outline-variant rounded-xl overflow-hidden bg-white shadow-sm">
                <button
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-surface-container-low transition"
                  onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}
                >
                  <span className="text-sm font-medium text-on-surface">{faq.q}</span>
                  <span className={`material-symbols-outlined text-primary transition-transform duration-300 ${activeFaq === faq.id ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${activeFaq === faq.id ? 'max-h-60' : 'max-h-0'}`}>
                  <div className="bg-surface px-4 pb-4 pt-2 border-t border-outline-variant text-sm text-on-surface-variant">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-surface-container-high p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-primary mb-4">ទាក់ទង Support</h2>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-on-surface">
                <span className="material-symbols-outlined text-primary">call</span>
                <span className="text-sm">012 345 678</span>
              </li>
              <li className="flex items-center gap-3 text-on-surface">
                <span className="material-symbols-outlined text-primary">send</span>
                <span className="text-sm">@HaoChangSupport</span>
              </li>
              <li className="flex items-center gap-3 text-on-surface">
                <span className="material-symbols-outlined text-primary">mail</span>
                <span className="text-sm">support@haochang.com</span>
              </li>
            </ul>
            <div className="grid grid-cols-1 gap-3">
              <Link to="/messages">
                <button className="w-full bg-primary text-white py-3 rounded-lg text-sm font-medium hover:opacity-90 transition flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-sm">chat_bubble</span> ផ្ញើសារ Support
                </button>
              </Link>
              <button className="w-full border border-error text-error py-3 rounded-lg text-sm font-medium hover:bg-error-container transition flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm">flag</span> រាយការណ៍បញ្ហា
              </button>
            </div>
          </div>

          <div className="bg-white border border-outline-variant p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold text-on-surface mb-4">ទម្រង់រាយការណ៍បញ្ហា</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-on-surface mb-1">ប្រភេទបញ្ហា</label>
                <select className="input-field text-sm py-2">
                  <option>បញ្ហាជាមួយជាង</option>
                  <option>បញ្ហាជាមួយការបង់ប្រាក់</option>
                  <option>បញ្ហាបច្ចេកទេសលើ App</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-on-surface mb-1">លេខកក់ (Booking ID)</label>
                <input className="input-field text-sm py-2" placeholder="#12345" type="text" />
              </div>
              <div>
                <label className="block text-sm font-medium text-on-surface mb-1">ពណ៌នាបញ្ហា</label>
                <textarea className="input-field text-sm py-2" placeholder="សូមរៀបរាប់ពីបញ្ហា..." rows="3"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg text-sm font-bold">
                ផ្ញើរបាយការណ៍
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;