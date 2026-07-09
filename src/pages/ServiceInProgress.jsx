// src/pages/ServiceInProgress.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  title: { km: 'កំពុងជួសជុល', en: 'Repair in Progress' },
  subtitle: { km: 'ជាងបានមកដល់ និងកំពុងចាប់ផ្ដើមការងារ...', en: 'Technician has arrived and started working...' },
  statusBadge: { km: 'កំពុងជួសជុល', en: 'Repairing' },
  technicianName: { km: 'ជាង វណ្ណៈ', en: 'Technician Vannak' },
  rating: { km: '៤.៩ (១២០ ការងារ) • ឯកទេស៖ ម៉ាស៊ីនត្រជាក់', en: '4.9 (120 jobs) • Specialized: Air Conditioner' },
  progressLabel: { km: 'វឌ្ឍនភាពការងារ', en: 'Work Progress' },
  progressNote: { km: 'កំពុងធ្វើការសម្អាតតម្រង និងត្រួតពិនិត្យហ្គាស...', en: 'Cleaning filters and checking gas levels...' },
  bookingInfo: { km: 'ព័ត៌មានការកក់', en: 'Booking Information' },
  serviceLabel: { km: 'សេវាកម្ម', en: 'Service' },
  serviceValue: { km: 'សម្អាតម៉ាស៊ីនត្រជាក់ (២ គ្រឿង)', en: 'Air Conditioner Cleaning (2 Units)' },
  timeLabel: { km: 'ពេលវេលា', en: 'Time' },
  timeValue: { km: 'ថ្ងៃនេះ, ០៩:០០ ព្រឹក', en: 'Today, 09:00 AM' },
  locationLabel: { km: 'ទីតាំង', en: 'Location' },
  addressValue: { km: 'ផ្ទះលេខ ១២៣, ផ្លូវ ៤៥៦, បឹងកក់១', en: 'House #123, Street 456, Boeung Kork 1' },
  timelineTitle: { km: 'ដំណើរការការងារ', en: 'Work Timeline' },
  stepConfirmed: { km: 'ការកក់ទទួលបានជោគជ័យ', en: 'Booking Confirmed' },
  stepEnRoute: { km: 'ជាងកំពុងធ្វើដំណើរ', en: 'Technician En Route' },
  stepArrived: { km: 'ជាងបានមកដល់', en: 'Technician Arrived' },
  stepInProgress: { km: 'កំពុងជួសជុល', en: 'Repair in Progress' },
  stepCompleted: { km: 'បញ្ចប់ការងារ', en: 'Job Completed' },
  stepPending: { km: 'រង់ចាំ', en: 'Pending' },
  doneButton: { km: 'រួចរាល់', en: 'Done' },
  contactUs: { km: 'ទាក់ទងមកយើង', en: 'Contact Us' },
  ongoing: { km: 'កំពុងប្រតិបត្តិការ...', en: 'Ongoing...' },
};

const ServiceInProgress = () => {
  const { lang } = useLanguage();
  const t = (key) => translations[key]?.[lang] || key;

  const timelineSteps = [
    { label: t('stepConfirmed'), time: '08:00 AM', active: true },
    { label: t('stepEnRoute'), time: '08:30 AM', active: true },
    { label: t('stepArrived'), time: '09:00 AM', active: true },
    { label: t('stepInProgress'), time: t('ongoing'), active: true, current: true },
    { label: t('stepCompleted'), time: t('stepPending'), active: false }
  ];

  return (
    <div className="container-custom py-6 md:py-10 animate-enter">
      {/* Hero */}
      <div className="bg-primary text-white rounded-2xl p-6 md:p-10 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{t('title')}</h1>
        <p className="text-lg text-on-primary-container opacity-90">{t('subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Progress */}
        <div className="lg:col-span-8 space-y-6">
          {/* Progress Card */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/30 relative">
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-secondary progress-pulse"></span> {t('statusBadge')}
              </span>
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-6">
              <div className="w-20 h-20 rounded-xl overflow-hidden shadow-sm">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrZ4Hm2qA74O1m50KELc0_l2XFZFyHPDYyqjEq05PNFLltu-IOesecFy1-G-jhLFLszSRzCp3pQliiTtOAZgQM7BWxhEmDi4-lVO1knzsyOxf6dNLzAbSViTgCG8m4xS-24PMOkf0QwWK3-kWHykLqHWms9p6A8NDzbYxWt2jmr1imBXTYHNIKgYuLzTKBAM2mU6OYSipsrLDPGDNeaL76gLTChRz1HSO5dpIxRVDW1ImF_memWA7Z_1dQoakzR8lIf6_E_UB_bb0" 
                  alt={t('technicianName')}
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary">{t('technicianName')}</h3>
                <p className="text-base text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-secondary text-sm">star</span> {t('rating')}
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant">{t('progressLabel')}</span>
                <span className="text-primary font-bold">68%</span>
              </div>
              <div className="w-full h-3 bg-surface-container-high rounded-full overflow-hidden">
                <div className="h-full bg-primary transition-all duration-1000" style={{ width: '68%' }}></div>
              </div>
              <p className="text-sm text-on-surface-variant italic mt-2">{t('progressNote')}</p>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/20">
              <h4 className="text-sm text-primary uppercase tracking-wider mb-4">{t('bookingInfo')}</h4>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant">construction</span>
                  <div>
                    <p className="text-xs text-on-surface-variant">{t('serviceLabel')}</p>
                    <p className="text-sm font-medium text-primary">{t('serviceValue')}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant">schedule</span>
                  <div>
                    <p className="text-xs text-on-surface-variant">{t('timeLabel')}</p>
                    <p className="text-sm font-medium text-primary">{t('timeValue')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/20">
              <h4 className="text-sm text-primary uppercase tracking-wider mb-4">{t('locationLabel')}</h4>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-on-surface-variant">location_on</span>
                <div>
                  <p className="text-xs text-on-surface-variant">{t('locationLabel')}</p>
                  <p className="text-sm font-medium text-primary">{t('addressValue')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Timeline */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-outline-variant/20">
            <h4 className="text-xl font-bold text-primary mb-6">{t('timelineTitle')}</h4>
            <div className="relative space-y-6 pl-6 border-l-2 border-surface-container-high">
              {timelineSteps.map((step, idx) => (
                <div key={idx} className="relative">
                  <span className={`absolute -left-[33px] top-0 w-4 h-4 rounded-full border-4 border-surface ${
                    step.active
                      ? step.current
                        ? 'bg-secondary ring-2 ring-secondary progress-pulse'
                        : 'bg-primary ring-2 ring-primary'
                      : 'bg-outline-variant'
                  }`}></span>
                  <div>
                    <p className={`text-sm font-medium ${step.current ? 'text-secondary' : 'text-primary'}`}>
                      {step.label}
                    </p>
                    <p className={`text-xs ${step.current ? 'text-secondary' : 'text-on-surface-variant'}`}>
                      {step.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <Link to="/invoice">
              <button className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:opacity-90 transition flex items-center justify-center gap-2 shadow-sm">
                <span className="material-symbols-outlined">check_circle</span> {t('doneButton')}
              </button>
            </Link>
            <br />
            <Link to="/help">
              <button className="w-full py-4 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary/5 transition flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">support_agent</span> {t('contactUs')}
              </button>
            </Link>
          </div>

          {/* Map – now clickable to Booking Tracking */}
          <Link to="/booking/track" className="block rounded-xl overflow-hidden h-48 border border-outline-variant/30 bg-surface-container relative hover:shadow-lg transition group">
            <img 
              src="https://maps.googleapis.com/maps/api/staticmap?center=11.5564,104.9282&zoom=15&size=400x200&markers=color:red%7C11.5564,104.9282&key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg" 
              alt="Map location" 
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/400x200/4A90E2/FFFFFF?text=Map+View'; }}
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-primary p-2 rounded-full shadow-lg">
                <span className="material-symbols-outlined text-white">location_on</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceInProgress;