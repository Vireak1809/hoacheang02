// src/pages/MapSelectLocation.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  pageTitle: { km: 'កំណត់ទីតាំងរបស់អ្នក', en: 'Set Your Location' },
  pageSubtitle: { km: 'សូមបញ្ជាក់ទីតាំងដែលត្រូវការជាងមកផ្ដល់សេវា', en: 'Please specify the location where the technician should come' },
  locationInfoTitle: { km: 'ព័ត៌មានទីតាំង', en: 'Location Information' },
  buildingName: { km: 'ឈ្មោះបុរី / អគារ', en: 'Borey / Building Name' },
  buildingNamePlaceholder: { km: 'បុរី ប៉េង ហួត', en: 'Peng Huot Borey' },
  houseNumber: { km: 'លេខផ្ទះ', en: 'House Number' },
  houseNumberPlaceholder: { km: 'A-12', en: 'A-12' },
  streetNumber: { km: 'លេខផ្លូវ', en: 'Street Number' },
  streetNumberPlaceholder: { km: 'ផ្លូវ ២៧១', en: 'Street 271' },
  district: { km: 'ខណ្ឌ / សង្កាត់', en: 'District / Commune' },
  // district options are proper names; we can keep them as they are but need bilingual
  districtOption1: { km: 'បឹងកេងកងទី ១', en: 'Boeung Keng Kang 1' },
  districtOption2: { km: 'ច្បារអំពៅ', en: 'Chbar Ampov' },
  districtOption3: { km: 'ទួលគោក', en: 'Tuol Kouk' },
  districtOption4: { km: 'សែនសុខ', en: 'Sen Sok' },
  province: { km: 'រាជធានី / ខេត្ត', en: 'City / Province' },
  provinceValue: { km: 'ភ្នំពេញ', en: 'Phnom Penh' },
  landmark: { km: 'ចំណុចសម្គាល់', en: 'Landmark' },
  landmarkPlaceholder: { km: 'នៅជិតទូរ ATM ធនាគារ ABA', en: 'Near ABA Bank ATM' },
  phoneLabel: { km: 'លេខទូរស័ព្ទ', en: 'Phone Number' },
  phonePlaceholder: { km: '012 345 678', en: '012 345 678' },
  saveAs: { km: 'រក្សាទុកទីតាំងជា', en: 'Save location as' },
  home: { km: 'ផ្ទះ', en: 'Home' },
  work: { km: 'ការិយាល័យ', en: 'Work' },
  other: { km: 'ផ្សេងៗ', en: 'Other' },
  confirmButton: { km: 'បញ្ជាក់ទីតាំង', en: 'Confirm Location' },
  searchPlaceholder: { km: 'ស្វែងរកទីតាំង...', en: 'Search location...' },
  selectedLocation: { km: 'ទីតាំងដែលបានជ្រើស៖ បុរីប៉េងហួត បឹងស្នោរ', en: 'Selected: Peng Huot Borey, Boeung Snor' },
};

const MapSelectLocation = () => {
  const { lang } = useLanguage();
  const t = (key) => translations[key]?.[lang] || key;
  const [locationType, setLocationType] = useState('home');

  const locationTypes = [
    { id: 'home', icon: 'home', labelKey: 'home' },
    { id: 'work', icon: 'work', labelKey: 'work' },
    { id: 'other', icon: 'more_horiz', labelKey: 'other' },
  ];

  const districtOptions = [
    { key: 'districtOption1' },
    { key: 'districtOption2' },
    { key: 'districtOption3' },
    { key: 'districtOption4' },
  ];

  return (
    <div className="container-custom py-6 md:py-10 animate-enter">
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">{t('pageTitle')}</h1>
        <p className="text-base text-on-surface-variant">{t('pageSubtitle')}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Form */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-2xl shadow-sm border border-outline-variant p-6">
            <h2 className="text-2xl font-bold text-primary flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-secondary">location_on</span> {t('locationInfoTitle')}
            </h2>
            <form className="space-y-4">
              <div>
                <label className="text-sm text-on-surface">{t('buildingName')}</label>
                <input className="input-field" placeholder={t('buildingNamePlaceholder')} type="text" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-on-surface">{t('houseNumber')}</label>
                  <input className="input-field" placeholder={t('houseNumberPlaceholder')} type="text" />
                </div>
                <div>
                  <label className="text-sm text-on-surface">{t('streetNumber')}</label>
                  <input className="input-field" placeholder={t('streetNumberPlaceholder')} type="text" />
                </div>
              </div>
              <div>
                <label className="text-sm text-on-surface">{t('district')}</label>
                <select className="input-field appearance-none">
                  {districtOptions.map((d, idx) => (
                    <option key={idx}>{t(d.key)}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm text-on-surface">{t('province')}</label>
                <input className="input-field bg-surface-container text-on-surface-variant font-medium cursor-not-allowed" readOnly value={t('provinceValue')} type="text" />
              </div>
              <div>
                <label className="text-sm text-on-surface">{t('landmark')}</label>
                <input className="input-field" placeholder={t('landmarkPlaceholder')} type="text" />
              </div>
              <div>
                <label className="text-sm text-on-surface">{t('phoneLabel')}</label>
                <input className="input-field" placeholder={t('phonePlaceholder')} type="tel" />
              </div>

              <div>
                <label className="text-sm text-on-surface block mb-2">{t('saveAs')}</label>
                <div className="flex gap-2 flex-wrap">
                  {locationTypes.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setLocationType(type.id)}
                      className={`flex-1 py-2 px-3 border rounded-lg text-sm font-medium flex items-center justify-center gap-1 transition ${
                        locationType === type.id
                          ? 'border-primary bg-primary-container text-primary font-bold'
                          : 'border-outline-variant text-on-surface-variant'
                      }`}
                    >
                      <span className="material-symbols-outlined text-sm">{type.icon}</span>
                      {t(type.labelKey)}
                    </button>
                  ))}
                </div>
              </div>

              <Link to="/technicians">
                <button className="w-full bg-primary hover:opacity-90 text-white py-3.5 rounded-xl font-bold text-center block transition shadow-lg">
                  {t('confirmButton')}
                </button>
              </Link>
            </form>
          </div>
        </div>

        {/* Right: Map */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl shadow-sm border border-outline-variant overflow-hidden h-full min-h-[400px] relative">
            <div className="absolute inset-0 bg-cover bg-center" style={{
              backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuBvHgLU1-Ti5LzfAZL_beg_CjI8N1dPMxcliFGQvhBaLZwaq3r8fwxvoFA5YM9DzbU9wAp970Hb1O9wPDd5C6i-hxuYVNwR8tPmCRpKGwBB5HO0pouZFuuufSd6Q-THsePw8w7tiEEqVOQE0zdouK10jxt-V4ngx6X_DjPfyx0FpgcrGWVqOfdaYXzcHmCUVbgaUTr2GMa5GqRurcB1VRLuuwSQIZlYb6HVmLNqZt1KsxrafZu4dIrrpEg3BgO8REQo7zNa0_5zMuI)'
            }}></div>

            {/* Search */}
            <div className="absolute top-4 left-4 right-4 z-10">
              <div className="bg-white/80 backdrop-blur-md p-2 rounded-xl border border-white/50 shadow-lg flex items-center gap-3">
                <span className="material-symbols-outlined text-on-surface-variant ml-2">search</span>
                <input className="flex-1 bg-transparent border-none focus:ring-0 text-base py-1" placeholder={t('searchPlaceholder')} type="text" />
              </div>
            </div>

            {/* Controls */}
            <div className="absolute right-4 bottom-4 flex flex-col gap-2 z-10">
              <button className="w-10 h-10 bg-white shadow-md rounded-lg flex items-center justify-center text-primary hover:bg-surface-container-high transition">
                <span className="material-symbols-outlined">add</span>
              </button>
              <button className="w-10 h-10 bg-white shadow-md rounded-lg flex items-center justify-center text-primary hover:bg-surface-container-high transition">
                <span className="material-symbols-outlined">remove</span>
              </button>
              <button className="w-10 h-10 bg-white shadow-md rounded-lg flex items-center justify-center text-secondary hover:bg-secondary-fixed transition mt-2">
                <span className="material-symbols-outlined">my_location</span>
              </button>
            </div>

            {/* Pin */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative flex flex-col items-center">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                  <span className="material-symbols-outlined text-white text-xl">location_on</span>
                </div>
                <div className="w-3 h-1 bg-black/20 rounded-full mt-0.5 blur-[1px]"></div>
              </div>
            </div>

            {/* Address bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-primary text-white px-4 py-3 flex items-center gap-3 z-10">
              <span className="material-symbols-outlined text-secondary-fixed text-xl">explore</span>
              <p className="text-sm font-medium">{t('selectedLocation')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSelectLocation;