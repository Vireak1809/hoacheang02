// src/pages/SelectServicePlumber.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  pageTitle: { km: 'ជ្រើសរើសសេវាកម្ម', en: 'Select Service' },
  tabPlumber: { km: 'ជាងទឹក', en: 'Plumber' },
  tabElectrician: { km: 'ជាងភ្លើង', en: 'Electrician' },
  tabAC: { km: 'ម៉ាស៊ីនត្រជាក់', en: 'Air Conditioner' },
  headingProblems: { km: 'បញ្ហាដែលអ្នកជួបប្រទះ', en: 'Problems You Are Experiencing' },
  problemLeak: { km: 'លេចធ្លាយ', en: 'Water Leak' },
  problemClog: { km: 'បង្គន់ស្ទះ', en: 'Toilet Clog' },
  problemFaucet: { km: 'ក្បាលទឹកខូច', en: 'Faucet Broken' },
  problemPump: { km: 'ម៉ាស៊ីនបូមខូច', en: 'Pump Broken' },
  problemLowWater: { km: 'ទឹកមិនឡើង', en: 'No Water / Low Pressure' },
  problemOther: { km: 'ផ្សេងៗ', en: 'Other' },
  optionalDescriptionLabel: { km: 'រៀបរាប់ពីបញ្ហាបន្ថែម (ស្រេចចិត្ត)', en: 'Describe Additional Issues (Optional)' },
  optionalDescriptionPlaceholder: { km: 'សូមពិពណ៌នាបញ្ហារបស់អ្នក...', en: 'Please describe your problem...' },
  continueButton: { km: 'បន្ត', en: 'Continue' },
};

const SelectServicePlumber = () => {
  const { lang } = useLanguage();
  const t = (key) => translations[key]?.[lang] || key;
  const [selectedProblem, setSelectedProblem] = useState('leak');

  const problems = [
    { id: 'leak', icon: 'humidity_high', labelKey: 'problemLeak' },
    { id: 'clog', icon: 'tablet', labelKey: 'problemClog' },
    { id: 'faucet', icon: 'faucet', labelKey: 'problemFaucet' },
    { id: 'pump', icon: 'mode_fan', labelKey: 'problemPump' },
    { id: 'low_water', icon: 'watch_off', labelKey: 'problemLowWater' },
    { id: 'other', icon: 'more_horiz', labelKey: 'problemOther' },
  ];

  const tabLinks = [
    { to: '/select/plumber', icon: 'water_drop', labelKey: 'tabPlumber', active: true },
    { to: '/select/electrician', icon: 'bolt', labelKey: 'tabElectrician' },
    { to: '/select/ac', icon: 'ac_unit', labelKey: 'tabAC' },
  ];

  return (
    <div className="container-custom py-6 md:py-10 animate-enter">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">{t('pageTitle')}</h1>
        <div className="flex items-center justify-center gap-2">
          <div className="w-8 h-1 bg-primary rounded-full"></div>
          <div className="w-8 h-1 bg-outline-variant rounded-full"></div>
          <div className="w-8 h-1 bg-outline-variant rounded-full"></div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center justify-start md:justify-center overflow-x-auto pb-4 gap-3 custom-scrollbar mb-8">
        {tabLinks.map((tab) => (
          <Link
            key={tab.to}
            to={tab.to}
            className={`flex items-center gap-2 whitespace-nowrap px-6 py-3 rounded-xl transition ${
              tab.active
                ? 'bg-primary text-white shadow-md'
                : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
            }`}
          >
            <span className="material-symbols-outlined">{tab.icon}</span>
            <span className="text-lg font-semibold">{t(tab.labelKey)}</span>
          </Link>
        ))}
      </div>

      {/* Full-width content: problem selection + textarea + continue button */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-on-surface mb-4">{t('headingProblems')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {problems.map((p) => (
            <label key={p.id} className="group relative cursor-pointer service-grid-item">
              <input
                checked={selectedProblem === p.id}
                className="peer sr-only"
                name="problem"
                type="radio"
                value={p.id}
                onChange={() => setSelectedProblem(p.id)}
              />
              <div className={`h-full border-2 rounded-xl p-4 shadow-sm transition flex flex-col items-center text-center gap-2 group-hover:shadow-md ${
                selectedProblem === p.id
                  ? 'border-primary bg-primary-fixed/20'
                  : 'border-transparent bg-white'
              }`}>
                <div className="w-16 h-16 bg-surface-container-low rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <span className="material-symbols-outlined text-primary text-4xl">{p.icon}</span>
                </div>
                <p className="text-sm font-medium text-on-surface">{t(p.labelKey)}</p>
                <span className={`material-symbols-outlined absolute top-2 right-2 text-primary transition-opacity ${
                  selectedProblem === p.id ? 'opacity-100' : 'opacity-0'
                }`}>check_circle</span>
              </div>
            </label>
          ))}
        </div>

        <div className="mt-6">
          <label className="block text-sm font-bold text-on-surface mb-2">{t('optionalDescriptionLabel')}</label>
          <textarea
            className="w-full bg-white border border-outline-variant rounded-xl p-4 focus:border-primary focus:ring-1 focus:ring-primary transition min-h-[100px] text-base"
            placeholder={t('optionalDescriptionPlaceholder')}
          ></textarea>
        </div>

        {/* Continue button placed directly below the optional description */}
        <div className="mt-6">
          <Link to="/problem-detail">
            <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:opacity-90 transition shadow-md">
              {t('continueButton')} <span className="material-symbols-outlined align-middle">arrow_forward</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SelectServicePlumber;