// src/pages/SelectServicePlumber.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SelectServicePlumber = () => {
  const [selectedProblem, setSelectedProblem] = useState('leak');
  const [urgency, setUrgency] = useState('regular');

  const problems = [
    { id: 'leak', icon: 'humidity_high', label: 'លេចធ្លាយ' },
    { id: 'clog', icon: 'tablet', label: 'បង្គន់ស្ទះ' },
    { id: 'faucet', icon: 'faucet', label: 'ក្បាលទឹកខូច' },
    { id: 'pump', icon: 'mode_fan', label: 'ម៉ាស៊ីនបូមខូច' },
    { id: 'low_water', icon: 'watch_off', label: 'ទឹកមិនឡើង' },
    { id: 'other', icon: 'more_horiz', label: 'ផ្សេងៗ' }
  ];

  return (
    <div className="container-custom py-6 md:py-10 animate-enter">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">ជ្រើសរើសសេវាកម្ម</h1>
        <div className="flex items-center justify-center gap-2">
          <div className="w-8 h-1 bg-primary rounded-full"></div>
          <div className="w-8 h-1 bg-outline-variant rounded-full"></div>
          <div className="w-8 h-1 bg-outline-variant rounded-full"></div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center justify-start md:justify-center overflow-x-auto pb-4 gap-3 custom-scrollbar mb-8">
        <Link to="/select/plumber" className="flex items-center gap-2 whitespace-nowrap bg-primary text-white px-6 py-3 rounded-xl shadow-md transition">
          <span className="material-symbols-outlined">water_drop</span>
          <span className="text-lg font-semibold">ជាងទឹក</span>
        </Link>
        <Link to="/select/electrician" className="flex items-center gap-2 whitespace-nowrap bg-surface-container-high text-on-surface-variant px-6 py-3 rounded-xl hover:bg-surface-container-highest transition">
          <span className="material-symbols-outlined">bolt</span>
          <span className="text-lg font-semibold">ជាងភ្លើង</span>
        </Link>
        <Link to="/select/ac" className="flex items-center gap-2 whitespace-nowrap bg-surface-container-high text-on-surface-variant px-6 py-3 rounded-xl hover:bg-surface-container-highest transition">
          <span className="material-symbols-outlined">ac_unit</span>
          <span className="text-lg font-semibold">ម៉ាស៊ីនត្រជាក់</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Problem Cards */}
        <div className="lg:col-span-8">
          <h2 className="text-2xl font-bold text-on-surface mb-4">បញ្ហាដែលអ្នកជួបប្រទះ</h2>
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
                  <p className="text-sm font-medium text-on-surface">{p.label}</p>
                  <span className={`material-symbols-outlined absolute top-2 right-2 text-primary transition-opacity ${
                    selectedProblem === p.id ? 'opacity-100' : 'opacity-0'
                  }`}>check_circle</span>
                </div>
              </label>
            ))}
          </div>

          <div className="mt-6">
            <label className="block text-sm font-bold text-on-surface mb-2">រៀបរាប់ពីបញ្ហាបន្ថែម (ស្រេចចិត្ត)</label>
            <textarea
              className="w-full bg-white border border-outline-variant rounded-xl p-4 focus:border-primary focus:ring-1 focus:ring-primary transition min-h-[100px] text-base"
              placeholder="សូមពិពណ៌នាបញ្ហារបស់អ្នក..."
            ></textarea>
          </div>
        </div>

        {/* Right: Summary */}
        <div className="lg:col-span-4">
          <div className="bg-surface-container rounded-2xl p-6 shadow-sm border border-outline-variant sticky top-24">
            <h3 className="text-2xl font-bold text-primary mb-4">កម្រិតបន្ទាន់</h3>
            <div className="space-y-3 mb-6">
              {[
                { id: 'regular', label: 'ធម្មតា', time: '2-4 ម៉ោង' },
                { id: 'emergency', label: 'បន្ទាន់', time: 'ភ្លាមៗ', extra: 'Extra fees apply' },
                { id: 'scheduled', label: 'កំណត់ពេល', time: 'ជ្រើសថ្ងៃ' }
              ].map((opt) => (
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
                        {opt.label}
                      </span>
                      {opt.extra && <span className="text-xs text-secondary/70 block">{opt.extra}</span>}
                    </div>
                  </div>
                  <span className={`text-sm ${opt.id === 'emergency' ? 'font-bold text-secondary' : 'text-on-surface-variant'}`}>
                    {opt.time}
                  </span>
                </label>
              ))}
            </div>

            <hr className="border-outline-variant mb-4" />
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant">ប្រភេទសេវា</span>
                <span className="font-bold">ជាងទឹក</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant">តម្លៃមូលដ្ឋាន</span>
                <span className="font-bold">$15.00</span>
              </div>
            </div>

            <Link to="/problem-detail">
              <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:opacity-90 transition shadow-md">
                បន្ត <span className="material-symbols-outlined align-middle">arrow_forward</span>
              </button>
            </Link>
            <p className="text-center text-sm text-on-surface-variant mt-3 italic">កក់ទុកឥឡូវ ដើម្បីជួបអ្នកបច្ចេកទេស</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectServicePlumber;