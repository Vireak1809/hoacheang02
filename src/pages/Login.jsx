import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';

// Facebook SVG Icon (unchanged)
const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    className="bi bi-facebook"
    viewBox="0 0 16 16"
  >
    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
  </svg>
);

const translations = {
  heroTitle: { km: 'ហៅជាងជំនាញ – ជួសជុលអោយអ្នកភ្លាមៗ', en: 'Call a Pro – Expert Repair at Your Door' },
  heroDesc: { km: 'អ្នកជំនាញផ្ទះដែលអាចទុកចិត្តបាននៅចុងម្រាមដៃអ្នក។', en: 'Trusted home repair experts at your fingertips.' },
  certifiedTitle: { km: 'អ្នកជំនាញដែលបានបញ្ជាក់តែប៉ុណ្ណោះ', en: 'Certified Experts Only' },
  certifiedDesc: { km: 'អ្នកជំនាញដែលបានត្រួតពិនិត្យប្រវត្តិយ៉ាងម៉ត់ចត់។', en: 'Background checked professionals.' },
  fastTitle: { km: 'ឆ្លើយតបលឿន', en: 'Fast Service Response' },
  fastDesc: { km: 'ជួសជុលបន្ទាន់ក្នុងរយៈពេលតិចជាង ៦០ នាទី។', en: 'Emergency repairs in under 60 mins.' },
  tabLogin: { km: 'ចូលគណនី', en: 'Login' },
  tabRegister: { km: 'បង្កើតគណនី', en: 'Create Account' },
  // Updated field label – now accepts both
  phoneOrEmailLabel: { km: 'លេខទូរស័ព្ទ ឬ អ៊ីមែល', en: 'Phone or Email' },
  phoneOrEmailPlaceholder: { km: '០១២ ៣៤៥ ៦៧៨ ឬ example@email.com', en: '012 345 678 or email@example.com' },
  passwordLabel: { km: 'ពាក្យសម្ងាត់', en: 'Password' },
  rememberMe: { km: 'ចងចាំខ្ញុំ', en: 'Remember me' },
  forgotPassword: { km: 'ភ្លេចពាក្យសម្ងាត់?', en: 'Forgot password?' },
  loginButton: { km: 'ចូលគណនី', en: 'Login' },
  orUse: { km: 'ឬប្រើ', en: 'Or use' },
  googleButton: { km: 'Google', en: 'Google' },
  facebookButton: { km: 'Facebook', en: 'Facebook' },
  noAccount: { km: 'មិនទាន់មានគណនី?', en: "Don't have an account?" },
  createAccountLink: { km: 'បង្កើតគណនី', en: 'Create Account' },
};

const Login = () => {
  const { lang } = useLanguage();
  const t = (key) => translations[key]?.[lang] || key;

  const navigate = useNavigate();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    login();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col md:flex-row">
      {/* Left - Hero (desktop only) */}
      <div className="hidden md:flex relative w-1/2 bg-primary-container p-8 flex-col justify-center overflow-hidden min-h-[600px]">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800)'
        }}></div>
        <div className="relative z-10 max-w-lg">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {t('heroTitle')}
          </h1>
          <p className="text-on-primary-container text-lg mb-6">
            {t('heroDesc')}
          </p>
          <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-on-secondary-container">verified</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm">{t('certifiedTitle')}</p>
                <p className="text-on-primary-container text-xs">{t('certifiedDesc')}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">bolt</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm">{t('fastTitle')}</p>
                <p className="text-on-primary-container text-xs">{t('fastDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8 bg-surface-container-lowest">
        <div className="w-full max-w-[480px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-outline-variant">
          {/* Tabs */}
          <div className="flex border-b border-outline-variant">
            <button className="flex-1 py-4 text-xl font-semibold text-primary border-b-2 border-primary bg-surface-container-low transition">
              {t('tabLogin')}
            </button>
            <Link
              to="/register"
              className="flex-1 py-4 text-xl font-semibold text-on-surface-variant hover:bg-surface-container transition text-center"
            >
              {t('tabRegister')}
            </Link>
          </div>

          <div className="p-6">
            <form onSubmit={handleLogin} className="space-y-5">
              {/* Phone or Email field */}
              <div>
                <label className="text-sm font-medium text-on-surface block mb-1">{t('phoneOrEmailLabel')}</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline text-xl">contact_mail</span>
                  <input
                    className="input-field pl-10"
                    placeholder={t('phoneOrEmailPlaceholder')}
                    type="text"          // allows both phone numbers and emails
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-on-surface block mb-1">{t('passwordLabel')}</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline text-xl">lock</span>
                  <input
                    className="input-field pl-10 pr-12"
                    placeholder="••••••••"
                    type={showPassword ? 'text' : 'password'}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span className="material-symbols-outlined">{showPassword ? 'visibility_off' : 'visibility'}</span>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-outline-variant text-primary" />
                  <span className="text-sm text-on-surface-variant">{t('rememberMe')}</span>
                </label>
                <button type="button" className="text-sm text-primary hover:underline">{t('forgotPassword')}</button>
              </div>

              <button type="submit" className="btn-primary w-full text-lg py-4">
                {t('loginButton')}
              </button>

              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-outline-variant"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-4 text-outline">{t('orUse')}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button type="button" className="flex items-center justify-center gap-2 py-3 border border-outline-variant rounded-xl hover:bg-surface-container transition">
                  <span className="material-symbols-outlined text-[#EA4335]">mail</span>
                  <span className="text-sm">{t('googleButton')}</span>
                </button>
                <button type="button" className="flex items-center justify-center gap-2 py-3 border border-outline-variant rounded-xl hover:bg-surface-container transition">
                  <span className="text-[#1877F2]">
                    <FacebookIcon />
                  </span>
                  <span className="text-sm">{t('facebookButton')}</span>
                </button>
              </div>

              <p className="text-center text-sm text-on-surface-variant pt-2">
                {t('noAccount')}{' '}
                <Link to="/register" className="text-primary font-bold hover:underline">{t('createAccountLink')}</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;