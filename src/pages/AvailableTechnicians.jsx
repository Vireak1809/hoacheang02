// pages/AvailableTechnicians.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AvailableTechnicians = () => {
  const [filter, setFilter] = useState('ជិតបំផុត');

  const technicians = [
    {
      id: 1,
      name: 'ចាន់ ធារ៉ា',
      specialty: 'ជាងជួសជុលម៉ាស៊ីនត្រជាក់',
      rating: 4.9,
      jobs: '១៥០+',
      distance: '១.២ គ.ម',
      eta: '១៥ នាទី',
      price: '$១០.០០',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrZ4Hm2qA74O1m50KELc0_l2XFZFyHPDYyqjEq05PNFLltu-IOesecFy1-G-jhLFLszSRzCp3pQliiTtOAZgQM7BWxhEmDi4-lVO1knzsyOxf6dNLzAbSViTgCG8m4xS-24PMOkf0QwWK3-kWHykLqHWms9p6A8NDzbYxWt2jmr1imBXTYHNIKgYuLzTKBAM2mU6OYSipsrLDPGDNeaL76gLTChRz1HSO5dpIxRVDW1ImF_memWA7Z_1dQoakzR8lIf6_E_UB_bb0'
    },
    {
      id: 2,
      name: 'ហេង វិសាល',
      specialty: 'ជាងអគ្គិសនី និងបណ្តាញទឹក',
      rating: 4.8,
      jobs: '៣២០+',
      distance: '២.៥ គ.ម',
      eta: '២០ នាទី',
      price: '$១២.០០',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAm2Xqu5B9wMVMb07Vtuxp-gEyAHhPJpGY_I6OSobU_BZr_5aCX-B_rs2vnMSr45gtFIM0AHAk-X2eKFgPTKOLp2mM8WIUgfT_BJcpuM7SuWmf-TqdIqaiOjWlF-2-sc-NMJizDSbEsJka4gUcQQQlvD-uSkyl01ni0iLdPf2fnMtwouiWVw11L9X09FVBleS6wxTU3lfzU8Hz_YA2lTMU2Vk1gdmwYFySDc-7rjJeUPI8fuw856a3fnLK0r2fS6Ie2OvUC0OUPAs'
    },
    {
      id: 3,
      name: 'សុខ តារា',
      specialty: 'ជាងទឹក និងបរិក្ខារបន្ទប់ទឹក',
      rating: 4.7,
      jobs: '៨៥+',
      distance: '០.៨ គ.ម',
      eta: '០៥ នាទី',
      price: '$៨.០០',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWBvUHNhze-mWDv9HxiC9UaeuzFFISXSN1A9M9aSQAharMt4LKm0UwKPQk9octzMBjlbpjTsr2JNc3vi9Do-AAxLT1HRKgsrwtNyO3MZ4BJ5F5GRtLVBYnpgMnGqGlqc3ADrTQVUZGJ5JrpE4NrcnLrj0mJObDM-ZUi_HT_CUqVKFtU1YFJAsLFbTXAkQ5BSXqPk9Fae4SOagdRjjO9HTzZlWHP4URbLjRLxeFnNGLMJ04z5AlY7nwi80lyXmPdHo99K9YouJ8kRQ'
    },
    {
      id: 4,
      name: 'កែវ វិបុល',
      specialty: 'ជាងឈើ និងគ្រឿងសង្ហារឹម',
      rating: 5.0,
      jobs: '៥០០+',
      distance: '៣.៨ គ.ម',
      eta: '៣០ នាទី',
      price: '$១៥.០០',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJkx6m2XjqZK3gzL7GaxPG1WXuolUiONgvPMISmpkvRVjVcgnl-GBBfJL9ZO5FfL4d4sijWlGxwf8tMNI6uIjC7ZpC0eZR7Yo9iQsGdQxoyqoNecfg-Kb5flGx_WIOepXzdQlcQG3ZqjHI8pkSrVTOq8hN8y4mSxRfNzJAu1NuDY4-xKhx8HP7gPWtA-Qzc5sH3rsLsygJ7wwDo0p8JbOkaHQOgTufyjPkBCwMqPr7C15iQnz_LTmIMsIesX_d3y9XzWR7m5w8TTc'
    }
  ];

  const filters = ['ជិតបំផុត', 'Rating ខ្ពស់', 'មកដល់លឿន', 'តម្លៃសមរម្យ'];

  return (
    <div className="container-custom py-6 md:py-10 animate-enter">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary">ជាងដែលទំនេរ និងនៅជិតអ្នក</h1>
          <p className="text-base text-on-surface-variant">ស្វែងរកជាងជំនាញដែលមានទំនុកចិត្តខ្ពស់</p>
        </div>
        <div className="flex items-center gap-2 text-primary font-bold bg-primary-container/10 px-4 py-2 rounded-lg">
          <span className="material-symbols-outlined">location_on</span>
          <span className="text-sm">បឹងកេងកង ១, ភ្នំពេញ</span>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-6 overflow-x-auto pb-2 no-scrollbar">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition whitespace-nowrap ${
              filter === f
                ? 'bg-primary text-white shadow-md'
                : 'bg-surface-container border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary'
            }`}
          >
            {f}
          </button>
        ))}
        <div className="flex-grow"></div>
        <button className="flex items-center gap-2 px-4 py-2 text-primary text-sm font-medium border border-primary/20 rounded-lg hover:bg-primary/5 transition">
          <span className="material-symbols-outlined text-sm">tune</span> តម្រងបន្ថែម
        </button>
      </div>

      {/* Technician Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {technicians.map((tech) => (
          <div key={tech.id} className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/30 card-hover flex flex-col md:flex-row gap-4">
            <div className="relative w-full md:w-32 h-32 flex-shrink-0">
              <img
                src={tech.image}
                alt={tech.name}
                className="w-full h-full object-cover rounded-lg shadow-sm"
              />
              <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-1 rounded-full border-2 border-white">
                <span className="material-symbols-outlined text-sm">verified</span>
              </div>
            </div>
            <div className="flex-grow space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-primary">{tech.name}</h3>
                  <p className="text-sm text-on-surface-variant">{tech.specialty}</p>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 bg-secondary-container/20 text-secondary rounded text-sm">
                  <span className="material-symbols-outlined text-sm">star</span>
                  <span className="font-bold">{tech.rating}</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 py-2 border-y border-outline-variant/20 text-sm">
                <div className="flex items-center gap-1 text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm">handyman</span> {tech.jobs}
                </div>
                <div className="flex items-center gap-1 text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm">distance</span> {tech.distance}
                </div>
                <div className="flex items-center gap-1 text-secondary font-bold">
                  <span className="material-symbols-outlined text-sm">schedule</span> {tech.eta}
                </div>
                <div className="flex items-center gap-1 text-primary font-bold">
                  <span className="material-symbols-outlined text-sm">payments</span> {tech.price}
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <Link to={`/technician/${tech.id}`} className="flex-1 py-2.5 text-center text-primary border border-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition">
                  មើលប្រវត្តិរូប
                </Link>
                <Link to="/booking/confirm" className="flex-1 py-2.5 text-center bg-secondary text-white rounded-lg text-sm font-medium hover:opacity-90 transition shadow-md">
                  ជ្រើសរើសជាងនេះ
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="mt-8 flex justify-center">
        <button className="flex items-center gap-2 px-8 py-3 bg-surface-container border border-outline-variant text-primary font-bold rounded-lg hover:bg-surface-container-high transition">
          បង្ហាញជាងបន្ថែមទៀត <span className="material-symbols-outlined text-sm">expand_more</span>
        </button>
      </div>
    </div>
  );
};

export default AvailableTechnicians;