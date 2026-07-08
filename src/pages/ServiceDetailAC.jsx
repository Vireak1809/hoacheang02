// src/pages/ServiceDetailAC.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ServiceDetailAC = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      id: 1,
      q: 'How often should I clean my air conditioner?',
      a: 'Generally, you should clean your air conditioner every 3 to 6 months to ensure fresh air and save energy.'
    },
    {
      id: 2,
      q: 'Why is water leaking from my air conditioner?',
      a: 'The main cause is a clogged drain pipe or excessive dust in the drip tray. Our technician can quickly clean and fix this issue.'
    },
    {
      id: 3,
      q: 'How much does a gas refill cost?',
      a: 'The cost depends on the type of gas (R22, R32, R410A) and the amount needed. The technician will inspect and inform you of the price before proceeding.'
    }
  ];

  const problems = [
    { icon: 'ac_unit', label: 'Not Cooling', desc: 'Inspect and fix cooling issues' },
    { icon: 'opacity', label: 'Water Leak', desc: 'Repair water leaking from the unit' },
    { icon: 'power_off', label: 'Not Turning On', desc: 'Check electrical system and parts' },
    { icon: 'cleaning_services', label: 'AC Cleaning', desc: 'Deep clean to remove dust and bacteria' },
    { icon: 'gas_meter', label: 'Gas Refill', desc: 'Check and refill refrigerant to spec' },
    { icon: 'home_repair_service', label: 'Install / Relocate', desc: 'New installation or moving existing unit' }
  ];

  return (
    <div className="animate-enter">
      {/* Breadcrumb */}
      <div className="bg-surface-container-low py-3 border-b border-outline-variant">
        <div className="container-custom">
          <nav className="flex items-center text-sm text-on-surface-variant gap-1 flex-wrap">
            <Link to="/" className="hover:text-primary transition">Home</Link>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <Link to="/services" className="hover:text-primary transition">Services</Link>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span className="text-primary font-bold">Air Conditioner</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-container text-white py-12 md:py-20">
        <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 md:space-y-6">
            <span className="px-3 py-1 bg-secondary text-white rounded-full text-sm inline-block">Expert Service</span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">Air Conditioner Service</h1>
            <p className="text-lg text-surface-variant max-w-lg">
              Clean, repair, maintain, gas refill, and install air conditioners by trusted professional technicians.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/login" className="px-6 py-3 md:px-8 md:py-4 bg-secondary text-white rounded-xl font-bold hover:scale-105 transition shadow-lg">
                Login to Book Service
              </Link>
              <Link to="/how-it-works" className="px-6 py-3 md:px-8 md:py-4 border border-white text-white rounded-xl font-bold hover:bg-white/10 transition">
                See How It Works
              </Link>
            </div>
          </div>
          <div className="hidden md:block relative h-[300px] md:h-[400px]">
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida/AP1WRLsaLLB6GcGb9J5nK1uotGYtM3KM2hVCbOCH5k_sjLsQRXf8nxHZLve4S2rRG7itxbqlqObAQ5neQAg-q9Kpp7xudyjlyFwjQRNrdJ9FvfO7t4XCif29c-Ken27xKQeFiILUIWoVvOfyuPLIQRjr-yOtv5gOjKleKeXLAxxWUmmZQaYCWEl1TgDFuZ_2QgcmqWP10xohSMxNc26x32hyRrUJzlAVEqiWOBqvdzEtliq6MR-eTQwJxTv7DPA"
                alt="AC Technician"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-12 md:py-16 bg-surface">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">AC Problems We Can Solve</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto mt-2">No matter how big or small the issue, our team will arrive at your location promptly.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {problems.map((p, idx) => (
              <div key={idx} className="p-4 md:p-6 rounded-xl bg-white shadow-sm border border-outline-variant hover:border-primary hover:shadow-md transition-all group text-center space-y-2">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-primary-container/10 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition">
                  <span className="material-symbols-outlined text-primary text-3xl md:text-4xl">{p.icon}</span>
                </div>
                <h3 className="text-base md:text-xl font-bold text-primary">{p.label}</h3>
                <p className="text-xs md:text-sm text-on-surface-variant">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 md:py-16 bg-surface-container-low">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Why Maintain Your Air Conditioner?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: 'speed', label: 'Cools faster' },
              { icon: 'energy_savings_leaf', label: 'Reduces electricity consumption' },
              { icon: 'air', label: 'Reduces dust and odors' },
              { icon: 'calendar_today', label: 'Extends unit lifespan' },
              { icon: 'water_drop', label: 'Prevents water leaks' },
              { icon: 'report_problem', label: 'Prevents major breakdowns' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-4 md:p-6 rounded-xl shadow-sm flex items-start gap-3 md:gap-4">
                <span className="material-symbols-outlined text-secondary text-2xl md:text-3xl">{item.icon}</span>
                <span className="text-sm md:text-base text-on-surface">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notice */}
      <section className="py-6 md:py-8">
        <div className="container-custom">
          <div className="bg-secondary-container/10 rounded-2xl p-4 md:p-8 flex flex-col md:flex-row items-center gap-4 md:gap-6 border-l-8 border-secondary shadow-sm">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-secondary text-white rounded-full flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-3xl md:text-4xl">payments</span>
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-lg md:text-2xl font-bold text-on-secondary-container">Clear Pricing After Inspection</h3>
              <p className="text-sm md:text-base text-on-surface-variant">
                The final price will be shown in the E‑Invoice after the technician completes the work.
              </p>
            </div>
            <button className="px-4 md:px-6 py-2 bg-secondary text-white rounded-lg font-bold shrink-0 hover:opacity-90 transition">
              Ask for Info
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="container-custom max-w-2xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="border border-outline-variant rounded-xl overflow-hidden bg-white shadow-sm">
                <button
                  className="w-full flex justify-between items-center p-4 md:p-5 hover:bg-surface transition-colors"
                  onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}
                >
                  <span className="text-base md:text-lg font-medium text-left text-on-surface">{faq.q}</span>
                  <span className={`material-symbols-outlined transition-transform duration-300 ${activeFaq === faq.id ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${activeFaq === faq.id ? 'max-h-60 p-4 md:p-5 pt-0' : 'max-h-0'}`}>
                  <div className="border-t border-outline-variant pt-3 text-sm md:text-base text-on-surface-variant">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailAC;