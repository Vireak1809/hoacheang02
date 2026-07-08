// src/pages/BookingConfirmation.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  step1: { km: 'ជ្រើសសេវា', en: 'Select Service' },
  step2: { km: 'បញ្ជាក់', en: 'Confirm' },
  pageTitle: { km: 'បញ្ជាក់ការកក់', en: 'Confirm Booking' },
  detailHeader: { km: 'ព័ត៌មានលម្អិត', en: 'Booking Details' },
  urgentBadge: { km: 'បន្ទាន់', en: 'Urgent' },
  serviceTypeLabel: { km: 'ប្រភេទសេវា', en: 'Service Type' },
  serviceTypeValue: { km: 'ជួសជុលម៉ាស៊ីនត្រជាក់', en: 'AC Repair' },
  problemLabel: { km: 'បញ្ហា', en: 'Problem' },
  problemValue: { km: 'ម៉ាស៊ីនមិនត្រជាក់ និងមានសំឡេងរំខាន', en: 'AC not cooling and making noise' },
  technicianLabel: { km: 'ជាងបច្ចេកទេស', en: 'Technician' },
  technicianName: { km: 'លោក ចាន់ ធី', en: 'Mr. Chan Thy' },
  ratingText: { km: '4.9 (120 ការកក់)', en: '4.9 (120 bookings)' },
  arrivalLabel: { km: 'ពេលវេលាមកដល់', en: 'Estimated Arrival' },
  arrivalValue: { km: 'ក្នុងរយៈពេល ៣០ នាទី', en: 'Within 30 minutes' },
  estimateValue: { km: 'ប៉ាន់ស្មាន៖ ១០:៤៥ ព្រឹក', en: 'Estimated: 10:45 AM' },
  addressLabel: { km: 'អាសយដ្ឋាន', en: 'Address' },
  addressValue: { km: 'ផ្ទះលេខ ១២៣, ផ្លូវ ៤៥៦, បឹងកក់១, ភ្នំពេញ', en: 'House #123, Street 456, Boeung Kak 1, Phnom Penh' },
  phoneLabel: { km: 'លេខទូរស័ព្ទ', en: 'Phone Number' },
  phoneValue: { km: '០១២ ៣៤៥ ៦៧៨', en: '012 345 678' },
  priceLabel: { km: 'តម្លៃសេវាបឋម', en: 'Preliminary Service Fee' },
  priceInfo: { km: 'តម្លៃចុងក្រោយនឹងបង្ហាញក្នុង E-Invoice', en: 'Final price will be shown in E-Invoice' },
  confirmButton: { km: 'បញ្ជាក់ការកក់', en: 'Confirm Booking' },
  backButton: { km: 'ត្រឡប់ក្រោយ', en: 'Go Back' },
  modalTitle: { km: 'ការកក់បានបញ្ជូន', en: 'Booking Submitted' },
  modalSub: { km: 'ជាងនឹងទាក់ទងមកអ្នកក្នុងពេលឆាប់ៗនេះ។', en: 'The technician will contact you shortly.' },
  trackBooking: { km: 'តាមដានការកក់', en: 'Track Booking' },
  backHome: { km: 'ត្រឡប់ទៅទំព័រដើម', en: 'Back to Home' },
};

