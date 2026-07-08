// src/pages/ServiceInProgress.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceInProgress = () => {
  return (
    <div className="container-custom py-6 md:py-10 animate-enter">
      {/* Hero */}
      <div className="bg-primary text-white rounded-2xl p-6 md:p-10 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Repair in Progress</h1>
        <p className="text-lg text-on-primary-container opacity-90">Technician has arrived and started working...</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Progress */}
        <div className="lg:col-span-8 space-y-6">
          {/* Progress Card */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/30 relative">
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-secondary progress-pulse"></span> Repairing
              </span>
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-6">
              <div className="w-20 h-20 rounded-xl overflow-hidden shadow-sm">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEHAXZi2lApSeE-Ogm91qJIGimIJiln3pVfc2Z_6InbRMAdRi8GPoGgWxO8uTb1ZHsfPTYou_EaFe7yiQojgEAUExS5_Xt0LtLjoRXgsGk4H4MR4YXbL91qpCaxg82jnJtzsm8P7EUMF5WOKSOud9JpiF6Ke5VP9ZiCUoE7nnBMfnrjUltCXzaCLHSc5PcHEeu-PchRBpa3A1-62Q5qnI7yMNmLSPlUSo1vTtWPGRLE4SYLh7whSdHyON5WOv7QZ0pRGzz-PV57tc" alt="Technician" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary">Technician Vannak</h3>
                <p className="text-base text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-secondary text-sm">star</span> 4.9 (120 jobs) • Specialized: Air Conditioner
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant">Work Progress</span>
                <span className="text-primary font-bold">68%</span>
              </div>
              <div className="w-full h-3 bg-surface-container-high rounded-full overflow-hidden">
                <div className="h-full bg-primary transition-all duration-1000" style={{ width: '68%' }}></div>
              </div>
              <p className="text-sm text-on-surface-variant italic mt-2">Cleaning filters and checking gas levels...</p>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/20">
              <h4 className="text-sm text-primary uppercase tracking-wider mb-4">Booking Information</h4>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant">construction</span>
                  <div>
                    <p className="text-xs text-on-surface-variant">Service</p>
                    <p className="text-sm font-medium text-primary">Air Conditioner Cleaning (2 Units)</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant">schedule</span>
                  <div>
                    <p className="text-xs text-on-surface-variant">Time</p>
                    <p className="text-sm font-medium text-primary">Today, 09:00 AM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/20">
              <h4 className="text-sm text-primary uppercase tracking-wider mb-4">Location</h4>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-on-surface-variant">location_on</span>
                <div>
                  <p className="text-xs text-on-surface-variant">Address</p>
                  <p className="text-sm font-medium text-primary">House #123, Street 456, Boeung Kork 1</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Timeline */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-outline-variant/20">
            <h4 className="text-xl font-bold text-primary mb-6">Work Timeline</h4>
            <div className="relative space-y-6 pl-6 border-l-2 border-surface-container-high">
              {[
                { label: 'Booking Confirmed', time: '08:00 AM', active: true },
                { label: 'Technician En Route', time: '08:30 AM', active: true },
                { label: 'Technician Arrived', time: '09:00 AM', active: true },
                { label: 'Repair in Progress', time: 'Ongoing...', active: true, current: true },
                { label: 'Job Completed', time: 'Pending', active: false }
              ].map((step, idx) => (
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
            <button className="w-full py-4 bg-outline-variant text-on-primary-container font-bold rounded-xl cursor-not-allowed transition grayscale" disabled>
              Waiting for E-Invoice
            </button>
            <Link to="/help">
              <button className="w-full py-4 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary/5 transition flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">support_agent</span> Contact Us
              </button>
            </Link>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden h-48 border border-outline-variant/30 bg-surface-container flex items-center justify-center relative">
            <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{
              backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuAJMhOktC4Ht13r4Wt9c_LqxryTxD-7ZagOFDeiDYaBS5wBKc1GnRmb5zHTvwxzwwua7WfN3Rt1LI66mELCkcY88Br0dzSC2HUFmi_yJmW5Z7J4bIkZrkC59fWXp4_bpB8STDVKxL4SUcPefNOduYZsgkshDd_J64ufAsvKV3w8nudSqHZ7HksIukhW_53-g-QMuBaJ5ZhpTRI7Yg13_-P72-lgeF9cka77E8m6AzD5B-TKtV5QBrxwezZSeNcfeRf8nEdouRLuK04)'
            }}></div>
            <div className="relative z-10 bg-primary p-2 rounded-full shadow-lg">
              <span className="material-symbols-outlined text-white">person_pin_circle</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceInProgress;