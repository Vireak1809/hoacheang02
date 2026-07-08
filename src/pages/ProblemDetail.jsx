// src/pages/ProblemDetail.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProblemDetail = () => {
  const [urgency, setUrgency] = useState('normal');
  const [file, setFile] = useState(null);

  return (
    <div className="container-custom py-6 md:py-10 animate-enter">
      <div className="text-center md:text-left mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">ពិពណ៌នាបញ្ហា</h1>
        <p className="text-base text-on-surface-variant">សូមផ្តល់ព័ត៌មានបន្ថែមអំពីបញ្ហារបស់អ្នក</p>
      </div>

      {/* Service Summary */}
      <div className="bg-surface-container-low border border-outline-variant rounded-xl p-4 mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="w-16 h-16 bg-primary-container rounded-lg flex items-center justify-center text-white shrink-0">
          <span className="material-symbols-outlined text-4xl">plumbing</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary">សេវាកម្មជួសជុលទុយោទឹក</h3>
          <p className="text-sm text-on-surface-variant">តម្លៃចាប់ពី: $15.00</p>
        </div>
        <Link to="/select/plumber" className="sm:ml-auto text-primary font-bold text-sm underline">ប្តូរ</Link>
      </div>

      {/* Form */}
      <div className="bg-surface-container-lowest shadow-sm rounded-xl p-6 md:p-8 space-y-6">
        <div>
          <label className="block text-sm font-bold text-on-surface mb-2">ប្រភេទនៃបញ្ហា</label>
          <select className="w-full h-14 px-4 border-2 border-outline-variant rounded-lg focus:border-primary focus:ring-0 bg-transparent text-base appearance-none">
            <option value="">ជ្រើសរើសប្រភេទបញ្ហា</option>
            <option value="leak">លេចជ្រាបទឹក</option>
            <option value="clogged">ស្ទះទុយោ</option>
            <option value="install">ដំឡើងឧបករណ៍ថ្មី</option>
            <option value="other">ផ្សេងៗ</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold text-on-surface mb-2">សូមពិពណ៌នាបញ្ហា</label>
          <textarea
            className="w-full p-4 border-2 border-outline-variant rounded-lg focus:border-primary focus:ring-0 text-base"
            placeholder="តើមានបញ្ហាអ្វីកើតឡើង?..."
            rows="4"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-bold text-on-surface mb-2">រូបភាព ឬ វីដេអូ (ស្រេចចិត្ត)</label>
          <div
            className="border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer hover:bg-surface-container-low transition group"
            onClick={() => document.getElementById('fileUpload').click()}
          >
            <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <span className="material-symbols-outlined text-primary text-3xl">cloud_upload</span>
            </div>
            <p className="text-sm font-medium text-on-surface">បញ្ចូលរូបភាព ឬ វីដេអូ</p>
            <p className="text-xs text-on-surface-variant mt-1">ទំហំអតិបរមា 20MB</p>
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
            <p className="text-sm text-primary mt-2">ឯកសារ: {file.name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-bold text-on-surface mb-2">តម្រូវការពេលវេលា</label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { id: 'normal', icon: 'schedule', label: 'ធម្មតា' },
              { id: 'emergency', icon: 'bolt', label: 'បន្ទាន់' },
              { id: 'prebook', icon: 'calendar_today', label: 'កក់ទុក' }
            ].map((opt) => (
              <label key={opt.id} className="relative cursor-pointer">
                <input
                  checked={urgency === opt.id}
                  className="peer sr-only"
                  name="urgency"
                  type="radio"
                  value={opt.id}
                  onChange={() => setUrgency(opt.id)}
                />
                <div className={`p-4 border-2 rounded-xl flex flex-col items-center gap-2 transition ${
                  urgency === opt.id
                    ? opt.id === 'emergency'
                      ? 'border-secondary bg-secondary-container/10'
                      : 'border-primary bg-primary-container/5'
                    : 'border-outline-variant hover:bg-surface-container-low'
                }`}>
                  <span className={`material-symbols-outlined ${
                    urgency === opt.id ? 'text-primary' : 'text-on-surface-variant'
                  }`}>{opt.icon}</span>
                  <span className="text-sm">{opt.label}</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Stepper */}
        <div className="py-4 border-t border-b border-outline-variant">
          <div className="flex items-center justify-between max-w-md mx-auto relative">
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-surface-variant -translate-y-1/2 -z-10"></div>
            {[
              { num: 1, label: 'សេវា', active: true },
              { num: 2, label: 'បញ្ហា', active: true, current: true },
              { num: 3, label: 'ទីតាំង', active: false },
              { num: 4, label: 'បញ្ជាក់', active: false }
            ].map((step) => (
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
                }`}>{step.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link to="/map-location" className="flex-1 bg-primary text-white py-4 rounded-xl font-bold text-center hover:opacity-90 transition flex items-center justify-center gap-2">
            បន្តទៅកំណត់ទីតាំង <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
          <button className="px-6 h-14 border-2 border-outline-variant text-on-surface-variant rounded-xl font-medium hover:bg-surface-container-low transition">
            បោះបង់
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProblemDetail;