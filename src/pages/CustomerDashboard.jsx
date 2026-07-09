// src/pages/CustomerDashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  greeting: { km: 'សួស្ដី, សុភា', en: 'Hello, Sophea' },
  greetingQuestion: { km: 'តើអ្នកត្រូវការជាងប្រភេទណាថ្ងៃនេះ?', en: 'What type of technician do you need today?' },
  currentLocation: { km: 'ទីតាំងបច្ចុប្បន្ន', en: 'Current Location' },
  locationAddress: { km: 'បុរីប៉េងហួត បឹងស្នោរ, ភ្នំពេញ', en: 'Peng Huot Borey, Boeung Snor, Phnom Penh' },
  searchPlaceholder: { km: 'ស្វែងរកសេវាកម្ម (ឧទាហរណ៍៖ ជួសជុលម៉ាស៊ីនត្រជាក់...)', en: 'Search services (e.g. AC repair...)' },
  searchButton: { km: 'ស្វែងរក', en: 'Search' },
  popularTitle: { km: 'សេវាកម្មពេញនិយម', en: 'Popular Services' },
  viewAll: { km: 'មើលទាំងអស់', en: 'View All' },
  plumberLabel: { km: 'ជាងទឹក', en: 'Plumber' },
  plumberPrice: { km: 'ចាប់ផ្ដើមពី $15', en: 'Starting from $15' },
  electricianLabel: { km: 'ជាងអគ្គិសនី', en: 'Electrician' },
  electricianPrice: { km: 'ចាប់ផ្ដើមពី $20', en: 'Starting from $20' },
  acLabel: { km: 'ជាងម៉ាស៊ីនត្រជាក់', en: 'Air Conditioner' },
  acPrice: { km: 'ចាប់ផ្ដើមពី $18', en: 'Starting from $18' },
  emergencyBadge: { km: 'សេវាបន្ទាន់ 24/7', en: '24/7 Emergency Service' },
  emergencyTitle: { km: 'ត្រូវការជាងបន្ទាន់?', en: 'Need an urgent repair?' },
  emergencyDesc: { km: 'យើងមានបច្ចេកទេសជំនាញៗនៅក្បែរលោកអ្នកបំផុត ដែលអាចទៅដល់ក្នុងរយៈពេល ២០ នាទី។', en: 'We have skilled technicians near you, ready to arrive within 20 minutes.' },
  emergencyButton: { km: 'ហៅជាងបន្ទាន់', en: 'Call Emergency Technician' },
  recentTitle: { km: 'ការកក់ចុងក្រោយ', en: 'Recent Booking' },
  techName: { km: 'ជាង វិច្ឆិកា', en: 'Mr. Vicheka' },
  techSpecialty: { km: 'ជំនាញជួសជុលម៉ាស៊ីនត្រជាក់', en: 'AC Repair Specialist' },
  statusOnWay: { km: 'កំពុងមកដល់', en: 'On the way' },
  timelineConfirmed: { km: 'បានបញ្ជាក់ការកក់', en: 'Booking Confirmed' },
  timelineConfirmedTime: { km: 'ថ្ងៃនេះ, 09:30 AM', en: 'Today, 09:30 AM' },
  timelineEnRoute: { km: 'ជាងកំពុងធ្វើដំណើរ', en: 'Technician is on the way' },
  timelineEnRouteDetail: { km: 'នឹងមកដល់ក្នុងរយៈពេល ១០ នាទី', en: 'Arriving in 10 minutes' },
  timelineCompleted: { km: 'ការងារត្រូវបានបញ្ចប់', en: 'Job Completed' },
  timelineCompletedPending: { km: 'រង់ចាំការបញ្ជាក់', en: 'Awaiting confirmation' },
  estimatedTotal: { km: 'តម្លៃសរុបប្រហាក់ប្រហែល', en: 'Estimated Total' },
  totalPrice: { km: '$18.00', en: '$18.00' },
  viewDetails: { km: 'មើលព័ត៌មានលម្អិត', en: 'View Details' },
  tipsTitle: { km: 'គន្លឹះថែទាំផ្ទះ', en: 'Home Care Tips' },
  tipsDesc: { km: 'តើលោកអ្នកដឹងទេថា ការលាងម៉ាស៊ីនត្រជាក់រាល់ ៦ខែម្តង ជួយសន្សំសំចៃអគ្គិសនីបានដល់ ២០%?', en: 'Did you know that cleaning your AC every 6 months can save up to 20% on electricity?' },
  readMore: { km: 'អានបន្ថែម', en: 'Read More' },
};

