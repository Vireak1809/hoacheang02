// src/pages/ServiceDetailElectrician.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ServiceDetailElectrician = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      id: 1,
      q: 'How long does it take for an electrician to arrive?',
      a: 'On average, our electrician will arrive at your location within 20 to 40 minutes, depending on distance and traffic.'
    },
    {
      id: 2,
      q: 'Is there a warranty on the service?',
      a: 'Yes! All repairs come with a 30‑day warranty on the workmanship and parts replaced by us.'
    },
    {
      id: 3,
      q: 'How is the service priced?',
      a: 'Service prices start from $5 and up. The electrician will assess and provide a total cost before starting any work.'
    }
  ];

  const problems = [
    { icon: 'bolt', label: 'Short Circuit', desc: 'Electrical short circuit issues' },
    { icon: 'toggle_off', label: 'Breaker', desc: 'Tripping or broken breaker' },
    { icon: 'power', label: 'Outlet', desc: 'Repair electrical outlets' },
    { icon: 'light', label: 'Switch', desc: 'Replace light switches' },
    { icon: 'settings_input_component', label: 'Wiring', desc: 'Rewiring and electrical cabling' },
    { icon: 'construction', label: 'Installation', desc: 'Install new electrical equipment' }
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
            <span className="text-primary font-bold">Electrician</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-container text-white py-12 md:py-20">
        <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 md:space-y-6">
            <span className="px-3 py-1 bg-secondary text-white rounded-full text-sm inline-block">Priority Service</span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">Electrical Service</h1>
            <p className="text-lg text-surface-variant max-w-lg">
              Repair and maintain electrical systems by highly experienced professionals.
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeasOmYAibJFbclG20qpW1p0z_eIxTzo4kWpJYAAZZtAet5ucBWiVWKeFloBb3jmaQAjHvrKF8rXbsT-xPXl4MvuT9WhPCcrdxaEOkUaKchnlhCDVjP1-FgidtRKNzUCky6Pcu7C-7UZXyYjre77TaQOudAWNzPKz1dSW_bMSuoT5i4fL42s37ovkbJfyb2ypqtD_AAhm-6MCO1GQAvDYZ5X3_B1GwbGyIcjCu0KVn-viHMffIm3rZofkaQTw3XDdktTe8hxI4Zjw"
                alt="Electrician"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-12 md:py-16 bg-surface">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Electrical Problems We Can Solve</h2>
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

      {/* Booking Steps */}
      <section className="py-12 md:py-16 bg-surface-container">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">How to Book a Service</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {[
              { num: '1', label: 'Select Service' },
              { num: '2', label: 'Set Location' },
              { num: '3', label: 'Await Confirmation' },
              { num: '4', label: 'Repair' },
              { num: '5', label: 'Payment' }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-2">
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center font-bold text-lg md:text-2xl shadow-lg border-4 border-surface ${
                  i === 2 ? 'bg-secondary text-white animate-pulse' : 'bg-primary text-white'
                }`}>
                  {step.num}
                </div>
                <h4 className="text-xs md:text-sm font-bold text-primary">{step.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Banner */}
      <section className="py-6 md:py-8">
        <div className="container-custom">
          <div className="bg-error-container rounded-2xl p-4 md:p-8 flex flex-col md:flex-row items-center gap-4 md:gap-6 border-l-8 border-error shadow-sm">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-error text-white rounded-full flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-3xl md:text-4xl">warning</span>
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-lg md:text-2xl font-bold text-on-error-container">Safety First</h3>
              <p className="text-sm md:text-base text-on-error-container/80">
                Do not touch broken wires or electrical devices showing signs of a short circuit by yourself.
              </p>
            </div>
            <button className="px-4 md:px-6 py-2 bg-error text-white rounded-lg font-bold shrink-0 hover:opacity-90 transition">
              Emergency Call 099 999 999
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

export default ServiceDetailElectrician;