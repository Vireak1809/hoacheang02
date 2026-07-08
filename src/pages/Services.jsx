// pages/Services.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: 'water_drop',
      title: 'Plumber (Plumbing)',
      items: ['Water leaks', 'Drain & toilet clogs', 'Faucet installation', 'Water pump repair'],
      link: '/service/plumber'
    },
    {
      icon: 'bolt',
      title: 'Electrician (Electrical)',
      items: ['Power outages', 'Appliance installation', 'Rewiring', 'Fuse box repair'],
      link: '/service/electrician'
    },
    {
      icon: 'ac_unit',
      title: 'Air Conditioner (AC)',
      items: ['AC cleaning', 'Gas refill', 'AC repair', 'New AC installation'],
      link: '/service/ac'
    }
  ];

  return (
    <div className="container-custom py-6 md:py-10 animate-enter">
      {/* Hero */}
      <div className="bg-primary-container rounded-2xl p-6 md:p-10 text-white text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-on-primary-container text-lg max-w-2xl mx-auto">
          Find trusted professional technicians for all types of home repair services.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((svc, idx) => (
          <div key={idx} className="glass-card rounded-2xl p-6 flex flex-col h-full card-hover border border-outline-variant/30">
            <div className="w-16 h-16 bg-primary-container rounded-xl flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-white text-4xl">{svc.icon}</span>
            </div>
            <h2 className="text-2xl font-bold text-primary mb-4">{svc.title}</h2>
            <ul className="space-y-2 mb-auto text-sm">
              {svc.items.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link to={svc.link}>
              <button className="mt-6 w-full btn-primary text-sm">
                View Service
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Why Us */}
      <section className="mt-12 md:mt-16 bg-surface-container-low rounded-2xl p-6 md:p-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-4">
            <h3 className="text-3xl font-bold text-primary">Why Choose Hao Chang?</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-secondary/10 rounded-full"><span className="material-symbols-outlined text-secondary">verified_user</span></div>
                <div>
                  <h4 className="font-bold text-on-surface">Skilled Technicians</h4>
                  <p className="text-sm text-on-surface-variant">All technicians have at least 3 years of experience</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-secondary/10 rounded-full"><span className="material-symbols-outlined text-secondary">timer</span></div>
                <div>
                  <h4 className="font-bold text-on-surface">Fast Response</h4>
                  <p className="text-sm text-on-surface-variant">Technician arrives within 30 minutes</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-secondary/10 rounded-full"><span className="material-symbols-outlined text-secondary">receipt_long</span></div>
                <div>
                  <h4 className="font-bold text-on-surface">Clear E-Invoice</h4>
                  <p className="text-sm text-on-surface-variant">Receive electronic invoice immediately</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl bg-cover bg-center" style={{
              backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuCUtUtnQHaqqPpydvE5SmFeafNcEotirxoM3KUQjN77JtCrbRxPVBCfuFt2eYP42sXxWpgzLusJKtan2nwOHXwqc3iXH5Ow7UF7XQbFwYmlRe6JLvHXonDg_bcs4l28kKvbN82YR6a_v799ipw92p1-_Z-7QFbdAsgh0KHA_NGVyDqPQUVN6Oqs73-fVhwzGr8jbvFFSXwLl31kvfTG1gfmUJDk89LLcRSeeV7Yi4BiizOAPaiNaw68w_w3S3gzI7UOdhEofkjgcm8)'
            }}></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 md:mt-16 bg-primary rounded-2xl p-6 md:p-10 text-white text-center">
        <h3 className="text-3xl font-bold mb-4">Ready to Book a Service?</h3>
        <p className="text-base text-white/80 mb-6 max-w-xl mx-auto">
          Sign up now to start using our fast and reliable home repair services.
        </p>
        <Link to="/register">
          <button className="px-10 py-4 bg-secondary text-white font-bold rounded-full hover:scale-105 transition shadow-lg">
            Get Started
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Services;