const CustomerDashboard = () => {
  const { lang } = useLanguage();
  const t = (key) => translations[key]?.[lang] || key;

  const services = [
    { icon: 'plumbing', labelKey: 'plumberLabel', priceKey: 'plumberPrice', link: '/select/plumber', accent: 'bg-blue-50 text-blue-600' },
    { icon: 'electrical_services', labelKey: 'electricianLabel', priceKey: 'electricianPrice', link: '/select/electrician', accent: 'bg-amber-50 text-amber-600' },
    { icon: 'ac_unit', labelKey: 'acLabel', priceKey: 'acPrice', link: '/select/ac', accent: 'bg-cyan-50 text-cyan-600' },
  ];

  return (
    <div className="animate-enter">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 md:pt-20 pb-12 md:pb-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1732395805034-e0bf859665e5?w=1400&h=700&fit=crop&auto=format&q=80)'
          }}
        ></div>
        <div className="absolute inset-0 bg-primary/10"></div>

        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-8">
            <div className="bg-primary/55 backdrop-blur-md rounded-2xl px-5 py-4 md:px-6 md:py-5 max-w-xl w-full">
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-3 leading-snug">
                {t('greeting')}
              </h1>
              <p className="text-base md:text-lg text-white leading-relaxed">
                {t('greetingQuestion')}
              </p>
            </div>
            <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg border border-white/30 shrink-0 w-full md:w-auto">
              <span className="material-symbols-outlined text-primary text-2xl" data-weight="fill">location_on</span>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-on-surface-variant tracking-wide uppercase mb-0.5">{t('currentLocation')}</p>
                <p className="text-sm font-semibold text-primary truncate">{t('locationAddress')}</p>
              </div>
            </div>
          </div>
          <div className="mt-8 md:mt-12 max-w-2xl">
            <div className="relative group">
              <div className="absolute inset-y-0 left-4 md:left-5 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-on-surface-variant">search</span>
              </div>
              <input
                className="w-full pl-12 md:pl-14 pr-28 md:pr-32 py-4 bg-white border-none rounded-2xl shadow-lg focus:ring-2 focus:ring-secondary/50 transition-all group-hover:shadow-xl outline-none text-base text-on-surface placeholder:text-on-surface-variant"
                placeholder={t('searchPlaceholder')}
                type="text"
              />
              <Link to="/technicians">
                <button className="absolute right-2 top-1/2 -translate-y-1/2 px-4 md:px-5 py-2 md:py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 transition-all whitespace-nowrap">
                  {t('searchButton')}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="container-custom py-10 md:pt-10 relative z-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="col-span-12 md:col-span-8 flex flex-col gap-8">
            <div className="flex justify-between items-center">
              <h2 className="text-xl md:text-2xl font-bold text-primary">{t('popularTitle')}</h2>
              <Link to="/services" className="text-primary text-sm font-semibold flex items-center gap-1 hover:underline">
                {t('viewAll')} <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              {services.map((svc, idx) => (
                <Link
                  key={idx}
                  to={svc.link}
                  className="group bg-white rounded-2xl p-5 md:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 border border-outline-variant/40 hover:border-primary/20 flex flex-col items-center text-center cursor-pointer"
                >
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${svc.accent} flex items-center justify-center mb-4 md:mb-5 group-hover:scale-110 transition-transform duration-200`}>
                    <span className="material-symbols-outlined text-3xl md:text-4xl" data-weight="fill">
                      {svc.icon}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-1 md:mb-2">{t(svc.labelKey)}</h3>
                  <p className="text-sm font-medium text-on-surface-variant">{t(svc.priceKey)}</p>
                </Link>
              ))}
            </div>

            {/* Emergency Banner */}
            <div className="relative rounded-3xl overflow-hidden min-h-[200px] md:min-h-[220px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1561400555-786780284b67?w=900&h=600&fit=crop&auto=format&q=80)'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary from-45% via-secondary/92 to-secondary/60"></div>

              <div className="relative p-6 md:p-8 lg:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-8 justify-between">
                <div className="flex flex-col items-start gap-4 md:gap-5 w-full md:max-w-lg">
                  <span className="px-3 py-1.5 bg-white/25 backdrop-blur-sm text-white rounded-full text-xs font-bold uppercase tracking-wider border border-white/40">
                    {t('emergencyBadge')}
                  </span>
                  <h2 className="text-xl md:text-3xl font-bold text-white leading-snug drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]">{t('emergencyTitle')}</h2>
                  <p className="text-white text-sm md:text-base leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">{t('emergencyDesc')}</p>
                  <Link to="/problem-detail">
                    <button className="mt-1 bg-white text-secondary px-5 md:px-8 py-3 md:py-4 rounded-xl text-sm md:text-lg font-bold shadow-lg hover:scale-105 hover:bg-secondary-fixed transition-all flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary">call</span>
                      {t('emergencyButton')}
                    </button>
                  </Link>
                </div>

                <div className="hidden md:block relative shrink-0">
                  <div className="w-28 h-28 md:w-40 md:h-40 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-white/10">
                    <img
                      src="https://images.unsplash.com/photo-1732395805034-e0bf859665e5?w=300&h=300&fit=crop&auto=format&q=80"
                      alt="Skilled Technician"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-green-500 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 border-2 border-white shadow-md">
                    <span className="material-symbols-outlined text-sm">verified</span> Ready
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-12 md:col-span-4 flex flex-col gap-8">
            <h2 className="text-xl md:text-2xl font-bold text-primary">{t('recentTitle')}</h2>
            <div className="bg-white rounded-3xl p-6 md:p-7 shadow-sm border border-outline-variant/40 flex flex-col gap-6 md:gap-7">
              <div className="flex justify-between items-start gap-3">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl overflow-hidden shrink-0">
                    <img
                      className="w-full h-full object-cover"
                      src="https://i.pravatar.cc/150?img=12"
                      alt={t('techName')}
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-on-surface">{t('techName')}</h4>
                    <p className="text-xs md:text-sm text-on-surface-variant">{t('techSpecialty')}</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 md:px-3 md:py-1.5 bg-secondary-fixed text-on-secondary-fixed rounded-full text-xs font-bold uppercase whitespace-nowrap">
                  {t('statusOnWay')}
                </span>
              </div>

              {/* Timeline */}
              <div className="relative pl-6 md:pl-7 flex flex-col gap-5 md:gap-6">
                <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-surface-container-highest"></div>
                <div className="relative flex items-center gap-3">
                  <div className="absolute -left-[27px] w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[10px] text-white">check</span>
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm font-semibold text-on-surface">{t('timelineConfirmed')}</p>
                    <p className="text-xs md:text-sm text-on-surface-variant">{t('timelineConfirmedTime')}</p>
                  </div>
                </div>
                <div className="relative flex items-center gap-3">
                  <div className="absolute -left-[27px] w-4 h-4 rounded-full bg-secondary border-4 border-secondary-fixed animate-pulse"></div>
                  <div className="flex-grow">
                    <p className="text-sm font-semibold text-on-surface">{t('timelineEnRoute')}</p>
                    <p className="text-xs md:text-sm text-on-surface-variant">{t('timelineEnRouteDetail')}</p>
                  </div>
                </div>
                <div className="relative flex items-center gap-3 opacity-50">
                  <div className="absolute -left-[27px] w-4 h-4 rounded-full bg-outline-variant"></div>
                  <div className="flex-grow">
                    <p className="text-sm font-semibold text-on-surface">{t('timelineCompleted')}</p>
                    <p className="text-xs md:text-sm text-on-surface-variant">{t('timelineCompletedPending')}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 md:pt-5 border-t border-outline-variant flex flex-col gap-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-on-surface-variant font-medium">{t('estimatedTotal')}</span>
                  <span className="font-bold text-primary text-base">{t('totalPrice')}</span>
                </div>
                <Link to="/booking/track">
                  <button className="w-full py-3 md:py-3.5 border-2 border-primary text-primary rounded-xl text-sm font-semibold hover:bg-primary/5 transition-all">
                    {t('viewDetails')}
                  </button>
                </Link>
              </div>
            </div>

            {/* Tips Card */}
            <div className="bg-primary-container rounded-3xl p-6 md:p-7 text-white">
              <span className="material-symbols-outlined text-secondary text-2xl md:text-3xl mb-3" data-weight="fill">lightbulb</span>
              <h4 className="text-lg md:text-xl font-bold mb-3">{t('tipsTitle')}</h4>
              <p className="text-on-primary-container text-sm md:text-base leading-relaxed mb-5">{t('tipsDesc')}</p>
              <Link to="/help" className="text-secondary text-sm font-semibold flex items-center gap-1 hover:underline">
                {t('readMore')} <span className="material-symbols-outlined text-sm">chevron_right</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerDashboard;