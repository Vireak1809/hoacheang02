// src/pages/AboutUs.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  aboutUsTitle: { km: 'អំពី ហៅជាង', en: 'About Hao Chang' },
  aboutUsSubtitle: { km: 'យើងបង្កើត Platform នេះដើម្បីដោះស្រាយបញ្ហានៃការស្វែងរកជាងជំនាញដែលមានទំនុកចិត្ត និងតម្លាភាពសម្រាប់ម្ចាស់ផ្ទះគ្រប់រូប។', en: 'We built this platform to solve the problem of finding skilled, trustworthy, and transparent technicians for every homeowner.' },
  ourStory: { km: 'រឿងរ៉ាវរបស់យើង', en: 'Our Story' },
  ourStoryPara1: { km: 'ហៅជាង (Hao Chang) ចាប់ផ្តើមចេញពីតម្រូវការជាក់ស្តែងក្នុងសង្គម។ យើងបានសង្កេតឃើញថា ការស្វែងរកជាងដែលមានជំនាញពិតប្រាកដ និងតម្លៃសមរម្យ គឺជាការលំបាកសម្រាប់ម្ចាស់ផ្ទះ។', en: 'Hao Chang started from a real social need. We observed that finding truly skilled technicians at reasonable prices is a challenge for homeowners.' },
  ourStoryPara2: { km: 'គោលដៅរបស់យើងគឺការតភ្ជាប់រវាងម្ចាស់ផ្ទះ និងជាងបច្ចេកទេសតាមរយៈបច្ចេកវិទ្យាទំនើប ដើម្បីធានាបាននូវគុណភាពការងារ សុវត្ថិភាព និងភាពងាយស្រួលបំផុត។', en: 'Our goal is to connect homeowners and technicians through modern technology to ensure quality, safety, and maximum convenience.' },
  missionTitle: { km: 'បេសកកម្មរបស់យើង', en: 'Our Mission' },
  missionText: { km: '"ផ្តល់ជូននូវដំណោះស្រាយជួសជុលគេហដ្ឋានដ៏ល្អបំផុតសម្រាប់ប្រជាជនកម្ពុជា តាមរយៈការកសាងបណ្តាញជាងដែលមានវិជ្ជាជីវៈខ្ពស់ និងប្រព័ន្ធកក់ដ៏ទំនើបបំផុត។"', en: '"Provide the best home repair solutions for the people of Cambodia by building a network of highly professional technicians and a state-of-the-art booking system."' },
  coreValues: { km: 'គុណតម្លៃស្នូលរបស់យើង', en: 'Our Core Values' },
  coreValuesSub: { km: 'អ្វីដែលធ្វើឱ្យ ហៅជាង ក្លាយជាជម្រើសលេខ១ របស់អ្នក', en: 'What makes Hao Chang your #1 choice' },
  valuesTrust: { km: 'ទំនុកចិត្ត', en: 'Trust' },
  valuesTrustDesc: { km: 'រាល់ជាងទាំងអស់ត្រូវបានត្រួតពិនិត្យប្រវត្តិរូប និងសមត្ថភាពយ៉ាងច្បាស់លាស់មុននឹងចូលរួមជាមួយយើង។', en: 'Every technician is thoroughly background-checked and skill-verified before joining us.' },
  valuesTransparency: { km: 'តម្លាភាព', en: 'Transparency' },
  valuesTransparencyDesc: { km: 'តម្លៃត្រូវបានកំណត់ច្បាស់លាស់ និងការវាយតម្លៃសេវាកម្មដោយផ្ទាល់ពីអតិថិជនពិតប្រាកដ។', en: 'Prices are clearly stated and service ratings come from real customers.' },
  valuesSpeed: { km: 'ល្បឿន', en: 'Speed' },
  valuesSpeedDesc: { km: 'ការឆ្លើយតប និងការផ្តល់សេវាកម្មរហ័សទាន់ចិត្តបំផុត សម្រាប់ការជួសជុលបន្ទាន់ៗរបស់អ្នក។', en: 'Ultra-fast response and service delivery for your emergency repairs.' },
  valuesProfessionalism: { km: 'វិជ្ជាជីវៈ', en: 'Professionalism' },
  valuesProfessionalismDesc: { km: 'ជាងមានជំនាញឯកទេសត្រឹមត្រូវ និងមានការស្លៀកពាក់ឯកសណ្ឋានប្រកបដោយសេចក្តីថ្លៃថ្នូរ។', en: 'Technicians have specialized skills and wear professional uniforms.' },
  valuesHomeowner: { km: 'ជួយម្ចាស់ផ្ទះ', en: 'Helping Homeowners' },
  valuesHomeownerDesc: { km: 'ផ្តល់ក្តីសង្ឃឹម និងភាពរីករាយដល់ម្ចាស់ផ្ទះ តាមរយៈសេវាកម្មថែទាំគេហដ្ឋានដែលល្អបំផុត។', en: 'Bringing hope and joy to homeowners through the best home care services.' },
  valuesIncome: { km: 'បង្កើនចំណូលជាង', en: 'Boosting Technician Income' },
  valuesIncomeDesc: { km: 'យើងជួយបង្កើនឱកាសការងារ និងចំណូលបន្ថែមសម្រាប់ជាងបច្ចេកទេសក្នុងតំបន់។', en: 'We help create job opportunities and increase income for local technicians.' },
  ctaTitle: { km: 'ត្រៀមខ្លួនទទួលបានបទពិសោធន៍ថ្មីហើយឬនៅ?', en: 'Ready for a new experience?' },
  ctaDesc: { km: 'ចូលរួមជាមួយគ្រួសារ ហៅជាង ដើម្បីទទួលបានសេវាកម្មជួសជុលដែលរហ័ស និងមានទំនុកចិត្តបំផុតនៅកម្ពុជា។', en: 'Join the Hao Chang family for fast, reliable repair services in Cambodia.' },
  ctaButton: { km: 'ចូលរួមប្រើប្រាស់ ហៅជាង', en: 'Join Hao Chang' },
};

