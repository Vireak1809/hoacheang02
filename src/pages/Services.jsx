// pages/Services.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: 'water_drop',
      title: 'ជាងទឹក (Plumbing)',
      items: ['ការលេចធ្លាយទឹក', 'ស្ទះលូ និងបង្គន់', 'ដំឡើងក្បាលម៉ាស៊ីន', 'ជួសជុលម៉ាស៊ីនបូមទឹក'],
      link: '/service/plumber'
    },
    {
      icon: 'bolt',
      title: 'ជាងភ្លើង (Electric)',
      items: ['ឆ្លងចរន្តអគ្គិសនី', 'ដំឡើងឧបករណ៍អគ្គិសនី', 'ប្តូរបណ្តាញខ្សែភ្លើង', 'ជួសជុលប្រអប់ហ្វុយហ្ស៊ីប'],
      link: '/service/electrician'
    },
    {
      icon: 'ac_unit',
      title: 'ម៉ាស៊ីនត្រជាក់ (AC)',
      items: ['លាងសម្អាតម៉ាស៊ីនត្រជាក់', 'បញ្ចូលហ្គាស', 'ជួសជុលម៉ាស៊ីនត្រជាក់', 'ដំឡើងម៉ាស៊ីនត្រជាក់ថ្មី'],
      link: '/service/ac'
    }
  ];

  return (
    <div className="container-custom py-6 md:py-10 animate-enter">
      {/* Hero */}
      <div className="bg-primary-container rounded-2xl p-6 md:p-10 text-white text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">សេវាកម្មរបស់យើង</h1>
        <p className="text-on-primary-container text-lg max-w-2xl mx-auto">
          ស្វែងរកជាងជំនាញដែលអាចទុកចិត្តបាន ជាមួយនឹងសេវាកម្មជួសជុលគេហដ្ឋានគ្រប់ប្រភេទ។
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((svc, idx) => (
          <div key={idx} className="glass-card rounded-2xl p-6 flex flex-col h-full card-hover border border-outline-variant/30">
            <div className="w-16 h-16 bg-primary-container rounded-xl flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-white text-4xl">{svc.icon}</span>
            </div>
            <h2 className="text-2xl font-bold text-primary mb-4">{svc.title}</h2>
            <ul className="space-y-2 mb-auto text-sm">
              {svc.items.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link to={svc.link}>
              <button className="mt-6 w-full btn-primary text-sm">
                មើលសេវាកម្ម
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Why Us */}
      <section className="mt-12 md:mt-16 bg-surface-container-low rounded-2xl p-6 md:p-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-4">
            <h3 className="text-3xl font-bold text-primary">ហេតុអ្វីជ្រើសរើស Hao Chang?</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-secondary/10 rounded-full"><span className="material-symbols-outlined text-secondary">verified_user</span></div>
                <div>
                  <h4 className="font-bold text-on-surface">ជាងមានជំនាញ</h4>
                  <p className="text-sm text-on-surface-variant">រាល់ជាងទាំងអស់មានបទពិសោធន៍យ៉ាងតិច ៣ ឆ្នាំ</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-secondary/10 rounded-full"><span className="material-symbols-outlined text-secondary">timer</span></div>
                <div>
                  <h4 className="font-bold text-on-surface">រហ័សទាន់ចិត្ត</h4>
                  <p className="text-sm text-on-surface-variant">ជាងនឹងទៅដល់ក្នុងរយៈពេល ៣០ នាទី</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-secondary/10 rounded-full"><span className="material-symbols-outlined text-secondary">receipt_long</span></div>
                <div>
                  <h4 className="font-bold text-on-surface">E-Invoice ច្បាស់លាស់</h4>
                  <p className="text-sm text-on-surface-variant">ទទួលវិក្កយបត្រអេឡិចត្រូនិចភ្លាមៗ</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl bg-cover bg-center" style={{
              backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuCUtUtnQHaqqPpydvE5SmFeafNcEotirxoM3KUQjN77JtCrbRxPVBCfuFt2eYP42sXxWpgzLusJKtan2nwOHXwqc3iXH5Ow7UF7XQbFwYmlRe6JLvHXonDg_bcs4l28kKvbN82YR6a_v799ipw92p1-_Z-7QFbdAsgh0KHA_NGVyDqPQUVN6Oqs73-fVhwzGr8jbvFFSXwLl31kvfTG1gfmUJDk89LLcRSeeV7Yi4BiizOAPaiNaw68w_w3S3gzI7UOdhEofkjgcm8)'
            }}></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 md:mt-16 bg-primary rounded-2xl p-6 md:p-10 text-white text-center">
        <h3 className="text-3xl font-bold mb-4">ត្រៀមខ្លួនដើម្បីកក់សេវា?</h3>
        <p className="text-base text-white/80 mb-6 max-w-xl mx-auto">
          ចុះឈ្មោះឥឡូវនេះ ដើម្បីចាប់ផ្ដើមប្រើប្រាស់សេវាកម្មជួសជុលគេហដ្ឋានដែលរហ័ស និងទុកចិត្តបាន។
        </p>
        <Link to="/register">
          <button className="px-10 py-4 bg-secondary text-white font-bold rounded-full hover:scale-105 transition shadow-lg">
            ចាប់ផ្ដើមប្រើប្រាស់
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Services;