const BookingConfirmation = () => {
  const { lang } = useLanguage();
  const t = (key) => translations[key]?.[lang] || key;
  const [showModal, setShowModal] = useState(false);

  const handleConfirm = () => {
    setShowModal(true);
  };

  return (
    <div className="container-custom py-6 md:py-10 animate-enter max-w-[800px] mx-auto">
      {/* Stepper */}
      <div className="flex items-center justify-center mb-8 gap-4">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">1</span>
          <span className="text-primary font-bold text-sm hidden sm:inline">{t('step1')}</span>
        </div>
        <div className="h-[2px] w-12 bg-primary"></div>
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">2</span>
          <span className="text-primary font-bold text-sm hidden sm:inline">{t('step2')}</span>
        </div>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">{t('pageTitle')}</h1>

      {/* Booking Card */}
      <div className="bg-surface-container-lowest rounded-xl shadow-lg overflow-hidden border border-outline-variant mb-6">
        <div className="bg-primary p-4 flex justify-between items-center text-white">
          <span className="text-xl font-bold">{t('detailHeader')}</span>
          <div className="flex items-center gap-2 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-sm font-bold">
            <span className="material-symbols-outlined text-sm">bolt</span> {t('urgentBadge')}
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">home_repair_service</span> {t('serviceTypeLabel')}
              </label>
              <p className="text-xl font-bold text-primary">{t('serviceTypeValue')}</p>
            </div>
            <div>
              <label className="text-sm text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">report_problem</span> {t('problemLabel')}
              </label>
              <p className="text-base">{t('problemValue')}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-4 p-4 bg-surface-container rounded-lg border border-outline-variant">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjjb9OCqt24dnutMfFzLfoEMPLZcHKJULMGzXBxbvx5pDWEvGM2aEr7hSp0k-6t4WmPK_te0t6JbR4ZzIVHQJ-vRZ7gy0cviZo-yY6I7ZzqAi86FCyuyALuRnm2NQkojP_KDru1WrtZtDKxDdXqGv7g8rgUkxeVKGHOs_VM_-xLAte087afxnWbDFBULNDXp_7OZ_kgxM3yfGDw6di53oGbULLI4fas5aM0DbTL3Arme01YKgmFCVVUm98PJQvE2yhZQd2cjbxO40" alt="Tech" />
              </div>
              <div>
                <label className="text-xs text-on-surface-variant">{t('technicianLabel')}</label>
                <p className="font-bold text-primary">{t('technicianName')}</p>
                <div className="flex text-secondary items-center text-sm">
                  <span className="material-symbols-outlined text-sm">star</span>
                  <span className="ml-1">{t('ratingText')}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-surface-container rounded-lg border border-outline-variant">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">schedule</span>
              </div>
              <div>
                <label className="text-xs text-on-surface-variant">{t('arrivalLabel')}</label>
                <p className="font-bold text-primary">{t('arrivalValue')}</p>
                <p className="text-xs">{t('estimateValue')}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-outline-variant">
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <div>
                <label className="text-xs text-on-surface-variant">{t('addressLabel')}</label>
                <p className="text-base">{t('addressValue')}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-primary">call</span>
              <div>
                <label className="text-xs text-on-surface-variant">{t('phoneLabel')}</label>
                <p className="text-base">{t('phoneValue')}</p>
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="p-6 bg-primary-container rounded-xl text-white">
            <div className="flex justify-between items-center">
              <span className="text-on-primary-container text-sm">{t('priceLabel')}</span>
              <span className="text-2xl font-bold text-secondary-fixed">$15.00</span>
            </div>
            <div className="flex gap-2 text-on-primary-container italic text-sm mt-4 border-t border-white/10 pt-4">
              <span className="material-symbols-outlined text-sm">info</span>
              <p>{t('priceInfo')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col md:flex-row gap-4 mt-6">
        <button onClick={handleConfirm} className="flex-1 bg-secondary text-white py-4 rounded-xl font-bold text-xl shadow-lg hover:opacity-90 transition flex items-center justify-center gap-2">
          {t('confirmButton')}
        </button>
        <Link to="/technicians" className="md:w-1/3 border-2 border-primary text-primary py-4 rounded-xl font-bold text-xl text-center hover:bg-primary/5 transition">
          {t('backButton')}
        </Link>
      </div>

      {/* Success Modal */}
      <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ${
        showModal ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="absolute inset-0 bg-primary/40 backdrop-blur-sm" onClick={() => setShowModal(false)}></div>
        <div className="bg-white rounded-2xl w-full max-w-md p-8 text-center shadow-2xl animate-success">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-6xl text-green-600">check_circle</span>
          </div>
          <h2 className="text-3xl font-bold text-primary mb-2">{t('modalTitle')}</h2>
          <p className="text-base text-on-surface-variant mb-6">{t('modalSub')}</p>
          <div className="space-y-3">
            <Link to="/service/in-progress">
              <button className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:opacity-90 transition">
                {t('trackBooking')}
              </button>
            </Link>
            <button onClick={() => setShowModal(false)} className="w-full text-on-surface-variant font-medium py-2 hover:underline">
              {t('backHome')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;