// src/pages/BookingConfirmation.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BookingConfirmation = () => {
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
          <span className="text-primary font-bold text-sm hidden sm:inline">ជ្រើសសេវា</span>
        </div>
        <div className="h-[2px] w-12 bg-primary"></div>
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">2</span>
          <span className="text-primary font-bold text-sm hidden sm:inline">បញ្ជាក់</span>
        </div>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">បញ្ជាក់ការកក់</h1>

      {/* Booking Card */}
      <div className="bg-surface-container-lowest rounded-xl shadow-lg overflow-hidden border border-outline-variant mb-6">
        <div className="bg-primary p-4 flex justify-between items-center text-white">
          <span className="text-xl font-bold">ព័ត៌មានលម្អិត</span>
          <div className="flex items-center gap-2 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-sm font-bold">
            <span className="material-symbols-outlined text-sm">bolt</span> បន្ទាន់
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">home_repair_service</span> ប្រភេទសេវា
              </label>
              <p className="text-xl font-bold text-primary">ជួសជុលម៉ាស៊ីនត្រជាក់</p>
            </div>
            <div>
              <label className="text-sm text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">report_problem</span> បញ្ហា
              </label>
              <p className="text-base">ម៉ាស៊ីនមិនត្រជាក់ និងមានសំឡេងរំខាន</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-4 p-4 bg-surface-container rounded-lg border border-outline-variant">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjjb9OCqt24dnutMfFzLfoEMPLZcHKJULMGzXBxbvx5pDWEvGM2aEr7hSp0k-6t4WmPK_te0t6JbR4ZzIVHQJ-vRZ7gy0cviZo-yY6I7ZzqAi86FCyuyALuRnm2NQkojP_KDru1WrtZtDKxDdXqGv7g8rgUkxeVKGHOs_VM_-xLAte087afxnWbDFBULNDXp_7OZ_kgxM3yfGDw6di53oGbULLI4fas5aM0DbTL3Arme01YKgmFCVVUm98PJQvE2yhZQd2cjbxO40" alt="Tech" />
              </div>
              <div>
                <label className="text-xs text-on-surface-variant">ជាងបច្ចេកទេស</label>
                <p className="font-bold text-primary">លោក ចាន់ ធី</p>
                <div className="flex text-secondary items-center text-sm">
                  <span className="material-symbols-outlined text-sm">star</span>
                  <span className="ml-1">4.9 (120 ការកក់)</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-surface-container rounded-lg border border-outline-variant">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">schedule</span>
              </div>
              <div>
                <label className="text-xs text-on-surface-variant">ពេលវេលាមកដល់</label>
                <p className="font-bold text-primary">ក្នុងរយៈពេល ៣០ នាទី</p>
                <p className="text-xs">ប៉ាន់ស្មាន៖ ១០:៤៥ ព្រឹក</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-outline-variant">
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <div>
                <label className="text-xs text-on-surface-variant">អាសយដ្ឋាន</label>
                <p className="text-base">ផ្ទះលេខ ១២៣, ផ្លូវ ៤៥៦, បឹងកក់១, ភ្នំពេញ</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-primary">call</span>
              <div>
                <label className="text-xs text-on-surface-variant">លេខទូរស័ព្ទ</label>
                <p className="text-base">០១២ ៣៤៥ ៦៧៨</p>
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="p-6 bg-primary-container rounded-xl text-white">
            <div className="flex justify-between items-center">
              <span className="text-on-primary-container text-sm">តម្លៃសេវាបឋម</span>
              <span className="text-2xl font-bold text-secondary-fixed">$15.00</span>
            </div>
            <div className="flex gap-2 text-on-primary-container italic text-sm mt-4 border-t border-white/10 pt-4">
              <span className="material-symbols-outlined text-sm">info</span>
              <p>តម្លៃចុងក្រោយនឹងបង្ហាញក្នុង E-Invoice</p>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col md:flex-row gap-4 mt-6">
        <button onClick={handleConfirm} className="flex-1 bg-secondary text-white py-4 rounded-xl font-bold text-xl shadow-lg hover:opacity-90 transition flex items-center justify-center gap-2">
          បញ្ជាក់ការកក់
        </button>
        <Link to="/technicians" className="md:w-1/3 border-2 border-primary text-primary py-4 rounded-xl font-bold text-xl text-center hover:bg-primary/5 transition">
          ត្រឡប់ក្រោយ
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
          <h2 className="text-3xl font-bold text-primary mb-2">ការកក់បានបញ្ជូន</h2>
          <p className="text-base text-on-surface-variant mb-6">ជាងនឹងទាក់ទងមកអ្នកក្នុងពេលឆាប់ៗនេះ។</p>
          <div className="space-y-3">
            <Link to="/service/in-progress">
              <button className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:opacity-90 transition">
                តាមដានការកក់
              </button>
            </Link>
            <button onClick={() => setShowModal(false)} className="w-full text-on-surface-variant font-medium py-2 hover:underline">
              ត្រឡប់ទៅទំព័រដើម
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;