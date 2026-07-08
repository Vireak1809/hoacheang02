// pages/Home.jsx
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';

const translations = {
  heroTitle: { km: 'ហៅជាងជំនាញ បានយ៉ាងងាយ និងរហ័ស', en: 'Find Skilled Technicians, Easy & Fast' },
  heroSubtitle: { km: 'Platform សម្រាប់ផ្គូផ្គងម្ចាស់ផ្ទះជាមួយជាងជំនាញដែលមានទំនុកចិត្តខ្ពស់។', en: 'A platform connecting homeowners with trusted, skilled technicians.' },
  startUsing: { km: 'ចាប់ផ្ដើមប្រើប្រាស់', en: 'Get Started' },
  viewServices: { km: 'មើលសេវាកម្ម', en: 'View Services' },

  popularServices: { km: 'សេវាកម្មពេញនិយម', en: 'Popular Services' },
  popularServicesDesc: { km: 'យើងមានជាងជំនាញជាច្រើនកំពុងរង់ចាំបម្រើលោកអ្នក', en: 'We have many skilled technicians waiting to serve you' },
  viewDetail: { km: 'មើលលម្អិត', en: 'View Details' },

  // Service cards
  plumberTitle: { km: 'ជាងទឹក', en: 'Plumber' },
  plumberDesc: { km: 'ចាប់ពីការជួសជុលទុយោដែលលេច រហូតដល់ការដំឡើងប្រព័ន្ធទឹកស្អាត', en: 'From fixing leaky pipes to installing water purification systems' },
  plumberPrice: { km: 'ចាប់ពី $15.00', en: 'From $15.00' },

  electricianTitle: { km: 'ជាងភ្លើង', en: 'Electrician' },
  electricianDesc: { km: 'ជួសជុលដាច់ចរន្តអគ្គិសនី ដំឡើងអំពូលភ្លើង និងត្រួតពិនិត្យសុវត្ថិភាព', en: 'Electrical repairs, light installation, and safety inspections' },
  electricianPrice: { km: 'ចាប់ពី $20.00', en: 'From $20.00' },

  acTitle: { km: 'ម៉ាស៊ីនត្រជាក់', en: 'Air Conditioner' },
  acDesc: { km: 'លាងសម្អាត ជួសជុល បញ្ចូលហ្គាស និងដំឡើងម៉ាស៊ីនត្រជាក់', en: 'Cleaning, repair, gas refill, and installation' },
  acPrice: { km: 'ចាប់ពី $10.00', en: 'From $10.00' },

  howItWorks: { km: 'របៀបដំណើរការ', en: 'How It Works' },
  step1Label: { km: 'ចូលកម្មវិធី', en: 'Open App' },
  step1Sub: { km: 'បើកកម្មវិធី Hao Chang', en: 'Open Hao Chang App' },
  step2Label: { km: 'ជ្រើសសេវា', en: 'Choose Service' },
  step2Sub: { km: 'ជ្រើសរើសប្រភេទការងារ', en: 'Select job type' },
  step3Label: { km: 'ហៅជាង', en: 'Find Technician' },
  step3Sub: { km: 'ជ្រើសរើសជាងដែលចូលចិត្ត', en: 'Pick your preferred technician' },
  step4Label: { km: 'ជួសជុល', en: 'Repair' },
  step4Sub: { km: 'ជាងធ្វើការងារយ៉ាងជំនាញ', en: 'Technician works professionally' },
  step5Label: { km: 'ទូទាត់', en: 'Pay' },
  step5Sub: { km: 'ទទួល E-Invoice & វាយតម្លៃ', en: 'Get E-Invoice & Review' },

  emergencyTitle: { km: 'ត្រូវការជាងបន្ទាន់?', en: 'Need Emergency Repair?' },
  emergencyDesc: { km: 'យើងមានសេវាកម្មជួសជុលបន្ទាន់ ២៤/៧។', en: 'We have 24/7 emergency repair service.' },
  emergencyButton: { km: 'ចូលប្រើប្រាស់ ដើម្បីហៅជាង', en: 'Login to Call a Technician' },

  ctaTitle: { km: 'ត្រៀមរកជាងហើយឬនៅ?', en: 'Ready to Find a Technician?' },
  ctaDesc: { km: 'ចូលរួមជាមួយគ្រួសារជាងរាប់ពាន់នាក់ និងម្ចាស់ផ្ទះរាប់ម៉ឺននាក់ក្នុងប្រទេសកម្ពុជា។', en: 'Join thousands of technicians and tens of thousands of homeowners across Cambodia.' },
  createAccount: { km: 'បង្កើតគណនី', en: 'Create Account' },
  login: { km: 'ចូលប្រើប្រាស់', en: 'Login' },
};