const AboutUs = () => {
  const { lang } = useLanguage();
  const t = (key) => translations[key]?.[lang] || key;

  const values = [
    { icon: 'verified_user', titleKey: 'valuesTrust', descKey: 'valuesTrustDesc', borderColor: 'border-primary' },
    { icon: 'visibility', titleKey: 'valuesTransparency', descKey: 'valuesTransparencyDesc', borderColor: 'border-secondary' },
    { icon: 'bolt', titleKey: 'valuesSpeed', descKey: 'valuesSpeedDesc', borderColor: 'border-primary' },
    { icon: 'business_center', titleKey: 'valuesProfessionalism', descKey: 'valuesProfessionalismDesc', borderColor: 'border-secondary' },
    { icon: 'home_repair_service', titleKey: 'valuesHomeowner', descKey: 'valuesHomeownerDesc', borderColor: 'border-primary' },
    { icon: 'trending_up', titleKey: 'valuesIncome', descKey: 'valuesIncomeDesc', borderColor: 'border-secondary' },
  ];

  return (
    <div className="animate-enter">
      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-primary-container overflow-hidden">
        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {t('aboutUsTitle')}
          </h1>
          <p className="text-lg text-on-primary-container max-w-2xl mx-auto leading-relaxed">
            {t('aboutUsSubtitle')}
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-24 bg-secondary rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-surface-container-lowest">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-500">
              <img
                className="w-full aspect-[4/3] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUzutb8jsfG6gDCqF0SPmR8Bkd2Gosuw9lNmZMVSpxuNexa7nAC_hrWeLdvBCvak7hxlO2nlZZj-dyAVA3xOdAV-2PDY0lW3dwmA4rBNZW1TY3QTvF2j2WlvqbzF1dcfjjvOG9bauMrIHCEKWps4LExoTjqkEUfMU9Bz9J_glVBLsY17GKslhrqH5TMCtVgF6RfQXz533QLbzbNeVLAmEHIk3xIFloryPqk8ZoYbMhnkDy5B3E6Y5hYz-J5yp0SiTN1Te7dBPFFm0"
                alt="Team"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-primary">{t('ourStory')}</h2>
              <div className="h-1 w-12 bg-secondary rounded-full mb-4"></div>
              <p className="text-base text-on-surface-variant leading-relaxed">
                {t('ourStoryPara1')}
              </p>
              <p className="text-base text-on-surface-variant leading-relaxed">
                {t('ourStoryPara2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <span className="material-symbols-outlined text-secondary text-5xl mb-4">rocket_launch</span>
          <h2 className="text-3xl font-bold mb-6">{t('missionTitle')}</h2>
          <div className="max-w-3xl mx-auto border-l-4 border-secondary pl-6 py-4 bg-primary-container/30 rounded-r-lg">
            <p className="text-xl italic leading-relaxed text-left md:text-center md:pl-0 md:border-l-0">
              {t('missionText')}
            </p>
          </div>
        </div>
      </section>

      {/* Values - Bento Grid Style */}
      <section className="py-16 bg-surface">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary">{t('coreValues')}</h2>
            <p className="text-base text-on-surface-variant mt-2">{t('coreValuesSub')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className={`bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all border-t-4 ${value.borderColor} duration-700 opacity-100 translate-y-0`}
              >
                <div className="w-12 h-12 bg-primary-fixed rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-3xl">{value.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">{t(value.titleKey)}</h3>
                <p className="text-sm text-on-surface-variant">{t(value.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-surface-container relative overflow-hidden">
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl font-bold text-primary mb-4">{t('ctaTitle')}</h2>
          <p className="text-base text-on-surface-variant mb-6 max-w-xl mx-auto">
            {t('ctaDesc')}
          </p>
          <Link to="/register">
            <button className="bg-secondary text-white px-10 py-4 rounded-full text-xl font-bold hover:scale-105 transition-shadow duration-300 shadow-lg">
              {t('ctaButton')}
            </button>
          </Link>
        </div>
        {/* Decorative circles */}
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      </section>
    </div>
  );
};

export default AboutUs;