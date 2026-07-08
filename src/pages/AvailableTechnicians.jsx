// pages/AvailableTechnicians.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  headerTitle: { km: 'ជាងដែលទំនេរ និងនៅជិតអ្នក', en: 'Available & Nearby Technicians' },
  headerSubtitle: { km: 'ស្វែងរកជាងជំនាញដែលមានទំនុកចិត្តខ្ពស់', en: 'Find highly trusted skilled technicians' },
  locationLabel: { km: 'បឹងកេងកង ១, ភ្នំពេញ', en: 'Boeung Keng Kang 1, Phnom Penh' },
  filterNearest: { km: 'ជិតបំផុត', en: 'Nearest' },
  filterHighestRating: { km: 'Rating ខ្ពស់', en: 'Highest Rating' },
  filterFastestArrival: { km: 'មកដល់លឿន', en: 'Fastest Arrival' },
  filterBestPrice: { km: 'តម្លៃសមរម្យ', en: 'Best Price' },
  moreFilters: { km: 'តម្រងបន្ថែម', en: 'More Filters' },
  viewProfile: { km: 'មើលប្រវត្តិរូប', en: 'View Profile' },
  selectTechnician: { km: 'ជ្រើសរើសជាងនេះ', en: 'Select This Tech' },
  loadMore: { km: 'បង្ហាញជាងបន្ថែមទៀត', en: 'Show More Technicians' },
};

const techniciansData = [
  {
    id: 1,
    name: { km: 'ចាន់ ធារ៉ា', en: 'Chan Theara' },
    specialty: { km: 'ជាងជួសជុលម៉ាស៊ីនត្រជាក់', en: 'AC Repair Technician' },
    rating: 4.9,
    jobs: { km: '១៥០+', en: '150+' },
    distance: { km: '១.២ គ.ម', en: '1.2 km' },
    eta: { km: '១៥ នាទី', en: '15 min' },
    price: { km: '$១០.០០', en: '$10.00' },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrZ4Hm2qA74O1m50KELc0_l2XFZFyHPDYyqjEq05PNFLltu-IOesecFy1-G-jhLFLszSRzCp3pQliiTtOAZgQM7BWxhEmDi4-lVO1knzsyOxf6dNLzAbSViTgCG8m4xS-24PMOkf0QwWK3-kWHykLqHWms9p6A8NDzbYxWt2jmr1imBXTYHNIKgYuLzTKBAM2mU6OYSipsrLDPGDNeaL76gLTChRz1HSO5dpIxRVDW1ImF_memWA7Z_1dQoakzR8lIf6_E_UB_bb0'
  },
  {
    id: 2,
    name: { km: 'ហេង វិសាល', en: 'Heng Visal' },
    specialty: { km: 'ជាងអគ្គិសនី និងបណ្តាញទឹក', en: 'Electrical & Plumbing Technician' },
    rating: 4.8,
    jobs: { km: '៣២០+', en: '320+' },
    distance: { km: '២.៥ គ.ម', en: '2.5 km' },
    eta: { km: '២០ នាទី', en: '20 min' },
    price: { km: '$១២.០០', en: '$12.00' },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAm2Xqu5B9wMVMb07Vtuxp-gEyAHhPJpGY_I6OSobU_BZr_5aCX-B_rs2vnMSr45gtFIM0AHAk-X2eKFgPTKOLp2mM8WIUgfT_BJcpuM7SuWmf-TqdIqaiOjWlF-2-sc-NMJizDSbEsJka4gUcQQQlvD-uSkyl01ni0iLdPf2fnMtwouiWVw11L9X09FVBleS6wxTU3lfzU8Hz_YA2lTMU2Vk1gdmwYFySDc-7rjJeUPI8fuw856a3fnLK0r2fS6Ie2OvUC0OUPAs'
  },
  {
    id: 3,
    name: { km: 'សុខ តារា', en: 'Sok Dara' },
    specialty: { km: 'ជាងទឹក និងបរិក្ខារបន្ទប់ទឹក', en: 'Plumber & Bathroom Fittings' },
    rating: 4.7,
    jobs: { km: '៨៥+', en: '85+' },
    distance: { km: '០.៨ គ.ម', en: '0.8 km' },
    eta: { km: '០៥ នាទី', en: '5 min' },
    price: { km: '$៨.០០', en: '$8.00' },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWBvUHNhze-mWDv9HxiC9UaeuzFFISXSN1A9M9aSQAharMt4LKm0UwKPQk9octzMBjlbpjTsr2JNc3vi9Do-AAxLT1HRKgsrwtNyO3MZ4BJ5F5GRtLVBYnpgMnGqGlqc3ADrTQVUZGJ5JrpE4NrcnLrj0mJObDM-ZUi_HT_CUqVKFtU1YFJAsLFbTXAkQ5BSXqPk9Fae4SOagdRjjO9HTzZlWHP4URbLjRLxeFnNGLMJ04z5AlY7nwi80lyXmPdHo99K9YouJ8kRQ'
  },
  {
    id: 4,
    name: { km: 'កែវ វិបុល', en: 'Keo Vibol' },
    specialty: { km: 'ជាងឈើ និងគ្រឿងសង្ហារឹម', en: 'Carpenter & Furniture' },
    rating: 5.0,
    jobs: { km: '៥០០+', en: '500+' },
    distance: { km: '៣.៨ គ.ម', en: '3.8 km' },
    eta: { km: '៣០ នាទី', en: '30 min' },
    price: { km: '$១៥.០០', en: '$15.00' },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJkx6m2XjqZK3gzL7GaxPG1WXuolUiONgvPMISmpkvRVjVcgnl-GBBfJL9ZO5FfL4d4sijWlGxwf8tMNI6uIjC7ZpC0eZR7Yo9iQsGdQxoyqoNecfg-Kb5flGx_WIOepXzdQlcQG3ZqjHI8pkSrVTOq8hN8y4mSxRfNzJAu1NuDY4-xKhx8HP7gPWtA-Qzc5sH3rsLsygJ7wwDo0p8JbOkaHQOgTufyjPkBCwMqPr7C15iQnz_LTmIMsIesX_d3y9XzWR7m5w8TTc'
  }
];

