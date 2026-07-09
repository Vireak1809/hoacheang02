// src/pages/Home.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  // Hero
  heroTitle: { km: 'ហៅជាងជំនាញ បានយ៉ាងងាយ និងរហ័ស', en: 'Book Skilled Technicians, Easily and Fast' },
  heroSub: { km: 'Platform សម្រាប់ផ្គូផ្គងម្ចាស់ផ្ទះជាមួយជាងជំនាញដែលមានទំនុកចិត្តខ្ពស់។ យើងផ្តល់សេវាកម្មជួសជុលគ្រប់ប្រភេទដែលអ្នកត្រូវការក្នុងពេលតែមួយ។', en: 'A platform that connects homeowners with trusted professionals. We provide all types of home repair services you need in one place.' },
  getStarted: { km: 'ចាប់ផ្ដើមប្រើប្រាស់', en: 'Get Started' },
  viewServices: { km: 'មើលសេវាកម្ម', en: 'View Services' },

  // Problems
  problemsTitle: { km: 'បញ្ហាដែលយើងកំពុងដោះស្រាយ', en: 'Problems We Are Solving' },
  problem1Title: { km: 'ម្ចាស់ផ្ទះពិបាករកជាង', en: 'Homeowners Struggle to Find Technicians' },
  problem1Desc: { km: 'មិនដឹងត្រូវទាក់ទងអ្នកណាពេលមានបញ្ហាបន្ទាន់នៅក្នុងផ្ទះ និងត្រូវរង់ចាំយូរ។', en: 'Not knowing who to contact when urgent issues arise at home, leading to long waiting times.' },
  problem2Title: { km: 'មិនដឹងថាជាងទុកចិត្តបាន', en: 'Uncertainty About Technician Reliability' },
  problem2Desc: { km: 'បារម្ភពីគុណភាពការងារ តម្លៃមិនច្បាស់លាស់ និងសុវត្ថិភាពរបស់សមាជិកគ្រួសារ។', en: 'Concerns about work quality, unclear pricing, and safety for family members.' },
  problem3Title: { km: 'ជាងជំនាញពិបាករកម៉ូយ', en: 'Skilled Technicians Struggle to Find Clients' },
  problem3Desc: { km: 'ជាងដែលមានជំនាញពិតប្រាកដជួបការលំបាកក្នុងការផ្សព្វផ្សាយសេវាកម្មរបស់ខ្លួន។', en: 'Truly skilled technicians face challenges in promoting their services.' },

  // Solutions
  solutionsTitle: { km: 'ដំណោះស្រាយរបស់ ហៅជាង', en: 'Hao Chang Solutions' },
  solution1Title: { km: 'ជ្រើសរើសសេវា', en: 'Select Service' },
  solution1Desc: { km: 'មានជម្រើសសេវាកម្មជួសជុលផ្ទះយ៉ាងសម្បូរបែប ចាប់ពីម៉ាស៊ីនត្រជាក់ រហូតដល់បណ្ដាញទឹក។', en: 'Wide range of home repair services, from AC to plumbing.' },
  solution2Title: { km: 'កំណត់ទីតាំងលើ Map', en: 'Set Location on Map' },
  solution2Desc: { km: 'ងាយស្រួលប្រាប់ទីតាំងផ្ទះរបស់អ្នកយ៉ាងច្បាស់លាស់ ជាងអាចធ្វើដំណើរមកដល់ទីតាំងភ្លាមៗ។', en: 'Easily pinpoint your home location so technicians can arrive quickly.' },
  solution3Title: { km: 'ជ្រើសជាងដោយខ្លួនឯង', en: 'Choose Your Technician' },
  solution3Desc: { km: 'មើលប្រវត្តិរូប រូបភាពការងារ និងការវាយតម្លៃពីអតិថិជនមុនៗ។', en: 'View profiles, work photos, and reviews from previous customers.' },
  solution4Title: { km: 'ទទួល E-Invoice', en: 'Receive E-Invoice' },
  solution4Desc: { km: 'វិក្កយបត្រអេឡិចត្រូនិចច្បាស់លាស់ តម្លាភាព និងងាយស្រួលរក្សាទុកសម្រាប់ជាភស្តុតាងជួសជុល។', en: 'Clear, transparent electronic invoices easy to store as repair evidence.' },

  // Popular Services
  popularTitle: { km: 'សេវាកម្មពេញនិយម', en: 'Popular Services' },
  popularSub: { km: 'យើងមានជាងជំនាញជាច្រើនកំពុងរង់ចាំបម្រើលោកអ្នក', en: 'We have many skilled technicians waiting to serve you' },
  viewAll: { km: 'មើលសេវាទាំងអស់', en: 'View All Services' },
  plumberTitle: { km: 'សេវាជួសជុលបណ្ដាញទឹក', en: 'Plumbing Services' },
  plumberDesc: { km: 'ចាប់ពីការជួសជុលទុយោដែលលេច រហូតដល់ការដំឡើងប្រព័ន្ធទឹកស្អាតទាំងមូល។', en: 'From fixing leaky pipes to installing complete clean water systems.' },
  plumberPrice: { km: 'ចាប់ពី $15.00', en: 'Starting from $15.00' },
  plumberBadge: { km: 'ជំនាញទឹក', en: 'Plumbing Expert' },
  electricianTitle: { km: 'សេវាអគ្គិសនីទូទៅ', en: 'General Electrical Services' },
  electricianDesc: { km: 'ជួសជុលដាច់ចរន្តអគ្គិសនី ដំឡើងអំពូលភ្លើង និងការត្រួតពិនិត្យសុវត្ថិភាពបណ្ដាញ។', en: 'Fix power outages, install lighting, and perform safety inspections.' },
  electricianPrice: { km: 'ចាប់ពី $20.00', en: 'Starting from $20.00' },
  electricianBadge: { km: 'ជំនាញអគ្គិសនី', en: 'Electrical Expert' },
  acTitle: { km: 'លាង និងជួសជុលម៉ាស៊ីនត្រជាក់', en: 'AC Cleaning & Repair' },
  acDesc: { km: 'ធានាម៉ាស៊ីនត្រជាក់របស់អ្នកត្រជាក់ខ្លាំង និងសន្សំសំចៃអគ្គិសនីជាមួយជាងជំនាញ។', en: 'Ensure your AC is cool and energy-efficient with our experts.' },
  acPrice: { km: 'ចាប់ពី $10.00', en: 'Starting from $10.00' },
  acBadge: { km: 'ម៉ាស៊ីនត្រជាក់', en: 'AC Expert' },
  viewDetail: { km: 'មើលលម្អិត', en: 'View Details' },

  // Emergency Banner
  emergencyBadge: { km: 'សេវាបន្ទាន់ 24/7', en: 'Emergency Service 24/7' },
  emergencyTitle: { km: 'ត្រូវការជាងបន្ទាន់?', en: 'Need a Technician Urgently?' },
  emergencyDesc: { km: 'យើងមានសេវាកម្មជួសជុលបន្ទាន់ ២៤/៧។ គ្រាន់តែឡុកអ៊ីន រួចជ្រើសរើសប្រភេទបញ្ហាបន្ទាន់របស់អ្នក Tune In ។', en: 'We offer 24/7 emergency repair services. Just log in and select your urgent issue.' },
  emergencyButton: { km: 'ចូលប្រើប្រាស់ ដើម្បីហៅជាង', en: 'Login to Call a Technician' },

  // How It Works
  howItWorksTitle: { km: 'តើ Hao Chang ដំណើរការយ៉ាងដូចម្តេច?', en: 'How Does Hao Chang Work?' },
  step1: { km: 'ចូលកម្មវិធី', en: 'Open App' },
  step1Sub: { km: 'បើកកម្មវិធី Hao Chang', en: 'Open Hao Chang app' },
  step2: { km: 'ជ្រើសរើសសេវា', en: 'Select Service' },
  step2Sub: { km: 'ជ្រើសរើសប្រភេទការងារ', en: 'Choose job type' },
  step3: { km: 'ហៅជាង', en: 'Call Technician' },
  step3Sub: { km: 'ជ្រើសរើសជាងដែលចូលចិត្ត', en: 'Pick your preferred technician' },
  step4: { km: 'ជួសជុល', en: 'Repair' },
  step4Sub: { km: 'ជាងធ្វើការងារយ៉ាងជំនាញ', en: 'Technician works skillfully' },
  step5: { km: 'ទូទាត់ប្រាក់', en: 'Pay' },
  step5Sub: { km: 'ទទួល E-Invoice & វាយតម្លៃ', en: 'Receive E-Invoice & Rate' },

  // CTA
  ctaTitle: { km: 'ត្រៀមរកជាងហើយឬនៅ?', en: 'Ready to Find a Technician?' },
  ctaDesc: { km: 'ចូលរួមជាមួយគ្រួសារជាងរាប់ពាន់នាក់ និងម្ចាស់ផ្ទះរាប់ម៉ឺននាក់ក្នុងប្រទេសកម្ពុជា។ បង្កើតគណនីឥឡូវនេះ ដើម្បីទទួលបានបទពិសោធន៍ថ្មី!', en: 'Join thousands of technicians and homeowners in Cambodia. Create an account now for a new experience!' },
  ctaRegister: { km: 'បង្កើតគណនី', en: 'Create Account' },
  ctaLogin: { km: 'ចូលប្រើប្រាស់', en: 'Login' },

  // Footer
  footerDesc: { km: 'ហៅជាង ជា Platform សម្រាប់ផ្គូផ្គងអ្នកត្រូវការសេវាជួសជុលជាមួយជាងជំនាញដែលអាចទុកចិត្តបាន។', en: 'Hao Chang is a platform connecting those in need of repair services with trusted skilled technicians.' },
  quickLinks: { km: 'តំណភ្ជាប់រហ័ស', en: 'Quick Links' },
  servicesFooter: { km: 'សេវាកម្ម', en: 'Services' },
  contactFooter: { km: 'ទំនាក់ទំនង', en: 'Contact' },
  phone: { km: '+855 12 345 678', en: '+855 12 345 678' },
  email: { km: 'support@haochang.com', en: 'support@haochang.com' },
  telegram: { km: '@HaoChangSupport', en: '@HaoChangSupport' },
  location: { km: 'ភ្នំពេញ, កម្ពុជា', en: 'Phnom Penh, Cambodia' },
  rights: { km: '© 2026 Hao Chang. រក្សាសិទ្ធិគ្រប់យ៉ាង។', en: '© 2026 Hao Chang. All rights reserved.' },
  privacy: { km: 'គោលការណ៍ឯកជនភាព', en: 'Privacy Policy' },
  terms: { km: 'លក្ខខណ្ឌប្រើប្រាស់', en: 'Terms of Service' },
};

