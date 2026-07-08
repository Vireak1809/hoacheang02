// src/pages/AboutUs.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="animate-enter">
      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-primary-container overflow-hidden">
        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">អំពី ហៅជាង</h1>
          <p className="text-lg text-on-primary-container max-w-2xl mx-auto leading-relaxed">
            យើងបង្កើត Platform នេះដើម្បីដោះស្រាយបញ្ហានៃការស្វែងរកជាងជំនាញដែលមានទំនុកចិត្ត និងតម្លាភាពសម្រាប់ម្ចាស់ផ្ទះគ្រប់រូប។
          </p>
          <div className="mt-6 flex justify-center"><div className="h-1 w-24 bg-secondary rounded-full"></div></div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-surface-container-lowest">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img className="w-full aspect-[4/3] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUzutb8jsfG6gDCqF0SPmR8Bkd2Gosuw9lNmZMVSpxuNexa7nAC_hrWeLdvBCvak7hxlO2nlZZj-dyAVA3xOdAV-2PDY0lW3dwmA4rBNZW1TY3QTvF2j2WlvqbzF1dcfjjvOG9bauMrIHCEKWps4LExoTjqkEUfMU9Bz9J_glVBLsY17GKslhrqH5TMCtVgF6RfQXz533QLbzbNeVLAmEHIk3xIFloryPqk8ZoYbMhnkDy5B3E6Y5hYz-J5yp0SiTN1Te7dBPFFm0" alt="Team" />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-primary">រឿងរ៉ាវរបស់យើង</h2>
              <div className="h-1 w-12 bg-secondary rounded-full mb-4"></div>
              <p className="text-base text-on-surface-variant leading-relaxed">
                ហៅជាង (Hao Chang) ចាប់ផ្តើមចេញពីតម្រូវការជាក់ស្តែងក្នុងសង្គម។ យើងបានសង្កេតឃើញថា ការស្វែងរកជាងដែលមានជំនាញពិតប្រាកដ និងតម្លៃសមរម្យ គឺជាការលំបាកសម្រាប់ម្ចាស់ផ្ទះ។
              </p>
              <p className="text-base text-on-surface-variant leading-relaxed">
                គោលដៅរបស់យើងគឺការតភ្ជាប់រវាងម្ចាស់ផ្ទះ និងជាងបច្ចេកទេសតាមរយៈបច្ចេកវិទ្យាទំនើប ដើម្បីធានាបាននូវគុណភាពការងារ សុវត្ថិភាព និងភាពងាយស្រួលបំផុត។
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <span className="material-symbols-outlined text-secondary text-5xl mb-4">rocket_launch</span>
          <h2 className="text-3xl font-bold mb-6">បេសកកម្មរបស់យើង</h2>
          <div className="max-w-3xl mx-auto border-l-4 border-secondary pl-6 py-4 bg-primary-container/30 rounded-r-lg">
            <p className="text-xl italic leading-relaxed text-left md:text-center md:pl-0 md:border-l-0">
              "ផ្តល់ជូននូវដំណោះស្រាយជួសជុលគេហដ្ឋានដ៏ល្អបំផុតសម្រាប់ប្រជាជនកម្ពុជា តាមរយៈការកសាងបណ្តាញជាងដែលមានវិជ្ជាជីវៈខ្ពស់ និងប្រព័ន្ធកក់ដ៏ទំនើបបំផុត។"
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-surface">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary">គុណតម្លៃស្នូលរបស់យើង</h2>
            <p className="text-base text-on-surface-variant mt-2">អ្វីដែលធ្វើឱ្យ ហៅជាង ក្លាយជាជម្រើសលេខ១ របស់អ្នក</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: 'verified_user', label: 'ទំនុកចិត្ត', desc: 'រាល់ជាងទាំងអស់ត្រូវបានត្រួតពិនិត្យប្រវត្តិរូប និងសមត្ថភាពយ៉ាងច្បាស់លាស់មុននឹងចូលរួមជាមួយយើង។' },
              { icon: 'visibility', label: 'តម្លាភាព', desc: 'តម្លៃត្រូវបានកំណត់ច្បាស់លាស់ និងការវាយតម្លៃសេវាកម្មដោយផ្ទាល់ពីអតិថិជនពិតប្រាកដ។' },
              { icon: 'bolt', label: 'ល្បឿន', desc: 'ការឆ្លើយតប និងការផ្តល់សេវាកម្មរហ័សទាន់ចិត្តបំផុត សម្រាប់ការជួសជុលបន្ទាន់ៗរបស់អ្នក។' }
            ].map((value, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition border-t-4 border-primary">
                <div className="w-12 h-12 bg-primary-fixed rounded-lg flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary text-3xl">{value.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">{value.label}</h3>
                <p className="text-sm text-on-surface-variant">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-surface-container">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">ត្រៀមខ្លួនទទួលបានបទពិសោធន៍ថ្មីហើយឬនៅ?</h2>
          <p className="text-base text-on-surface-variant mb-6 max-w-xl mx-auto">
            ចូលរួមជាមួយគ្រួសារ ហៅជាង ដើម្បីទទួលបានសេវាកម្មជួសជុលដែលរហ័ស និងមានទំនុកចិត្តបំផុតនៅកម្ពុជា។
          </p>
          <Link to="/register">
            <button className="bg-secondary text-white px-10 py-4 rounded-full text-xl font-bold hover:scale-105 transition shadow-lg">
              ចូលរួមប្រើប្រាស់ ហៅជាង
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;