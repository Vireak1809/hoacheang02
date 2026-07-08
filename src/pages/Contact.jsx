// src/pages/Contact.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="animate-enter">
      {/* Hero */}
      <section className="bg-surface-container-low py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">ទំនាក់ទំនងយើង</h1>
          <p className="text-xl text-on-surface-variant max-w-3xl mx-auto mb-4">
            មានសំណួរ ឬចង់ស្វែងយល់បន្ថែមអំពី ហៅជាង សូមទាក់ទងមកយើង។
          </p>
          <p className="text-base text-on-surface-variant opacity-80">ក្រុមការងាររបស់យើងរីករាយក្នុងការឆ្លើយសំណួរ និងទទួលមតិយោបល់ពីអ្នក។</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-surface">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: 'phone_in_talk', label: 'លេខទូរស័ព្ទ', value: '+855 12 345 678' },
              { icon: 'mail', label: 'អ៊ីមែល', value: 'support@haochang.com' },
              { icon: 'send', label: 'Telegram', value: '@HaoChangSupport' },
              { icon: 'facebook', label: 'Facebook', value: 'Hao Chang' },
              { icon: 'location_on', label: 'ទីតាំង', value: 'Phnom Penh, Cambodia' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-outline-variant text-center">
                <div className="w-12 h-12 bg-primary-container text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                </div>
                <h3 className="font-bold text-primary mb-1">{item.label}</h3>
                <p className="text-sm text-on-surface-variant">{item.value}</p>
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
              <h2 className="text-2xl font-bold text-primary mb-6">ផ្ញើសារមកយើង</h2>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('សាររបស់អ្នកត្រូវបានផ្ញើដោយជោគជ័យ។'); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">ឈ្មោះ</label>
                    <input className="input-field" placeholder="បញ្ចូលឈ្មោះ" required type="text" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">លេខទូរស័ព្ទ</label>
                    <input className="input-field" placeholder="012 345 678" required type="tel" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">អ៊ីមែល</label>
                  <input className="input-field" placeholder="example@email.com" type="email" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">ប្រធានបទ</label>
                  <input className="input-field" placeholder="ប្រធានបទនៃសារ" type="text" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">សារ</label>
                  <textarea className="input-field" placeholder="សរសេរសាររបស់អ្នកនៅទីនេះ..." required rows="4"></textarea>
                </div>
                <button type="submit" className="btn-primary w-full text-lg">ផ្ញើសារ</button>
              </form>
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-primary text-white p-8 rounded-2xl shadow-xl flex flex-col h-full">
                <h2 className="text-2xl font-bold mb-4">ត្រូវការជំនួយ?</h2>
                <p className="mb-6 opacity-80">ជ្រើសរើសប្រភេទនៃជំនួយដែលអ្នកត្រូវការ៖</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary-container">calendar_month</span> ការកក់សេវាកម្ម
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary-container">app_registration</span> ការចុះឈ្មោះ
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary-container">report_problem</span> រាយការណ៍បញ្ហា
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary-container">emergency</span> សេវាបន្ទាន់
                  </li>
                </ul>
                <Link to="/help">
                  <button className="w-full py-4 bg-secondary-container text-primary font-bold rounded-xl hover:scale-[1.02] transition">
                    ទាក់ទង Support
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
            <h2 className="text-3xl font-bold text-primary mb-4">តំបន់សេវាកម្ម</h2>
            <p className="text-base text-on-surface-variant">យើងផ្ដល់សេវាកម្មទូទាំងរាជធានីភ្នំពេញ</p>
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