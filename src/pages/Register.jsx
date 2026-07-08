// pages/Register.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [showOtp, setShowOtp] = useState(false);
  const [pass1Visible, setPass1Visible] = useState(false);
  const [pass2Visible, setPass2Visible] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowOtp(true);
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      const next = document.getElementById(`otp-${index + 1}`);
      if (next) next.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prev = document.getElementById(`otp-${index - 1}`);
      if (prev) prev.focus();
    }
  };

  const handleOtpConfirm = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col md:flex-row">
      {/* Left - Hero */}
      <div className="hidden md:flex relative w-1/2 bg-primary p-8 flex-col justify-center overflow-hidden min-h-[600px]">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800)'
        }}></div>
        <div className="relative z-10 max-w-lg text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">ចូលរួមជាមួយ ហៅជាង</h1>
          <p className="text-primary-fixed text-lg mb-6">កក់អ្នកជំនាញសម្រាប់ការងារ បរិក្ខារទឹក អគ្គិសនី និងម៉ាស៊ីនត្រជាក់។</p>
          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur p-4 rounded-xl flex items-center border border-white/20">
              <span className="material-symbols-outlined text-secondary-fixed text-3xl mr-4">verified_user</span>
              <div>
                <h3 className="text-white font-bold">Verified Technicians</h3>
                <p className="text-primary-fixed text-sm">បានត្រួតពិនិត្យច្បាស់លាស់</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur p-4 rounded-xl flex items-center border border-white/20">
              <span className="material-symbols-outlined text-secondary-fixed text-3xl mr-4">calendar_month</span>
              <div>
                <h3 className="text-white font-bold">Easy Booking</h3>
                <p className="text-primary-fixed text-sm">កក់ទុកងាយស្រួល</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right - Register Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8 bg-surface-container-low">
        <div className="w-full max-w-[500px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-outline-variant">
          {/* Tabs */}
          <div className="flex border-b border-outline-variant">
            <Link
              to="/login"
              className="flex-1 py-4 text-xl font-semibold text-on-surface-variant hover:bg-surface-container transition text-center"
            >
              ចូលប្រើប្រាស់
            </Link>
            <button className="flex-1 py-4 text-xl font-semibold text-primary border-b-2 border-primary bg-surface-container-high transition">
              បង្កើតគណនី
            </button>
          </div>

          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm text-on-surface block mb-1">ឈ្មោះពេញ</label>
                <input className="input-field" placeholder="បញ្ចូលឈ្មោះ" type="text" required />
              </div>

              <div>
                <label className="text-sm text-on-surface block mb-1">លេខទូរស័ព្ទ</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">+855</span>
                  <input className="input-field pl-20" placeholder="12 345 678" type="tel" required />
                </div>
              </div>

              <div>
                <label className="text-sm text-on-surface block mb-1">អ៊ីមែល (មិនបង្ខំ)</label>
                <input className="input-field" placeholder="example@mail.com" type="email" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-on-surface block mb-1">លេខសម្ងាត់</label>
                  <div className="relative">
                    <input
                      className="input-field pr-12"
                      id="pass1"
                      placeholder="••••••••"
                      type={pass1Visible ? 'text' : 'password'}
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant"
                      onClick={() => setPass1Visible(!pass1Visible)}
                    >
                      <span className="material-symbols-outlined text-xl">{pass1Visible ? 'visibility_off' : 'visibility'}</span>
                    </button>
                  </div>
                </div>
                <div>
                  <label className="text-sm text-on-surface block mb-1">បញ្ជាក់</label>
                  <div className="relative">
                    <input
                      className="input-field pr-12"
                      id="pass2"
                      placeholder="••••••••"
                      type={pass2Visible ? 'text' : 'password'}
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant"
                      onClick={() => setPass2Visible(!pass2Visible)}
                    >
                      <span className="material-symbols-outlined text-xl">{pass2Visible ? 'visibility_off' : 'visibility'}</span>
                    </button>
                  </div>
                </div>
              </div>

              <label className="flex items-start gap-3 cursor-pointer pt-2">
                <input type="checkbox" className="mt-1 w-4 h-4 text-secondary border-outline rounded" required />
                <span className="text-xs text-on-surface-variant">
                  ខ្ញុំយល់ព្រមតាម <button type="button" className="text-primary font-bold hover:underline">លក្ខខណ្ឌប្រើប្រាស់</button> និង{' '}
                  <button type="button" className="text-primary font-bold hover:underline">គោលការណ៍ឯកជនភាព</button>
                </span>
              </label>

              <button type="submit" className="btn-secondary w-full text-xl py-4">
                បង្កើតគណនី
              </button>

              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-outline-variant"></div>
                <span className="flex-shrink mx-4 text-xs text-on-surface-variant">ឬបន្តជាមួយ</span>
                <div className="flex-grow border-t border-outline-variant"></div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button type="button" className="flex items-center justify-center gap-2 border border-outline-variant py-3 rounded-xl hover:bg-surface-container transition">
                  <span className="material-symbols-outlined text-[#EA4335]">mail</span>
                  <span className="text-sm">Google</span>
                </button>
                <button type="button" className="flex items-center justify-center gap-2 border border-outline-variant py-3 rounded-xl hover:bg-surface-container transition">
                  <span className="material-symbols-outlined text-[#1877F2]">face_nod</span>
                  <span className="text-sm">Facebook</span>
                </button>
              </div>

              <p className="text-center text-sm text-on-surface-variant pt-4">
                មានគណនីរួចហើយ? <Link to="/login" className="text-primary font-bold hover:underline">ចូលប្រើប្រាស់</Link>
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* OTP Modal */}
      <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ${
        showOtp ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="absolute inset-0 bg-primary/40 backdrop-blur-sm" onClick={() => setShowOtp(false)}></div>
        <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 text-center animate-success">
          <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="material-symbols-outlined text-primary text-3xl">sms</span>
          </div>
          <h2 className="text-2xl font-bold text-primary mb-2">បញ្ជាក់លេខទូរស័ព្ទ</h2>
          <p className="text-base text-on-surface-variant mb-6">
            លេខកូដ ៦ ខ្ទង់ត្រូវបានផ្ញើទៅ <span className="font-bold text-on-surface">012 345 678</span>
          </p>
          <div className="flex justify-center gap-2 mb-6">
            {otp.map((digit, i) => (
              <input
                key={i}
                id={`otp-${i}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleOtpChange(i, e.target.value)}
                onKeyDown={(e) => handleOtpKeyDown(i, e)}
                className="w-12 h-14 text-center text-2xl font-bold border-2 border-outline-variant rounded-xl focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition"
              />
            ))}
          </div>
          <button
            onClick={handleOtpConfirm}
            className="btn-primary w-full text-sm py-4"
          >
            បញ្ជាក់
          </button>
          <div className="text-sm mt-4">
            <span className="text-on-surface-variant">មិនបានទទួល? </span>
            <button type="button" className="text-secondary font-bold hover:underline">ផ្ញើឡើងវិញ</button>
          </div>
          <button
            className="absolute top-4 right-4 text-on-surface-variant hover:text-error transition"
            onClick={() => setShowOtp(false)}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;