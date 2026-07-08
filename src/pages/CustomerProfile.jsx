// src/pages/CustomerProfile.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CustomerProfile = () => {
  const [activeSection, setActiveSection] = useState('personal');

  const menuItems = [
    { id: 'personal', icon: 'person', label: 'ព័ត៌មានផ្ទាល់ខ្លួន' },
    { id: 'locations', icon: 'location_on', label: 'ទីតាំងដែលបានរក្សាទុក' },
    { id: 'bookings', icon: 'history', label: 'ប្រវត្តិការកក់' },
    { id: 'payments', icon: 'account_balance_wallet', label: 'ការបង់ប្រាក់' },
    { id: 'security', icon: 'security', label: 'សុវត្ថិភាពគណនី' }
  ];

  return (
    <div className="container-custom py-6 md:py-10 animate-enter">
      <div className="mb-6">
        <nav className="flex items-center gap-2 text-sm text-on-surface-variant mb-2">
          <Link to="/dashboard" className="hover:text-primary">ទំព័រដើម</Link>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <span className="text-primary font-bold">គណនី</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold text-primary">គណនីរបស់ខ្ញុំ</h1>
        <p className="text-base text-on-surface-variant">គ្រប់គ្រងព័ត៌មានផ្ទាល់ខ្លួន និងការកំណត់គណនី</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <aside className="w-full md:w-[280px] shrink-0">
          <div className="bg-surface-container-low rounded-xl p-6 shadow-sm border border-outline-variant/30">
            <div className="flex flex-col items-center text-center mb-6 pb-6 border-b border-outline-variant">
              <div className="w-20 h-20 rounded-full border-4 border-white shadow-md mb-3 overflow-hidden bg-primary-fixed">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeMKz0fRanwqRkDfyM9ZatTI3de83pjd8PGk5H_xrYR0PUSDS48pNRJCjg735au9Fhe23r7CTl8ZMTKanGDsK4rtAlTcK8Z7gBz_lFgOCYJpcNSpmZw39clk7NYsN1aokGRnLdYjyWp_IiwVvg5wlKrpajmfuRdNbxMOvqP2T6_-PnIJv11lPxWL2NroVf6SWxf5O1cOhzbrqPBqRmT5o6A4fN6w91nMMORrREQM1kqQ9s_WO6Umnx4zfPLO19xtvU5eDEm8Pu0hY" alt="Profile" />
              </div>
              <h3 className="text-2xl font-bold text-primary">សុភា</h3>
              <p className="text-sm text-on-surface-variant">012 345 678</p>
              <span className="mt-2 px-3 py-1 bg-primary text-white text-[10px] font-bold rounded-full flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">verified</span> បានផ្ទៀងផ្ទាត់
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
                  <span className="text-sm">{item.label}</span>
                </button>
              ))}
              <hr className="my-2 border-outline-variant" />
              <Link to="/login" className="flex items-center gap-3 p-3 text-error hover:bg-error-container/20 rounded-lg transition">
                <span className="material-symbols-outlined">logout</span>
                <span className="text-sm">ចាកចេញ</span>
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
                    <h2 className="text-2xl font-bold text-primary">សុភា</h2>
                    <p className="text-base text-on-surface-variant">សមាជិកតាំងពី៖ ឆ្នាំ ២០២៦</p>
                  </div>
                </div>
                <div className="flex gap-3 mt-4 md:mt-0">
                  <button className="px-6 py-2 border border-outline-variant text-primary font-bold rounded-lg hover:bg-surface-container transition flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">image</span> ប្តូររូប
                  </button>
                  <button className="px-6 py-2 bg-secondary text-white font-bold rounded-lg hover:opacity-90 transition flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">edit</span> កែព័ត៌មាន
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-surface rounded-xl border border-outline-variant">
                <div className="text-center">
                  <p className="text-xs text-on-surface-variant mb-1">ការកក់សរុប</p>
                  <p className="text-2xl font-bold text-primary">12</p>
                </div>
                <div className="text-center border-l border-outline-variant">
                  <p className="text-xs text-on-surface-variant mb-1">បានបញ្ចប់</p>
                  <p className="text-2xl font-bold text-primary">9</p>
                </div>
                <div className="text-center border-l border-outline-variant">
                  <p className="text-xs text-on-surface-variant mb-1">កំពុងដំណើរការ</p>
                  <p className="text-2xl font-bold text-secondary">2</p>
                </div>
                <div className="text-center border-l border-outline-variant">
                  <p className="text-xs text-on-surface-variant mb-1">បានបោះបង់</p>
                  <p className="text-2xl font-bold text-error">1</p>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Info Form */}
          <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 p-6">
            <h3 className="text-2xl font-bold text-primary flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-primary">id_card</span> ព័ត៌មានផ្ទាល់ខ្លួន
            </h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-on-surface">ឈ្មោះពេញ</label>
                <input className="input-field" value="សុភា" type="text" />
              </div>
              <div>
                <label className="text-sm text-on-surface">លេខទូរស័ព្ទ</label>
                <input className="input-field bg-surface-container-low text-on-surface-variant cursor-not-allowed" disabled value="012 345 678" type="text" />
              </div>
              <div>
                <label className="text-sm text-on-surface">អ៊ីមែល</label>
                <input className="input-field" placeholder="example@mail.com" type="email" />
              </div>
              <div>
                <label className="text-sm text-on-surface">ភេទ</label>
                <select className="input-field">
                  <option selected>ស្រី</option>
                  <option>ប្រុស</option>
                  <option>ផ្សេងៗ</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-on-surface">ថ្ងៃខែឆ្នាំកំណើត</label>
                <input className="input-field" value="1995-05-15" type="date" />
              </div>
              <div>
                <label className="text-sm text-on-surface">អាសយដ្ឋានបច្ចុប្បន្ន</label>
                <input className="input-field" value="ភ្នំពេញ, កម្ពុជា" type="text" />
              </div>
              <div className="md:col-span-2 flex justify-end gap-4 mt-4">
                <button type="button" className="px-8 py-3 text-primary font-bold hover:bg-surface-container rounded-lg transition">បោះបង់</button>
                <button type="submit" className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:opacity-90 shadow-md transition">
                  រក្សាទុក
                </button>
              </div>
            </form>
          </div>

          {/* Security */}
          <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 p-6">
            <h3 className="text-2xl font-bold text-primary flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-primary">encrypted</span> សុវត្ថិភាពគណនី
            </h3>
            <div className="flex flex-col divide-y divide-outline-variant">
              <div className="py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant">key</span>
                  <div>
                    <p className="text-sm text-on-surface">លេខសម្ងាត់</p>
                    <p className="text-xs text-on-surface-variant">បានប្តូរចុងក្រោយ៖ ២ ខែមុន</p>
                  </div>
                </div>
                <button className="text-primary font-bold hover:underline text-sm">ប្ដូរលេខសម្ងាត់</button>
              </div>
              <div className="py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant">phone_android</span>
                  <div>
                    <p className="text-sm text-on-surface">លេខទូរស័ព្ទ</p>
                    <p className="text-xs text-on-surface-variant">012 *** 678 (បានផ្ទៀងផ្ទាត់)</p>
                  </div>
                </div>
                <button className="text-primary font-bold hover:underline text-sm">ប្តូរលេខទូរស័ព្ទ</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;