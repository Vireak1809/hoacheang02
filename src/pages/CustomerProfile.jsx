// src/pages/CustomerProfile.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  breadcrumbHome: { km: 'ទំព័រដើម', en: 'Home' },
  breadcrumbAccount: { km: 'គណនី', en: 'Account' },
  pageTitle: { km: 'គណនីរបស់ខ្ញុំ', en: 'My Account' },
  pageSubtitle: { km: 'គ្រប់គ្រងព័ត៌មានផ្ទាល់ខ្លួន និងការកំណត់គណនី', en: 'Manage personal info and account settings' },
  // Sidebar menu
  menuPersonal: { km: 'ព័ត៌មានផ្ទាល់ខ្លួន', en: 'Personal Info' },
  menuLocations: { km: 'ទីតាំងដែលបានរក្សាទុក', en: 'Saved Locations' },
  menuBookings: { km: 'ប្រវត្តិការកក់', en: 'Booking History' },
  menuPayments: { km: 'ការបង់ប្រាក់', en: 'Payments' },
  menuSecurity: { km: 'សុវត្ថិភាពគណនី', en: 'Account Security' },
  logout: { km: 'ចាកចេញ', en: 'Logout' },
  // Profile card
  userName: { km: 'សុភា', en: 'Sophea' },
  phoneNumber: { km: '012 345 678', en: '012 345 678' },
  verified: { km: 'បានផ្ទៀងផ្ទាត់', en: 'Verified' },
  memberSince: { km: 'សមាជិកតាំងពី៖ ឆ្នាំ ២០២៦', en: 'Member since: 2026' },
  changePhoto: { km: 'ប្តូររូប', en: 'Change Photo' },
  editInfo: { km: 'កែព័ត៌មាន', en: 'Edit Info' },
  totalBookings: { km: 'ការកក់សរុប', en: 'Total Bookings' },
  completed: { km: 'បានបញ្ចប់', en: 'Completed' },
  inProgress: { km: 'កំពុងដំណើរការ', en: 'In Progress' },
  cancelled: { km: 'បានបោះបង់', en: 'Cancelled' },
  // Personal info form
  formTitle: { km: 'ព័ត៌មានផ្ទាល់ខ្លួន', en: 'Personal Information' },
  fullName: { km: 'ឈ្មោះពេញ', en: 'Full Name' },
  phone: { km: 'លេខទូរស័ព្ទ', en: 'Phone Number' },
  email: { km: 'អ៊ីមែល', en: 'Email' },
  gender: { km: 'ភេទ', en: 'Gender' },
  female: { km: 'ស្រី', en: 'Female' },
  male: { km: 'ប្រុស', en: 'Male' },
  other: { km: 'ផ្សេងៗ', en: 'Other' },
  dob: { km: 'ថ្ងៃខែឆ្នាំកំណើត', en: 'Date of Birth' },
  address: { km: 'អាសយដ្ឋានបច្ចុប្បន្ន', en: 'Current Address' },
  addressValue: { km: 'ភ្នំពេញ, កម្ពុជា', en: 'Phnom Penh, Cambodia' },
  cancel: { km: 'បោះបង់', en: 'Cancel' },
  save: { km: 'រក្សាទុក', en: 'Save' },
  // Security section
  securityTitle: { km: 'សុវត្ថិភាពគណនី', en: 'Account Security' },
  password: { km: 'លេខសម្ងាត់', en: 'Password' },
  passwordChanged: { km: 'បានប្តូរចុងក្រោយ៖ ២ ខែមុន', en: 'Last changed: 2 months ago' },
  changePassword: { km: 'ប្ដូរលេខសម្ងាត់', en: 'Change Password' },
  phoneSecurity: { km: 'លេខទូរស័ព្ទ', en: 'Phone Number' },
  phoneVerified: { km: '012 *** 678 (បានផ្ទៀងផ្ទាត់)', en: '012 *** 678 (Verified)' },
  changePhone: { km: 'ប្តូរលេខទូរស័ព្ទ', en: 'Change Phone' },
};

const CustomerProfile = () => {
  const { lang } = useLanguage();
  const t = (key) => translations[key]?.[lang] || key;
  const [activeSection, setActiveSection] = useState('personal');

  const menuItems = [
    { id: 'personal', icon: 'person', labelKey: 'menuPersonal' },
    { id: 'locations', icon: 'location_on', labelKey: 'menuLocations' },
    { id: 'bookings', icon: 'history', labelKey: 'menuBookings' },
    { id: 'payments', icon: 'account_balance_wallet', labelKey: 'menuPayments' },
    { id: 'security', icon: 'security', labelKey: 'menuSecurity' }
  ];

  return (
    <div className="container-custom py-6 md:py-10 animate-enter">
      <div className="mb-6">
        <nav className="flex items-center gap-2 text-sm text-on-surface-variant mb-2">
          <Link to="/dashboard" className="hover:text-primary">{t('breadcrumbHome')}</Link>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <span className="text-primary font-bold">{t('breadcrumbAccount')}</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold text-primary">{t('pageTitle')}</h1>
        <p className="text-base text-on-surface-variant">{t('pageSubtitle')}</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <aside className="w-full md:w-[280px] shrink-0">
          <div className="bg-surface-container-low rounded-xl p-6 shadow-sm border border-outline-variant/30">
            <div className="flex flex-col items-center text-center mb-6 pb-6 border-b border-outline-variant">
              <div className="w-20 h-20 rounded-full border-4 border-white shadow-md mb-3 overflow-hidden bg-primary-fixed">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeMKz0fRanwqRkDfyM9ZatTI3de83pjd8PGk5H_xrYR0PUSDS48pNRJCjg735au9Fhe23r7CTl8ZMTKanGDsK4rtAlTcK8Z7gBz_lFgOCYJpcNSpmZw39clk7NYsN1aokGRnLdYjyWp_IiwVvg5wlKrpajmfuRdNbxMOvqP2T6_-PnIJv11lPxWL2NroVf6SWxf5O1cOhzbrqPBqRmT5o6A4fN6w91nMMORrREQM1kqQ9s_WO6Umnx4zfPLO19xtvU5eDEm8Pu0hY" alt="Profile" />
              </div>
              <h3 className="text-2xl font-bold text-primary">{t('userName')}</h3>
              <p className="text-sm text-on-surface-variant">{t('phoneNumber')}</p>
              <span className="mt-2 px-3 py-1 bg-primary text-white text-[10px] font-bold rounded-full flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">verified</span> {t('verified')}
              </span>
            </div>
            <nav className="flex flex-col gap-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-3 p-3 rounded-lg transition ${
                    activeSection === item.id
                      ? 'bg-primary-fixed text-primary font-bold'
                      : 'text-on-surface-variant hover:bg-surface-container-high'
                  }`}
                >
                  <span className="material-symbols-outlined">{item.icon}</span>
                  <span className="text-sm">{t(item.labelKey)}</span>
                </button>
              ))}
              <hr className="my-2 border-outline-variant" />
              <Link to="/login" className="flex items-center gap-3 p-3 text-error hover:bg-error-container/20 rounded-lg transition">
                <span className="material-symbols-outlined">logout</span>
                <span className="text-sm">{t('logout')}</span>
              </Link>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 space-y-6">
          {/* Profile Overview */}
          <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 overflow-hidden">
            <div className="h-24 bg-primary-container relative"></div>
            <div className="px-6 pb-6">
              <div className="flex flex-col md:flex-row justify-between items-end -mt-12 mb-6">
                <div className="flex flex-col md:flex-row items-end gap-4 text-center md:text-left">
                  <div className="w-32 h-32 rounded-xl border-4 border-surface shadow-lg overflow-hidden relative">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbWhXrer0lPeMY3yguDyJowUHDrrNCMj_iURS9oXXRS6E-63EgiqR2li9F9979BseBcJWnirHiKUoQzqTCJgFU-avaPmYH9-4S9kO12-f-kvnujt9F58vkXALMqPXKRlyF3ERcH8cdgoZ8L6M_6qTf3IQqYss0_4Svs6Mp6kGi43iqsR6jy0GtaLaZze6wwTgbBCJqayutopXx3eu7r12nMZ_1bbopSipCLZ2gQ2urmAfi2SQ-_heg3GGWHUj1xhNV3nlGDkUFAmg" alt="Profile" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-primary">{t('userName')}</h2>
                    <p className="text-base text-on-surface-variant">{t('memberSince')}</p>
                  </div>
                </div>
                <div className="flex gap-3 mt-4 md:mt-0">
                  <button className="px-6 py-2 border border-outline-variant text-primary font-bold rounded-lg hover:bg-surface-container transition flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">image</span> {t('changePhoto')}
                  </button>
                  <button className="px-6 py-2 bg-secondary text-white font-bold rounded-lg hover:opacity-90 transition flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">edit</span> {t('editInfo')}
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-surface rounded-xl border border-outline-variant">
                <div className="text-center">
                  <p className="text-xs text-on-surface-variant mb-1">{t('totalBookings')}</p>
                  <p className="text-2xl font-bold text-primary">12</p>
                </div>
                <div className="text-center border-l border-outline-variant">
                  <p className="text-xs text-on-surface-variant mb-1">{t('completed')}</p>
                  <p className="text-2xl font-bold text-primary">9</p>
                </div>
                <div className="text-center border-l border-outline-variant">
                  <p className="text-xs text-on-surface-variant mb-1">{t('inProgress')}</p>
                  <p className="text-2xl font-bold text-secondary">2</p>
                </div>
                <div className="text-center border-l border-outline-variant">
                  <p className="text-xs text-on-surface-variant mb-1">{t('cancelled')}</p>
                  <p className="text-2xl font-bold text-error">1</p>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Info Form */}
          <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 p-6">
            <h3 className="text-2xl font-bold text-primary flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-primary">id_card</span> {t('formTitle')}
            </h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-on-surface">{t('fullName')}</label>
                <input className="input-field" value={t('userName')} type="text" />
              </div>
              <div>
                <label className="text-sm text-on-surface">{t('phone')}</label>
                <input className="input-field bg-surface-container-low text-on-surface-variant cursor-not-allowed" disabled value={t('phoneNumber')} type="text" />
              </div>
              <div>
                <label className="text-sm text-on-surface">{t('email')}</label>
                <input className="input-field" placeholder="example@mail.com" type="email" />
              </div>
              <div>
                <label className="text-sm text-on-surface">{t('gender')}</label>
                <select className="input-field">
                  <option selected>{t('female')}</option>
                  <option>{t('male')}</option>
                  <option>{t('other')}</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-on-surface">{t('dob')}</label>
                <input className="input-field" value="1995-05-15" type="date" />
              </div>
              <div>
                <label className="text-sm text-on-surface">{t('address')}</label>
                <input className="input-field" value={t('addressValue')} type="text" />
              </div>
              <div className="md:col-span-2 flex justify-end gap-4 mt-4">
                <button type="button" className="px-8 py-3 text-primary font-bold hover:bg-surface-container rounded-lg transition">{t('cancel')}</button>
                <button type="submit" className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:opacity-90 shadow-md transition">
                  {t('save')}
                </button>
              </div>
            </form>
          </div>

          {/* Security */}
          <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 p-6">
            <h3 className="text-2xl font-bold text-primary flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-primary">encrypted</span> {t('securityTitle')}
            </h3>
            <div className="flex flex-col divide-y divide-outline-variant">
              <div className="py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant">key</span>
                  <div>
                    <p className="text-sm text-on-surface">{t('password')}</p>
                    <p className="text-xs text-on-surface-variant">{t('passwordChanged')}</p>
                  </div>
                </div>
                <button className="text-primary font-bold hover:underline text-sm">{t('changePassword')}</button>
              </div>
              <div className="py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant">phone_android</span>
                  <div>
                    <p className="text-sm text-on-surface">{t('phoneSecurity')}</p>
                    <p className="text-xs text-on-surface-variant">{t('phoneVerified')}</p>
                  </div>
                </div>
                <button className="text-primary font-bold hover:underline text-sm">{t('changePhone')}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;