const Home = () => {
  const { lang } = useLanguage();
  const t = (key) => translations[key]?.[lang] || key;

  useEffect(() => {
    // Scroll reveal animation for sections
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.section-animate').forEach((section) => {
      section.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="animate-enter">
      {/* Hero Section */}
      <header className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://lh3.googleusercontent.com/aida-public/AB6AXuC5EPZhnWxYaQc1dEEV-v3z9yN9-87s2psdyTRcyEV1bEjPF42-jTV9Xk6VdfshoIZVdF5DmcstWjD8ahUGiB81CtKQ6EQKWitBYWviAZlscbWNWw-VWerlo9oI6HEdcRa2Jnlf9M1WHGE6kK9ghuwDpo6BbRVWfY6uZWVpYP7plOWsSfKvO27Yc18hgkWdpYpr4fb2oEnH0uC2cPaVqHGlQnEpfSGw298KKEbXsO3JWH52TYGRkgaxrwR3TebOGypOySlJwiHP6v8)',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent"></div>
        <div className="relative container-custom h-full flex flex-col justify-center items-start text-white py-16">
          <h1 className="text-3xl md:text-5xl font-bold max-w-2xl leading-tight mb-4">
            {t('heroTitle')}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-xl mb-6">{t('heroSub')}</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/register" className="bg-secondary text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform">
              {t('getStarted')}
            </Link>
            <Link
              to="/services"
              className="glass-card text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition"
            >
              {t('viewServices')}
            </Link>
          </div>
        </div>
      </header>

      {/* Problem Section */}
      <section className="section-animate py-16 bg-surface-container-low">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-on-surface mb-8">{t('problemsTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: 'search_off', title: 'problem1Title', desc: 'problem1Desc' },
              { icon: 'gpp_maybe', title: 'problem2Title', desc: 'problem2Desc' },
              { icon: 'person_off', title: 'problem3Title', desc: 'problem3Desc' },
            ].map((p, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-[0px_4px_20px_rgba(26,54,93,0.08)] border border-outline-variant/30 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-error-container rounded-full flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-error text-4xl">{p.icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{t(p.title)}</h3>
                <p className="text-base text-on-surface-variant">{t(p.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-animate py-16 bg-white overflow-hidden">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">{t('solutionsTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-2 bg-primary-container rounded-2xl p-6 flex flex-col justify-between text-white min-h-[280px] group hover:scale-[1.01] transition">
              <div>
                <span className="material-symbols-outlined text-5xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
                  list_alt
                </span>
                <h3 className="text-2xl font-bold mb-2">{t('solution1Title')}</h3>
                <p className="opacity-80">{t('solution1Desc')}</p>
              </div>
              <div className="w-full h-28 bg-white/10 rounded-lg mt-4 overflow-hidden relative">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuA9POrW79K93-nolnppRJQ2PCq5C698uniGTVwHEHfBHo00wvu0mxZ-Ec4RrMcfSIl2OTuq3cZ4Bb-v5ZNscqtPUGcW988vs1Zo-Ne1vuJMNsGC94XQAKGE5Nw9KYJrzAEObd51eoepsr-EAW5yqyaQdNHOoziDqrGKmX91bHpebdKh0gz_-hu7M_6XMCAPFQF16_d2iugRUtvhl6qfCwDzg5F1OkstrC_MO5WUNNt8_nfQu7sGED_OWSyFT40HzLWUemhwv0yx_XA)' }}></div>
              </div>
            </div>
            <div className="md:col-span-2 bg-surface-container rounded-2xl p-6 border border-outline-variant flex flex-col justify-between min-h-[280px]">
              <div>
                <span className="material-symbols-outlined text-primary text-5xl mb-4">map</span>
                <h3 className="text-2xl font-bold mb-2">{t('solution2Title')}</h3>
                <p className="text-on-surface-variant">{t('solution2Desc')}</p>
              </div>
              <div className="w-full h-28 rounded-lg mt-4 overflow-hidden grayscale">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU9Z1HdEmdgePoDfZQKxcUD2ISH6BP5lsPj7yrym1JGrE8Kroob6vO9VEuLoOf0B9goR4jflBd79SekryGA8lLY7OKdGuwrLZYyqiam2v8BSbEMdgLPqJ7wO6-vFj3VMmPlhPTQy1IPofXcbOeNOJcuAF2mYwedvaBP7mbR7jHEJ7d1TmwzKJ-1I9cDw9RwIcr4x-thnhjUnogGjYMWW6w24HsIbX1rHHC7JgHYQI8ODGNF5Y0WU4AwE8TV6t3HSjf38lwMb1rzUQ"
                  alt="Map"
                />
              </div>
            </div>
            <div className="md:col-span-1 bg-surface-variant rounded-2xl p-6 flex flex-col gap-2 border border-outline-variant">
              <span className="material-symbols-outlined text-primary text-4xl">person_check</span>
              <h3 className="text-sm font-bold text-primary uppercase tracking-wider">{t('solution3Title')}</h3>
              <p className="text-base">{t('solution3Desc')}</p>
            </div>
            <div className="md:col-span-3 bg-secondary-fixed rounded-2xl p-6 flex flex-col md:flex-row items-center gap-4 border border-secondary-container">
              <div className="md:w-1/2">
                <span className="material-symbols-outlined text-secondary text-5xl mb-2">receipt_long</span>
                <h3 className="text-2xl font-bold mb-2">{t('solution4Title')}</h3>
                <p className="text-on-secondary-fixed-variant">{t('solution4Desc')}</p>
              </div>
              <div className="md:w-1/2 w-full h-36 bg-white/50 rounded-xl flex items-center justify-center">
                <span className="text-primary font-bold text-2xl">E-INVOICE #8890</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="section-animate py-16 bg-surface">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-on-surface">{t('popularTitle')}</h2>
              <p className="text-on-surface-variant">{t('popularSub')}</p>
            </div>
            <Link to="/services" className="hidden md:flex items-center gap-2 text-primary font-bold hover:underline">
              {t('viewAll')} <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Plumbing */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-md border border-outline-variant/30 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="h-56 w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-110" style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuBKx4NROYSVO4uXWwTZHUD6w0MN1v5vs5AESVRw6I1WTZ5ReiVH4a0fTJnFttRbSV1QxFhbW-9O3jYfmQpp_rov5KK05EUurxhgyTAq3TBecbOBJzFhwycdS9CGNIYKYRWh1Z-ngLQgPtl5RKYSZZBg5Ty_V-14yL48PXiHzDDMmt9KKJnUJoYzNq5htUpxVVj0CJQ4DDw1ocmQYkha5wc4EGgXqIB0tmKBOavt76n2YoSZbvmvRy78ddG4ZrXglLEAwi_Gil9fqko)' }}></div>
                <div className="absolute top-4 left-4 bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-medium">{t('plumberBadge')}</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{t('plumberTitle')}</h3>
                <p className="text-on-surface-variant text-base mb-4">{t('plumberDesc')}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold">{t('plumberPrice')}</span>
                  <Link to="/service/plumber" className="bg-primary/10 text-primary px-4 py-2 rounded-lg font-medium hover:bg-primary hover:text-white transition">
                    {t('viewDetail')}
                  </Link>
                </div>
              </div>
            </div>

            {/* Electrician */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-md border border-outline-variant/30 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="h-56 w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-110" style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuCkdpQhoIed7IJMUpTCZAVPznpxaGLZzPgUEaZOodb4aniG1tTPtzMGygzxib6ymjSVlcG3meQyZJg--qhuX8cYc12vjgPMqd9Yo-4VcCKSf30ppvfdGsk1How538fpni312Q9P_iAQ2GPOfi-6V5Hk-aAA3PDVwLWe_6ocQV7Mc0sSLxhVRhydcK4y7K-wW0S1OWqaDC33xk7Fi8rTX_CNOcZN0BWJJRr877Uf7DpOf-cLnnJRWGwSZ2i3jEbT6945EUowHok9loM)' }}></div>
                <div className="absolute top-4 left-4 bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-medium">{t('electricianBadge')}</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{t('electricianTitle')}</h3>
                <p className="text-on-surface-variant text-base mb-4">{t('electricianDesc')}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold">{t('electricianPrice')}</span>
                  <Link to="/service/electrician" className="bg-primary/10 text-primary px-4 py-2 rounded-lg font-medium hover:bg-primary hover:text-white transition">
                    {t('viewDetail')}
                  </Link>
                </div>
              </div>
            </div>

            {/* AC */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-md border border-outline-variant/30 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="h-56 w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-110" style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuD96AgreBo-hrHa1y71sOTY-tf4pRhlA7p-q4DBZZsBcUcW5ni5NFIve8zgktzV5_7N9iAhxvyv8VHTptvm60nT-Ez8uLR4UEX07_RY0nLdwSD9pP3KmDjYpVwfePkSMqeZIPNdQN27zpVM4kfkm9mafJzC0QJE5w_1YIa8Zfxz1BOv4MOJatIOjZQC4RQvHPl8ELV4mB0ib_gb0OO9pzjPKdduB84l6Cscur-1KIAVbp4sM4hQwIVNUv9WFf8lD257j1fMIpiJXuc)' }}></div>
                <div className="absolute top-4 left-4 bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-medium">{t('acBadge')}</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{t('acTitle')}</h3>
                <p className="text-on-surface-variant text-base mb-4">{t('acDesc')}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold">{t('acPrice')}</span>
                  <Link to="/service/ac" className="bg-primary/10 text-primary px-4 py-2 rounded-lg font-medium hover:bg-primary hover:text-white transition">
                    {t('viewDetail')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="section-animate container-custom my-8">
        <div className="bg-secondary rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-white text-center md:text-left">
            <span className="px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold uppercase tracking-wider inline-block mb-3">
              {t('emergencyBadge')}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{t('emergencyTitle')}</h2>
            <p className="text-white/90 max-w-lg">{t('emergencyDesc')}</p>
          </div>
          <Link to="/login" className="bg-white text-secondary px-8 py-4 rounded-xl font-bold flex items-center gap-4 hover:bg-secondary-fixed transition">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              bolt
            </span>
            {t('emergencyButton')}
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-animate py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">{t('howItWorksTitle')}</h2>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-surface-container-high -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 relative z-10">
              {[
                { num: '1', label: 'step1', sub: 'step1Sub' },
                { num: '2', label: 'step2', sub: 'step2Sub' },
                { num: '3', label: 'step3', sub: 'step3Sub' },
                { num: '4', label: 'step4', sub: 'step4Sub' },
                { num: '5', label: 'step5', sub: 'step5Sub' },
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-2xl mb-4 border-4 border-white shadow-md">
                    {step.num}
                  </div>
                  <h4 className="font-bold text-sm md:text-base mb-1">{t(step.label)}</h4>
                  <p className="text-xs md:text-sm text-on-surface-variant">{t(step.sub)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-animate py-16 bg-surface-container-highest">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('ctaTitle')}</h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-8">{t('ctaDesc')}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register" className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition shadow-lg">
              {t('ctaRegister')}
            </Link>
            <Link to="/login" className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold hover:bg-primary hover:text-white transition">
              {t('ctaLogin')}
            </Link>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Home;