const AvailableTechnicians = () => {
  const { lang } = useLanguage();
  const t = (key) => translations[key]?.[lang] || key;
  const [filter, setFilter] = useState('nearest'); // use key instead of Khmer text

  const filterKeys = ['nearest', 'highestRating', 'fastestArrival', 'bestPrice'];

  return (
    <div className="container-custom py-6 md:py-10 animate-enter">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary">{t('headerTitle')}</h1>
          <p className="text-base text-on-surface-variant">{t('headerSubtitle')}</p>
        </div>
        <div className="flex items-center gap-2 text-primary font-bold bg-primary-container/10 px-4 py-2 rounded-lg">
          <span className="material-symbols-outlined">location_on</span>
          <span className="text-sm">{t('locationLabel')}</span>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-6 overflow-x-auto pb-2 no-scrollbar">
        {filterKeys.map((fKey) => (
          <button
            key={fKey}
            onClick={() => setFilter(fKey)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition whitespace-nowrap ${
              filter === fKey
                ? 'bg-primary text-white shadow-md'
                : 'bg-surface-container border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary'
            }`}
          >
            {t(`filter${fKey.charAt(0).toUpperCase() + fKey.slice(1)}`)} {/* e.g., filterNearest */}
          </button>
        ))}
        <div className="flex-grow"></div>
        <button className="flex items-center gap-2 px-4 py-2 text-primary text-sm font-medium border border-primary/20 rounded-lg hover:bg-primary/5 transition">
          <span className="material-symbols-outlined text-sm">tune</span> {t('moreFilters')}
        </button>
      </div>

      {/* Technician Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {techniciansData.map((tech) => (
          <div key={tech.id} className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/30 card-hover flex flex-col md:flex-row gap-4">
            <div className="relative w-full md:w-32 h-32 flex-shrink-0">
              <img
                src={tech.image}
                alt={tech.name[lang]}
                className="w-full h-full object-cover rounded-lg shadow-sm"
              />
              <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-1 rounded-full border-2 border-white">
                <span className="material-symbols-outlined text-sm">verified</span>
              </div>
            </div>
            <div className="flex-grow space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-primary">{tech.name[lang]}</h3>
                  <p className="text-sm text-on-surface-variant">{tech.specialty[lang]}</p>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 bg-secondary-container/20 text-secondary rounded text-sm">
                  <span className="material-symbols-outlined text-sm">star</span>
                  <span className="font-bold">{tech.rating}</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 py-2 border-y border-outline-variant/20 text-sm">
                <div className="flex items-center gap-1 text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm">handyman</span> {tech.jobs[lang]}
                </div>
                <div className="flex items-center gap-1 text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm">distance</span> {tech.distance[lang]}
                </div>
                <div className="flex items-center gap-1 text-secondary font-bold">
                  <span className="material-symbols-outlined text-sm">schedule</span> {tech.eta[lang]}
                </div>
                <div className="flex items-center gap-1 text-primary font-bold">
                  <span className="material-symbols-outlined text-sm">payments</span> {tech.price[lang]}
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <Link to={`/technician/${tech.id}`} className="flex-1 py-2.5 text-center text-primary border border-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition">
                  {t('viewProfile')}
                </Link>
                <Link to="/booking/confirm" className="flex-1 py-2.5 text-center bg-secondary text-white rounded-lg text-sm font-medium hover:opacity-90 transition shadow-md">
                  {t('selectTechnician')}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="mt-8 flex justify-center">
        <button className="flex items-center gap-2 px-8 py-3 bg-surface-container border border-outline-variant text-primary font-bold rounded-lg hover:bg-surface-container-high transition">
          {t('loadMore')} <span className="material-symbols-outlined text-sm">expand_more</span>
        </button>
      </div>
    </div>
  );
};

export default AvailableTechnicians;