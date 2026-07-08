// pages/PaymentConfirmation.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PaymentConfirmation = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold text-primary">បញ្ជាក់ការបង់ប្រាក់</h1>
          <p className="text-base text-on-surface-variant">សូមជ្រើសរើសវិធីសាស្ត្របង់ប្រាក់</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 space-y-6">
            {/* Payment Methods */}
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant">
              <h2 className="text-2xl font-bold text-primary mb-4">វិធីសាស្ត្របង់ប្រាក់</h2>
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
                      <p className="text-sm font-medium text-primary">បង់ប្រាក់ផ្ទាល់ (Cash)</p>
                      <p className="text-xs text-on-surface-variant">បង់ប្រាក់ជូនជាងនៅពេលការងាររួចរាល់</p>
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
                      <p className="text-sm font-medium">KHQR (Bakong)</p>
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
                      <p className="text-sm font-medium">ផ្ទេរតាមធនាគារ</p>
                    </div>
                  </div>
                </label>
              </div>

              <div className="mt-4 p-4 bg-secondary-fixed/20 border-l-4 border-secondary rounded-r-lg">
                <p className="text-sm text-on-secondary-fixed-variant">
                  សូមបង់ប្រាក់ទៅជាងដោយផ្ទាល់ បន្ទាប់ពីការងារបញ្ចប់។ សរុប <span className="font-bold text-primary">$41.50</span>
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
                      <span className="material-symbols-outlined animate-spin">sync</span> កំពុងដំណើរការ...
                    </span>
                  ) : (
                    'ខ្ញុំបានបង់ប្រាក់រួច'
                  )}
                </button>
                <Link to="/invoice">
                  <button className="w-full py-4 border border-outline text-primary rounded-xl text-sm font-medium hover:bg-surface-container transition">
                    ត្រឡប់ក្រោយ
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
                <h3 className="text-3xl font-bold text-primary mb-2">ការបង់ប្រាក់ទទួលបានជោគជ័យ</h3>
                <p className="text-base text-on-surface mb-6">ជាងបានទទួលការបញ្ជាក់ការបង់ប្រាក់</p>
                <div className="flex flex-col gap-3">
                  <Link to="/invoice">
                    <button className="w-full py-4 bg-secondary text-white rounded-xl text-lg font-bold shadow-md flex items-center justify-center gap-2 hover:opacity-90 transition">
                      <span className="material-symbols-outlined">download</span> ទាញយកវិក្កយបត្រ
                    </button>
                  </Link>
                  <Link to="/dashboard">
                    <button className="w-full py-4 text-primary font-medium hover:underline">ត្រឡប់ទៅទំព័រដើម</button>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Right: Summary */}
          <div className="md:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant">
                <h3 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">សេចក្តីសង្ខេប</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant text-sm">សេវាកម្ម</span>
                    <span className="font-bold text-sm">ជួសជុលម៉ាស៊ីនត្រជាក់</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant text-sm">កាលបរិច្ឆេទ</span>
                    <span className="font-bold text-sm">១៥ វិច្ឆិកា ២០២៤</span>
                  </div>
                  <hr className="border-outline-variant" />
                  <div className="flex justify-between py-2">
                    <span className="text-primary font-bold text-xl">សរុប</span>
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
                  <p className="text-xs text-on-surface-variant">ជាងជំនាញ</p>
                  <p className="text-xl font-bold text-primary">សុខ វណ្ណៈ</p>
                  <div className="flex items-center text-secondary text-sm">
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="ml-1 font-bold">4.9 (124 reviews)</span>
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