// src/pages/BookingTracking.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const BookingTracking = () => {
  const steps = [
    { label: 'បានទទួលការកក់', time: 'ម៉ោង ១០:៣០ ព្រឹក', active: true, completed: true },
    { label: 'ជាងកំពុងធ្វើដំណើរ', time: 'បច្ចុប្បន្ន', active: true, completed: false, current: true },
    { label: 'ជាងបានមកដល់', time: 'រង់ចាំ', active: false, completed: false },
    { label: 'កំពុងជួសជុល', time: 'រង់ចាំ', active: false, completed: false },
    { label: 'បានបញ្ចប់', time: 'រង់ចាំ', active: false, completed: false }
  ];

  return (
    <div className="container-custom py-6 md:py-10 animate-enter">
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">តាមដានការកក់</h1>
        <p className="text-base text-on-surface-variant">លេខកូដកក់៖ #HC-992834</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Map */}
        <div className="lg:col-span-7">
          <div className="h-[400px] lg:h-[650px] rounded-xl overflow-hidden relative shadow-lg bg-surface-container-high border border-outline-variant">
            <div className="absolute inset-0 bg-cover bg-center" style={{
              backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuDN6vleSN66V3Q4lrQ7Hl23W3XOqrd_cYzJzo6aqcctqYsg7TU3OIASwCXktVyclXveoalbCQwWuqnxAgoDvtxgG5c4xRnu8lTDafYXELGDbk5PCIoIwvJ08fZZGEf-O7H4Em1r_6v73RBZKN_HaYiYGzNhmwWkPEOsHaMG2UjG7TS4d_k1ubAkvI1WCoUP29YQfVVgAQhvSmtF747gIxKp6kSLxIdjDjHPaEi4BoM0QHpURDFCt-1U0jR5kepfViZPK1eXIO-xnkk)'
            }}></div>

            <div className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur-md p-4 rounded-lg border border-white/50 shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-on-surface">បច្ចុប្បន្នភាពផ្ទាល់</span>
              </div>
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 w-[90%] md:w-auto">
              <div className="bg-white/80 backdrop-blur-md p-4 rounded-xl border border-white/50 shadow-xl flex items-center gap-6">
                <div>
                  <span className="text-xs text-on-surface-variant">ពេលវេលាស្មាន</span>
                  <span className="text-2xl font-bold text-primary block">១៥ នាទី</span>
                </div>
                <div className="h-10 w-px bg-outline-variant"></div>
                <div>
                  <span className="text-xs text-on-surface-variant">ចម្ងាយ</span>
                  <span className="text-2xl font-bold text-primary block">២.៤ គ.ម</span>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                  <span className="material-symbols-outlined text-white text-xl">location_on</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Info */}
        <div className="lg:col-span-5 space-y-6">
          {/* Tech Card */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant">
            <h2 className="text-sm text-on-surface-variant mb-4">ព័ត៌មានអ្នកជំនាញ</h2>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary-fixed">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCX2P7V0bLBDLZrDvAbVRmLHPBSoSlUpSvuHaD6Q4nCF56nD6KCsWJc1smpvH9IEbJKluNxkosXr4QoNkURe6rc8WSJLB-yoduUfzwJ-MQQG-fiY5KdcDenbyCM8EvdUDqr7OerIVk_WD6yTpyMBBNZOlR3zyCJ8Ecprl3gBYzRuZ-kxSNgopesWAG4_85EloGc4te53aYDduOJ7A5qMpcMJVdZiL2pxM177YNPDHPh6nAxSrJJvig1npfDBzIKfF2iVn3vu-8zito" alt="Tech" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary">ជាង វិសាល</h3>
                <div className="flex items-center gap-1 text-secondary">
                  <span className="material-symbols-outlined text-sm">star</span>
                  <span className="text-sm font-medium">៤.៩ (២៥០+ ការងារ)</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 py-3 px-4 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90 transition">
                <span className="material-symbols-outlined">call</span> ហៅទូរស័ព្ទ
              </button>
              <button className="flex items-center justify-center gap-2 py-3 px-4 bg-surface-container text-primary rounded-lg border border-primary/20 text-sm font-medium hover:bg-surface-container-high transition">
                <span className="material-symbols-outlined">chat_bubble</span> ផ្ញើសារ
              </button>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant">
            <h2 className="text-sm text-on-surface-variant mb-6">ស្ថានភាពបច្ចុប្បន្ន</h2>
            <div className="relative pl-8 space-y-8">
              <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-outline-variant"></div>
              {steps.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className={`absolute -left-[25px] w-5 h-5 rounded-full flex items-center justify-center z-10 ${
                    step.completed
                      ? 'bg-primary text-white'
                      : step.current
                      ? 'bg-secondary progress-pulse ring-4 ring-secondary-fixed/30'
                      : 'bg-outline-variant'
                  }`}>
                    {step.completed && <span className="material-symbols-outlined text-sm">check</span>}
                  </div>
                  <div>
                    <span className={`text-sm font-bold ${step.current ? 'text-secondary' : 'text-on-surface'}`}>
                      {step.label}
                    </span>
                    <span className={`text-xs block ${step.current ? 'text-secondary' : 'text-on-surface-variant'}`}>
                      {step.time}
                    </span>
                    {step.current && (
                      <div className="mt-3 p-3 bg-secondary-fixed/20 rounded-lg border border-secondary/10">
                        <p className="text-xs text-on-secondary-container">ជាងកំពុងជិះម៉ូតូតាមផ្លូវព្រះនរោត្តម។</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-outline-variant">
              <button className="w-full py-4 text-error text-sm font-medium flex items-center justify-center gap-2 hover:bg-error-container/20 rounded-lg transition">
                <span className="material-symbols-outlined text-sm">cancel</span> បោះបង់ការកក់
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingTracking;