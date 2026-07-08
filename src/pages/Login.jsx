// pages/Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: ត្រួតពិនិត្យ phone/password ជាមួយ backend មុននឹង login()
    login(); // កំណត់ថា user login ហើយ → Header នឹងប្តូរដោយស្វ័យប្រវត្តិ
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
            Call a Pro – Expert<br />Repair at Your Door
          </h1>
          <p className="text-on-primary-container text-lg mb-6">
            Trusted home repair experts at your fingertips.
          </p>
          <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-on-secondary-container">verified</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm">Certified Experts Only</p>
                <p className="text-on-primary-container text-xs">Background checked professionals.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">bolt</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm">Fast Service Response</p>
                <p className="text-on-primary-container text-xs">Emergency repairs in under 60 mins.</p>
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
              Login
            </button>
            <Link
              to="/register"
              className="flex-1 py-4 text-xl font-semibold text-on-surface-variant hover:bg-surface-container transition text-center"
            >
              Create Account
            </Link>
          </div>

          <div className="p-6">
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="text-sm font-medium text-on-surface block mb-1">Phone Number</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline text-xl">phone</span>
                  <input
                    className="input-field pl-10"
                    placeholder="012 345 678"
                    type="tel"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-on-surface block mb-1">Password</label>
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
                  <span className="text-sm text-on-surface-variant">Remember me</span>
                </label>
                <button type="button" className="text-sm text-primary hover:underline">Forgot password?</button>
              </div>

              <button type="submit" className="btn-primary w-full text-lg py-4">
                Login
              </button>

              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-outline-variant"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-4 text-outline">Or use</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button type="button" className="flex items-center justify-center gap-2 py-3 border border-outline-variant rounded-xl hover:bg-surface-container transition">
                  <span className="material-symbols-outlined text-[#EA4335]">mail</span>
                  <span className="text-sm">Google</span>
                </button>
                <button type="button" className="flex items-center justify-center gap-2 py-3 border border-outline-variant rounded-xl hover:bg-surface-container transition">
                  <span className="material-symbols-outlined text-[#1877F2]">face_nod</span>
                  <span className="text-sm">Facebook</span>
                </button>
              </div>

              <p className="text-center text-sm text-on-surface-variant pt-2">
                Don't have an account?{' '}
                <Link to="/register" className="text-primary font-bold hover:underline">Create Account</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;