const Home = () => {
  const { lang } = useLanguage();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  // Redirect to dashboard if already logged in
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/dashboard', { replace: true });
    }
  }, [isLoggedIn, navigate]);

  const t = (key) => translations[key]?.[lang] || key;

  const services = [
    {
      icon: 'plumbing',
      titleKey: 'plumberTitle',
      descKey: 'plumberDesc',
      priceKey: 'plumberPrice',
      link: '/service/plumber',
      image: 'https://savvyplumbing.co.za/wp-content/uploads/2021/06/professional-plumber.jpg'
    },
    {
      icon: 'electrical_services',
      titleKey: 'electricianTitle',
      descKey: 'electricianDesc',
      priceKey: 'electricianPrice',
      link: '/service/electrician',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkdpQhoIed7IJMUpTCZAVPznpxaGLZzPgUEaZOodb4aniG1tTPtzMGygzxib6ymjSVlcG3meQyZJg--qhuX8cYc12vjgPMqd9Yo-4VcCKSf30ppvfdGsk1How538fpni312Q9P_iAQ2GPOfi-6V5Hk-aAA3PDVwLWe_6ocQV7Mc0sSLxhVRhydcK4y7K-wW0S1OWqaDC33xk7Fi8rTX_CNOcZN0BWJJRr877Uf7DpOf-cLnnJRWGwSZ2i3jEbT6945EUowHok9loM'
    },
    {
      icon: 'ac_unit',
      titleKey: 'acTitle',
      descKey: 'acDesc',
      priceKey: 'acPrice',
      link: '/service/ac',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD96AgreBo-hrHa1y71sOTY-tf4pRhlA7p-q4DBZZsBcUcW5ni5NFIve8zgktzV5_7N9iAhxvyv8VHTptvm60nT-Ez8uLR4UEX07_RY0nLdwSD9pP3KmDjYpVwfePkSMqeZIPNdQN27zpVM4kfkm9mafJzC0QJE5w_1YIa8Zfxz1BOv4MOJatIOjZQC4RQvHPl8ELV4mB0ib_gb0OO9pzjPKdduB84l6Cscur-1KIAVbp4sM4hQwIVNUv9WFf8lD257j1fMIpiJXuc'
    }
  ];

  // Fallback image – if the primary image fails, use a seeded placeholder
  const getFallbackImage = (titleKey) => {
    return `https://picsum.photos/seed/${titleKey}/600/400`;
  };

  const steps = [
    { num: lang === 'km' ? '១' : '1', labelKey: 'step1Label', subKey: 'step1Sub' },
    { num: lang === 'km' ? '២' : '2', labelKey: 'step2Label', subKey: 'step2Sub' },
    { num: lang === 'km' ? '៣' : '3', labelKey: 'step3Label', subKey: 'step3Sub' },
    { num: lang === 'km' ? '៤' : '4', labelKey: 'step4Label', subKey: 'step4Sub' },
    { num: lang === 'km' ? '៥' : '5', labelKey: 'step5Label', subKey: 'step5Sub' }
  ];

  return (
    <div className="animate-enter">
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] md:min-h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuC5EPZhnWxYaQc1dEEV-v3z9yN9-87s2psdyTRcyEV1bEjPF42-jTV9Xk6VdfshoIZVdF5DmcstWjD8ahUGiB81CtKQ6EQKWitBYWviAZlscbWNWw-VWerlo9oI6HEdcRa2Jnlf9M1WHGE6kK9ghuwDpo6BbRVWfY6uZWVpYP7plOWsSfKvO27Yc18hgkWdpYpr4fb2oEnH0uC2cPaVqHGlQnEpfSGw298KKEbXsO3JWH52TYGRkgaxrwR3TebOGypOySlJwiHP6v8)'
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent"></div>
        <div className="relative container-custom h-full flex flex-col justify-center py-16">
          <h1 className="text-3xl md:text-5xl font-bold text-white max-w-2xl leading-tight mb-4">
            {t('heroTitle')}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-xl mb-6">
            {t('heroSubtitle')}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/register" className="btn-secondary text-lg px-8 py-4">
              {t('startUsing')}
            </Link>
            <Link to="/services" className="glass-card text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition">
              {t('viewServices')}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview – with image fallback */}
      <section className="py-12 md:py-16 bg-surface-container-low">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-3">{t('popularServices')}</h2>
          <p className="text-center text-on-surface-variant mb-8">{t('popularServicesDesc')}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((svc, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden shadow-md border border-outline-variant/30 card-hover cursor-pointer"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={svc.image}
                    alt={t(svc.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    // 🔧 FALLBACK: if image fails, use a placeholder
                    onError={(e) => {
                      e.target.src = getFallbackImage(svc.titleKey);
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {t(svc.titleKey)}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-primary mb-1">{t(svc.titleKey)}</h3>
                  <p className="text-sm text-on-surface-variant mb-3 line-clamp-2">{t(svc.descKey)}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold">{t(svc.priceKey)}</span>
                    <Link
                      to={svc.link}
                      className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition"
                    >
                      {t('viewDetail')}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-8">{t('howItWorks')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="step-number mb-3">{step.num}</div>
                <h4 className="text-sm md:text-base font-bold text-primary">{t(step.labelKey)}</h4>
                <p className="text-xs text-on-surface-variant mt-1 hidden sm:block">{t(step.subKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-8 md:py-12">
        <div className="container-custom">
          <div className="bg-secondary rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="text-white text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{t('emergencyTitle')}</h2>
              <p className="text-white/90 max-w-lg">
                {t('emergencyDesc')}
              </p>
            </div>
            <Link to="/login" className="bg-white text-secondary px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-secondary-fixed transition shadow-lg">
              <span className="material-symbols-outlined">bolt</span>
              {t('emergencyButton')}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('ctaTitle')}</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-6">
            {t('ctaDesc')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register" className="bg-secondary text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition shadow-lg">
              {t('createAccount')}
            </Link>
            <Link to="/login" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition">
              {t('login')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;