// src/pages/MapSelectLocation.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MapSelectLocation = () => {
  const [locationType, setLocationType] = useState('home');

  return (
    <div className="container-custom py-6 md:py-10 animate-enter">
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">កំណត់ទីតាំងរបស់អ្នក</h1>
        <p className="text-base text-on-surface-variant">សូមបញ្ជាក់ទីតាំងដែលត្រូវការជាងមកផ្ដល់សេវា</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Form */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-2xl shadow-sm border border-outline-variant p-6">
            <h2 className="text-2xl font-bold text-primary flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-secondary">location_on</span> ព័ត៌មានទីតាំង
            </h2>
            <form className="space-y-4">
              <div>
                <label className="text-sm text-on-surface">ឈ្មោះបុរី / អគារ</label>
                <input className="input-field" placeholder="បុរី ប៉េង ហួត" type="text" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-on-surface">លេខផ្ទះ</label>
                  <input className="input-field" placeholder="A-12" type="text" />
                </div>
                <div>
                  <label className="text-sm text-on-surface">លេខផ្លូវ</label>
                  <input className="input-field" placeholder="ផ្លូវ ២៧១" type="text" />
                </div>
              </div>
              <div>
                <label className="text-sm text-on-surface">ខណ្ឌ / សង្កាត់</label>
                <select className="input-field appearance-none">
                  <option>បឹងកេងកងទី ១</option>
                  <option>ច្បារអំពៅ</option>
                  <option>ទួលគោក</option>
                  <option>សែនសុខ</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-on-surface">រាជធានី / ខេត្ត</label>
                <input className="input-field bg-surface-container text-on-surface-variant font-medium cursor-not-allowed" readOnly value="ភ្នំពេញ" type="text" />
              </div>
              <div>
                <label className="text-sm text-on-surface">ចំណុចសម្គាល់</label>
                <input className="input-field" placeholder="នៅជិតទូរ ATM ធនាគារ ABA" type="text" />
              </div>
              <div>
                <label className="text-sm text-on-surface">លេខទូរស័ព្ទ</label>
                <input className="input-field" placeholder="012 345 678" type="tel" />
              </div>

              <div>
                <label className="text-sm text-on-surface block mb-2">រក្សាទុកទីតាំងជា</label>
                <div className="flex gap-2 flex-wrap">
                  {[
                    { id: 'home', icon: 'home', label: 'ផ្ទះ' },
                    { id: 'work', icon: 'work', label: 'ការិយាល័យ' },
                    { id: 'other', icon: 'more_horiz', label: 'ផ្សេងៗ' }
                  ].map((type) => (
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
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              <Link to="/technicians">
                <button className="w-full bg-primary hover:opacity-90 text-white py-3.5 rounded-xl font-bold text-center block transition shadow-lg">
                  បញ្ជាក់ទីតាំង
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
                <input className="flex-1 bg-transparent border-none focus:ring-0 text-base py-1" placeholder="ស្វែងរកទីតាំង..." type="text" />
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
              <p className="text-sm font-medium">ទីតាំងដែលបានជ្រើស៖ បុរីប៉េងហួត បឹងស្នោរ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSelectLocation;