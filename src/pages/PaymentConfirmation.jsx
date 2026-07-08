// pages/PaymentConfirmation.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  pageTitle: { km: 'បញ្ជាក់ការបង់ប្រាក់', en: 'Confirm Payment' },
  pageSubtitle: { km: 'សូមជ្រើសរើសវិធីសាស្ត្របង់ប្រាក់', en: 'Please choose a payment method' },
  paymentMethod: { km: 'វិធីសាស្ត្របង់ប្រាក់', en: 'Payment Method' },
  cash: { km: 'បង់ប្រាក់ផ្ទាល់ (Cash)', en: 'Cash Payment' },
  cashDesc: { km: 'បង់ប្រាក់ជូនជាងនៅពេលការងាររួចរាល់', en: 'Pay the technician when the job is done' },
  khqr: { km: 'KHQR (Bakong)', en: 'KHQR (Bakong)' },
  bankTransfer: { km: 'ផ្ទេរតាមធនាគារ', en: 'Bank Transfer' },
  note: { km: 'សូមបង់ប្រាក់ទៅជាងដោយផ្ទាល់ បន្ទាប់ពីការងារបញ្ចប់។ សរុប ', en: 'Please pay the technician directly after the job is completed. Total: ' },
  iHavePaid: { km: 'ខ្ញុំបានបង់ប្រាក់រួច', en: 'I have paid' },
  processing: { km: 'កំពុងដំណើរការ...', en: 'Processing...' },
  back: { km: 'ត្រឡប់ក្រោយ', en: 'Go Back' },
  successTitle: { km: 'ការបង់ប្រាក់ទទួលបានជោគជ័យ', en: 'Payment Successful' },
  successDesc: { km: 'ជាងបានទទួលការបញ្ជាក់ការបង់ប្រាក់', en: 'The technician has received payment confirmation' },
  downloadInvoice: { km: 'ទាញយកវិក្កយបត្រ', en: 'Download Invoice' },
  backToHome: { km: 'ត្រឡប់ទៅទំព័រដើម', en: 'Back to Home' },
  summaryTitle: { km: 'សេចក្តីសង្ខេប', en: 'Summary' },
  service: { km: 'សេវាកម្ម', en: 'Service' },
  serviceName: { km: 'ជួសជុលម៉ាស៊ីនត្រជាក់', en: 'AC Repair' },
  date: { km: 'កាលបរិច្ឆេទ', en: 'Date' },
  dateValue: { km: '១៥ វិច្ឆិកា ២០២៤', en: '15 November 2024' },
  total: { km: 'សរុប', en: 'Total' },
  technician: { km: 'ជាងជំនាញ', en: 'Technician' },
  techName: { km: 'សុខ វណ្ណៈ', en: 'Sok Vannak' },
  techRating: { km: '4.9 (124 reviews)', en: '4.9 (124 reviews)' },
};

const PaymentConfirmation = () => {
  const { lang } = useLanguage();
  const t = (key) => translations[key]?.[lang] || key;

  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleConfirm = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  return (
    <div className="container-custom py-6 md:py-10 animate-enter">
      <div className="max-w-[900px] mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">{t('pageTitle')}</h1>
          <p className="text-base text-on-surface-variant">{t('pageSubtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 space-y-6">
            {/* Payment Methods */}
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant">
              <h2 className="text-2xl font-bold text-primary mb-4">{t('paymentMethod')}</h2>
              <div className="space-y-4">
                <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition ${
                  paymentMethod === 'cash'
                    ? 'border-primary bg-primary-container/10'
                    : 'border-outline-variant hover:border-primary/50'
                }`}>
                  <input
                    checked={paymentMethod === 'cash'}
                    className="w-5 h-5 text-primary border-outline focus:ring-primary"
                    name="payment"
                    type="radio"
                    value="cash"
                    onChange={() => setPaymentMethod('cash')}
                  />
                  <div className="ml-4 flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">payments</span>
                    <div>
                      <p className="text-sm font-medium text-primary">{t('cash')}</p>
                      <p className="text-xs text-on-surface-variant">{t('cashDesc')}</p>
                    </div>
                  </div>
                </label>

                <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition ${
                  paymentMethod === 'khqr'
                    ? 'border-primary bg-primary-container/10'
                    : 'border-outline-variant hover:border-primary/50'
                }`}>
                  <input
                    className="w-5 h-5 text-primary border-outline focus:ring-primary"
                    name="payment"
                    type="radio"
                    value="khqr"
                    onChange={() => setPaymentMethod('khqr')}
                  />
                  <div className="ml-4 flex items-center gap-3">
                    <span className="material-symbols-outlined text-on-surface-variant">qr_code_2</span>
                    <div>
                      <p className="text-sm font-medium">{t('khqr')}</p>
                    </div>
                  </div>
                </label>

                <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition ${
                  paymentMethod === 'bank'
                    ? 'border-primary bg-primary-container/10'
                    : 'border-outline-variant hover:border-primary/50'
                }`}>
                  <input
                    className="w-5 h-5 text-primary border-outline focus:ring-primary"
                    name="payment"
                    type="radio"
                    value="bank"
                    onChange={() => setPaymentMethod('bank')}
                  />
                  <div className="ml-4 flex items-center gap-3">
                    <span className="material-symbols-outlined text-on-surface-variant">account_balance</span>
                    <div>
                      <p className="text-sm font-medium">{t('bankTransfer')}</p>
                    </div>
                  </div>
                </label>
              </div>

              <div className="mt-4 p-4 bg-secondary-fixed/20 border-l-4 border-secondary rounded-r-lg">
                <p className="text-sm text-on-secondary-fixed-variant">
                  {t('note')}<span className="font-bold text-primary">$41.50</span>
                </p>
              </div>
            </div>

            {/* Pending View */}
            {!isSuccess && (
              <div className="space-y-3">
                <button
                  onClick={handleConfirm}
                  disabled={isProcessing}
                  className="w-full py-4 bg-primary text-white rounded-xl text-xl font-bold shadow-lg hover:opacity-90 transition disabled:opacity-70"
                >
                  {isProcessing ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined animate-spin">sync</span> {t('processing')}
                    </span>
                  ) : (
                    t('iHavePaid')
                  )}
                </button>
                <Link to="/invoice">
                  <button className="w-full py-4 border border-outline text-primary rounded-xl text-sm font-medium hover:bg-surface-container transition">
                    {t('back')}
                  </button>
                </Link>
              </div>
            )}

            {/* Success View */}
            {isSuccess && (
              <div className="bg-surface-container-high p-8 rounded-xl border border-primary/20 text-center shadow-xl animate-success">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
                  <span className="material-symbols-outlined text-white text-5xl">check_circle</span>
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">{t('successTitle')}</h3>
                <p className="text-base text-on-surface mb-6">{t('successDesc')}</p>
                <div className="flex flex-col gap-3">
                  <Link to="/invoice">
                    <button className="w-full py-4 bg-secondary text-white rounded-xl text-lg font-bold shadow-md flex items-center justify-center gap-2 hover:opacity-90 transition">
                      <span className="material-symbols-outlined">download</span> {t('downloadInvoice')}
                    </button>
                  </Link>
                  <Link to="/dashboard">
                    <button className="w-full py-4 text-primary font-medium hover:underline">{t('backToHome')}</button>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Right: Summary */}
          <div className="md:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant">
                <h3 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">{t('summaryTitle')}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant text-sm">{t('service')}</span>
                    <span className="font-bold text-sm">{t('serviceName')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant text-sm">{t('date')}</span>
                    <span className="font-bold text-sm">{t('dateValue')}</span>
                  </div>
                  <hr className="border-outline-variant" />
                  <div className="flex justify-between py-2">
                    <span className="text-primary font-bold text-xl">{t('total')}</span>
                    <span className="text-primary font-bold text-2xl">$41.50</span>
                  </div>
                </div>
              </div>

              {/* Technician */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-outline-variant flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary-container">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFG9_Tv6WbLH4GVw-0IMbeZQoM48R7xKRO-Yw79O-h738LakCeqbQmfsdNCBq-Uzd3mCoWzFSbL5h-fAxEwYjZpTmlrdtULRNDg1j-fgxMyEIKdb3_F7V2LCM8y4yic7KSLQ2zwQQL1DOEPX-yhr1E_L7btvmI_ZrLetAIytm5bebFgQElBEsboK0ZgiZNpf3ndDDejdJxBto7B947e9Bhf69UrDjusMSYdbRE4DLCJCkfW0Q0XZqliQVk4WVO04A1Gyo1nZlZyMk"
                    alt="Tech"
                  />
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant">{t('technician')}</p>
                  <p className="text-xl font-bold text-primary">{t('techName')}</p>
                  <div className="flex items-center text-secondary text-sm">
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="ml-1 font-bold">{t('techRating')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirmation;