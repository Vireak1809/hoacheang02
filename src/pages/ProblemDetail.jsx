// src/pages/ProblemDetail.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  pageTitle: { km: 'ពិពណ៌នាបញ្ហា', en: 'Describe the Problem' },
  pageSubtitle: { km: 'សូមផ្តល់ព័ត៌មានបន្ថែមអំពីបញ្ហារបស់អ្នក', en: 'Please provide additional information about your issue' },
  serviceName: { km: 'សេវាកម្មជួសជុលទុយោទឹក', en: 'Plumbing Repair Service' },
  servicePrice: { km: 'តម្លៃចាប់ពី: $15.00', en: 'Starting from: $15.00' },
  changeService: { km: 'ប្តូរ', en: 'Change' },
  problemTypeLabel: { km: 'ប្រភេទនៃបញ្ហា', en: 'Problem Type' },
  problemTypePlaceholder: { km: 'ជ្រើសរើសប្រភេទបញ្ហា', en: 'Select problem type' },
  problemTypeLeak: { km: 'លេចជ្រាបទឹក', en: 'Water leak' },
  problemTypeClogged: { km: 'ស្ទះទុយោ', en: 'Clogged pipe' },
  problemTypeInstall: { km: 'ដំឡើងឧបករណ៍ថ្មី', en: 'Install new equipment' },
  problemTypeOther: { km: 'ផ្សេងៗ', en: 'Other' },
  descriptionLabel: { km: 'សូមពិពណ៌នាបញ្ហា', en: 'Please describe the problem' },
  descriptionPlaceholder: { km: 'តើមានបញ្ហាអ្វីកើតឡើង?...', en: 'What issue is happening?...' },
  uploadLabel: { km: 'រូបភាព ឬ វីដេអូ (ស្រេចចិត្ត)', en: 'Photo or Video (optional)' },
  uploadText: { km: 'បញ្ចូលរូបភាព ឬ វីដេអូ', en: 'Upload image or video' },
  uploadMaxSize: { km: 'ទំហំអតិបរមា 20MB', en: 'Max size 20MB' },
  fileLabel: { km: 'ឯកសារ:', en: 'File:' },
  stepService: { km: 'សេវា', en: 'Service' },
  stepProblem: { km: 'បញ្ហា', en: 'Problem' },
  stepLocation: { km: 'ទីតាំង', en: 'Location' },
  stepConfirm: { km: 'បញ្ជាក់', en: 'Confirm' },
  continueButton: { km: 'បន្តទៅកំណត់ទីតាំង', en: 'Continue to Set Location' },
  cancelButton: { km: 'បោះបង់', en: 'Cancel' },
};

const ProblemDetail = () => {
  const { lang } = useLanguage();
  const t = (key) => translations[key]?.[lang] || key;
  const [file, setFile] = useState(null);

  const problemOptions = [
    { value: '', labelKey: 'problemTypePlaceholder' },
    { value: 'leak', labelKey: 'problemTypeLeak' },
    { value: 'clogged', labelKey: 'problemTypeClogged' },
    { value: 'install', labelKey: 'problemTypeInstall' },
    { value: 'other', labelKey: 'problemTypeOther' },
  ];

  const steps = [
    { num: 1, labelKey: 'stepService', active: true },
    { num: 2, labelKey: 'stepProblem', active: true, current: true },
    { num: 3, labelKey: 'stepLocation', active: false },
    { num: 4, labelKey: 'stepConfirm', active: false },
  ];

  return (
    <div className="container-custom py-6 md:py-10 animate-enter">
      <div className="text-center md:text-left mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">{t('pageTitle')}</h1>
        <p className="text-base text-on-surface-variant">{t('pageSubtitle')}</p>
      </div>

      {/* Service Summary */}
      <div className="bg-surface-container-low border border-outline-variant rounded-xl p-4 mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="w-16 h-16 bg-primary-container rounded-lg flex items-center justify-center text-white shrink-0">
          <span className="material-symbols-outlined text-4xl">plumbing</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary">{t('serviceName')}</h3>
          <p className="text-sm text-on-surface-variant">{t('servicePrice')}</p>
        </div>
        <Link to="/select/plumber" className="sm:ml-auto text-primary font-bold text-sm underline">
          {t('changeService')}
        </Link>
      </div>

      {/* Form */}
      <div className="bg-surface-container-lowest shadow-sm rounded-xl p-6 md:p-8 space-y-6">
        <div>
          <label className="block text-sm font-bold text-on-surface mb-2">{t('problemTypeLabel')}</label>
          <select className="w-full h-14 px-4 border-2 border-outline-variant rounded-lg focus:border-primary focus:ring-0 bg-transparent text-base appearance-none">
            {problemOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.value === '' ? t(opt.labelKey) : t(opt.labelKey)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold text-on-surface mb-2">{t('descriptionLabel')}</label>
          <textarea
            className="w-full p-4 border-2 border-outline-variant rounded-lg focus:border-primary focus:ring-0 text-base"
            placeholder={t('descriptionPlaceholder')}
            rows="4"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-bold text-on-surface mb-2">{t('uploadLabel')}</label>
          <div
            className="border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer hover:bg-surface-container-low transition group"
            onClick={() => document.getElementById('fileUpload').click()}
          >
            <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <span className="material-symbols-outlined text-primary text-3xl">cloud_upload</span>
            </div>
            <p className="text-sm font-medium text-on-surface">{t('uploadText')}</p>
            <p className="text-xs text-on-surface-variant mt-1">{t('uploadMaxSize')}</p>
            <input
              className="hidden"
              id="fileUpload"
              multiple
              type="file"
              accept="image/*,video/*"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          {file && (
            <p className="text-sm text-primary mt-2">{t('fileLabel')} {file.name}</p>
          )}
        </div>

        {/* Stepper */}
        <div className="py-4 border-t border-b border-outline-variant">
          <div className="flex items-center justify-between max-w-md mx-auto relative">
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-surface-variant -translate-y-1/2 -z-10"></div>
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col items-center gap-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                  step.current
                    ? 'w-10 h-10 bg-secondary border-4 border-secondary-container text-white shadow-lg'
                    : step.active
                    ? 'bg-primary text-white'
                    : 'bg-surface-dim text-on-surface opacity-40'
                }`}>
                  {step.active && !step.current ? (
                    <span className="material-symbols-outlined text-sm">check</span>
                  ) : (
                    <span className="font-bold">{step.num}</span>
                  )}
                </div>
                <span className={`text-[10px] font-bold ${
                  step.current ? 'text-secondary' : step.active ? 'text-primary' : 'opacity-40'
                }`}>{t(step.labelKey)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link to="/map-location" className="flex-1 bg-primary text-white py-4 rounded-xl font-bold text-center hover:opacity-90 transition flex items-center justify-center gap-2">
            {t('continueButton')} <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
          <button className="px-6 h-14 border-2 border-outline-variant text-on-surface-variant rounded-xl font-medium hover:bg-surface-container-low transition">
            {t('cancelButton')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProblemDetail;