// src/pages/SelectServiceElectrician.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  pageTitle: { km: 'ជ្រើសរើសសេវាកម្ម', en: 'Select Service' },
  tabPlumber: { km: 'ជាងទឹក', en: 'Plumber' },
  tabElectrician: { km: 'ជាងភ្លើង', en: 'Electrician' },
  tabAC: { km: 'ម៉ាស៊ីនត្រជាក់', en: 'Air Conditioner' },
  headingProblems: { km: 'បញ្ហាអគ្គិសនីដែលអ្នកជួបប្រទះ', en: 'Electrical Problems You Are Experiencing' },
  problemPowerOff: { km: 'ភ្លើងដាច់', en: 'Power Outage' },
  problemBreaker: { km: 'Breaker លោត', en: 'Tripped Breaker' },
  problemOutlet: { km: 'ព្រីភ្លើងខូច', en: 'Broken Outlet' },
  problemSwitch: { km: 'កុងតាក់ខូច', en: 'Faulty Switch' },
  problemWiring: { km: 'ខ្សែភ្លើងមានបញ្ហា', en: 'Wiring Issues' },
  problemOther: { km: 'ផ្សេងៗ', en: 'Other' },
  optionalDescriptionLabel: { km: 'រៀបរាប់ពីបញ្ហាបន្ថែម (ស្រេចចិត្ត)', en: 'Describe Additional Problems (Optional)' },
  optionalDescriptionPlaceholder: { km: 'សូមពិពណ៌នាបញ្ហាភ្លើងដែលអ្នកកំពុងជួបប្រទះ...', en: 'Please describe the electrical issue you are experiencing...' },
  urgencyTitle: { km: 'កម្រិតបន្ទាន់', en: 'Urgency Level' },
  urgencyRegularLabel: { km: 'ធម្មតា', en: 'Normal' },
  urgencyRegularTime: { km: '2-4 ម៉ោង', en: '2-4 hours' },
  urgencyEmergencyLabel: { km: 'បន្ទាន់', en: 'Emergency' },
  urgencyEmergencyTime: { km: 'ភ្លាមៗ', en: 'Immediately' },
  urgencyEmergencyExtra: { km: 'គិតថ្លៃបន្ថែម', en: 'Extra fees apply' },
  urgencyScheduledLabel: { km: 'កំណត់ពេល', en: 'Scheduled' },
  urgencyScheduledTime: { km: 'ជ្រើសថ្ងៃ', en: 'Select day' },
  serviceTypeLabel: { km: 'ប្រភេទសេវា', en: 'Service Type' },
  serviceTypeValue: { km: 'ជាងភ្លើង', en: 'Electrician' },
  basePriceLabel: { km: 'តម្លៃមូលដ្ឋាន', en: 'Base Price' },
  continueButton: { km: 'បន្ត', en: 'Continue' },
  note: { km: 'កក់ទុកឥឡូវ ដើម្បីជួបអ្នកបច្ចេកទេស', en: 'Book now to meet a technician' },
};

const SelectServiceElectrician = () => {
  const { lang } = useLanguage();
  const t = (key) => translations[key]?.[lang] || key;
  const [selectedProblem, setSelectedProblem] = useState('power_off');
  const [urgency, setUrgency] = useState('regular');

  const problems = [
    { id: 'power_off', icon: 'power_off', labelKey: 'problemPowerOff' },
    { id: 'breaker', icon: 'electrical_services', labelKey: 'problemBreaker' },
    { id: 'outlet', icon: 'power', labelKey: 'problemOutlet' },
    { id: 'switch', icon: 'toggle_on', labelKey: 'problemSwitch' },
    { id: 'wiring', icon: 'cable', labelKey: 'problemWiring' },
    { id: 'other', icon: 'more_horiz', labelKey: 'problemOther' },
  ];

  const urgencyOptions = [
    { id: 'regular', labelKey: 'urgencyRegularLabel', timeKey: 'urgencyRegularTime' },
    { id: 'emergency', labelKey: 'urgencyEmergencyLabel', timeKey: 'urgencyEmergencyTime', extraKey: 'urgencyEmergencyExtra' },
    { id: 'scheduled', labelKey: 'urgencyScheduledLabel', timeKey: 'urgencyScheduledTime' },
  ];

  const tabLinks = [
    { to: '/select/plumber', icon: 'water_drop', labelKey: 'tabPlumber' },
    { to: '/select/electrician', icon: 'bolt', labelKey: 'tabElectrician', active: true },
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8">
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
        </div>

        <div className="lg:col-span-4">
          <div className="bg-surface-container rounded-2xl p-6 shadow-sm border border-outline-variant sticky top-24">
            <h3 className="text-2xl font-bold text-primary mb-4">{t('urgencyTitle')}</h3>
            <div className="space-y-3 mb-6">
              {urgencyOptions.map((opt) => (
                <label
                  key={opt.id}
                  className={`flex items-center justify-between p-4 bg-white rounded-xl border cursor-pointer hover:shadow-sm transition ${
                    urgency === opt.id
                      ? opt.id === 'emergency'
                        ? 'border-secondary bg-secondary-container/10'
                        : 'border-primary bg-primary-container/5'
                      : 'border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      checked={urgency === opt.id}
                      className={opt.id === 'emergency' ? 'text-secondary focus:ring-secondary' : 'text-primary focus:ring-primary'}
                      name="urgency"
                      type="radio"
                      value={opt.id}
                      onChange={() => setUrgency(opt.id)}
                    />
                    <div>
                      <span className={`text-base ${opt.id === 'emergency' ? 'font-bold text-secondary' : ''}`}>
                        {t(opt.labelKey)}
                      </span>
                      {opt.extraKey && <span className="text-xs text-secondary/70 block">{t(opt.extraKey)}</span>}
                    </div>
                  </div>
                  <span className={`text-sm ${opt.id === 'emergency' ? 'font-bold text-secondary' : 'text-on-surface-variant'}`}>
                    {t(opt.timeKey)}
                  </span>
                </label>
              ))}
            </div>

            <hr className="border-outline-variant mb-4" />
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant">{t('serviceTypeLabel')}</span>
                <span className="font-bold">{t('serviceTypeValue')}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant">{t('basePriceLabel')}</span>
                <span className="font-bold">$5.00</span>
              </div>
            </div>

            <Link to="/problem-detail">
              <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:opacity-90 transition shadow-md">
                {t('continueButton')} <span className="material-symbols-outlined align-middle">arrow_forward</span>
              </button>
            </Link>
            <p className="text-center text-sm text-on-surface-variant mt-3 italic">{t('note')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectServiceElectrician;