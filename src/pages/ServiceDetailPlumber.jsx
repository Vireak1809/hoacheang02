// pages/ServiceDetailPlumber.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ServiceDetailPlumber = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    { id: 1, q: 'How long will it take for the plumber to arrive?', a: 'On average, our plumber will arrive at your location within 30 to 60 minutes, depending on distance and traffic in Phnom Penh.' },
    { id: 2, q: 'Do you provide the replacement materials?', a: 'Our plumbers carry some standard spare parts with them. However, if specific materials are required, the plumber can purchase them for you, and the cost will be charged based on the actual invoice.' },
    { id: 3, q: 'Is there a warranty on the repair?', a: 'Yes! We offer a 14-day warranty on the same repair. If the issue recurs within this period, we will send a plumber to re-inspect at no extra charge.' }
  ];

  const problems = [
    { icon: 'plumbing', label: 'Leaking Pipes', desc: 'Fix broken or leaking water pipes' },
    { icon: 'wash', label: 'Clogged Toilet', desc: 'Unblock and clean toilet or drain blockages' },
    { icon: 'water_damage', label: 'Broken Faucet', desc: 'Replace faucets and bathroom fixtures' },
    { icon: 'propane_tank', label: 'Water Pump Broken', desc: 'Repair and install water pumps' },
    { icon: 'water_drop', label: 'No Water / Low Pressure', desc: 'Inspect and resolve low water pressure issues' },
    { icon: 'construction', label: 'New Plumbing Installation', desc: 'Set up an entire household water system' }
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
            <span className="text-primary font-bold">Plumber</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-container text-white py-12 md:py-20">
        <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 md:space-y-6">
            <span className="px-3 py-1 bg-secondary text-white rounded-full text-sm inline-block">Expert Service</span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">Plumbing Service</h1>
            <p className="text-lg text-surface-variant max-w-lg">
              Repair and resolve household water issues such as leaking pipes, clogged toilets, broken faucets, and water pumps.
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
                alt="Professional plumbing service"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida/AP1WRLs7wB22tgCXYqc3yCN3JQXXlF_A9mGPJTRkXYrJRBNIYwlYfkmB0BEHIb-6wlF8cS6mVP0QbrR6KVgFi8A9zDWW0b2YIn6uzp5bdjv_SFRY2iHzZVR7XbJIJR9RWulqKvGqxLnMBfPU4HQUjRmOGt_zjWlxGz2_GwyUcRMWDpv2skELRxSEjQ_HNrNmVFEtO_q2plvq5V3pTk-eeW3v9ANnImAfjcGg2KxFtVvJjQV_vqKdVV7bH8GVrig"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-12 md:py-16 bg-surface">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Problems Our Plumbers Can Solve</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto mt-2">Expertly handling all types of plumbing system issues</p>
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

      {/* Booking Steps */}
      <section className="py-12 md:py-16 bg-surface-container">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">How to Book a Plumbing Service</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {[
              { num: '1', label: 'Login or Create Account' },
              { num: '2', label: 'Select Plumbing Service' },
              { num: '3', label: 'Describe Issue & Upload Photos' },
              { num: '4', label: 'Set Location on Map' },
              { num: '5', label: 'Choose a Nearby Plumber' },
              { num: '6', label: 'Receive Service & E-Invoice' }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg md:text-2xl shadow-lg border-4 border-surface">
                  {step.num}
                </div>
                <h4 className="text-xs md:text-sm font-bold text-primary">{step.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notice */}
      <section className="py-6 md:py-8">
        <div className="container-custom">
          <div className="bg-surface-container-high rounded-2xl p-4 md:p-8 flex flex-col md:flex-row items-center gap-4 md:gap-6 border-l-8 border-secondary shadow-sm">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-secondary text-white rounded-full flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-3xl md:text-4xl">receipt_long</span>
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-lg md:text-2xl font-bold text-primary">Transparent Pricing</h3>
              <p className="text-sm md:text-base text-on-surface-variant">
                The final price will be shown in the E-Invoice after the plumber completes the work.
              </p>
            </div>
            <button className="px-4 md:px-6 py-2 bg-primary text-white rounded-lg font-bold shrink-0 hover:opacity-90 transition">
              Emergency Call: 099 999 999
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

export default ServiceDetailPlumber;