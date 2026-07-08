// src/pages/TechnicianProfile.jsx
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const TechnicianProfile = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('about');

  const tech = {
    id: parseInt(id) || 1,
    name: 'Technician Vibol',
    specialty: 'AC Repair & Electrical Systems Specialist',
    rating: 4.9,
    reviews: 120,
    experience: '8 years',
    status: 'Available',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdJxWwdbLcHJhbKQbZQbpVr6UTGxRVErVbZmwmW-1SroowpT5NVSUcjL7i66_1T7WzKSbFuThHh1OxR_BPfRtT_Vubadl5Fi1A3trTjXYPWCHHESsdFAoSoxY4qVpIQeANV2OfeBkwOH6nyCdf01Rfi5ADShnhnWeQFakEaUH71x7yKeSZ7fLX0kadSi5QaQcCiGZw3FMd5EhlYNvpZa53SRdwMwrAEcoZXOmu7rNeiE0Qi_j5vT-GpHMPuOzu-Gv_7RJYbYE23rU',
    about: 'My name is Vibol, with over 8 years of experience installing and repairing all types of air conditioners. I have received advanced technical training and have worked for several major companies in Phnom Penh.',
    skills: ['AC Repair', 'AC Cleaning', 'Electrical System Installation', 'Parts Replacement', 'Wiring'],
    photos: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBFtVG9qNcV_Yam1IdX3gLh1BLrfbuCs9kv-sL3syeLTsP-IOLLmUMYhVgyTE4XHIEkIHPPr6Sw-qGAI1eTRRzNHAVv4t3y2OCDFhR3u-64kEatpDIZnW47LSaDssOThL-f9wlm27UN3DJL1iBtuuINO-guh8pakCgbJL6hKFky0RMS2HG84Org0waNOoNfYrl4XeOYVIWTphPuk92BR14n8MRdVwIpvyNJnhTKIqQbnC2aGPyPCoEg4XuXGPTY0zsg2-HuQm7OFYA',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCtYnAWXO2oCWWttYL4fayBperC-izrKVvFPt4S2JAEp3fYtrM1QoCpcMuSUW9SyixNiKqFm2n0_BWFuUzJpKdJzuV23q7bD49FtV6iwzzHwPBGD74D-bKlk4P5LOLDnzTYEjNCsFOEn2pNipusK5vKOxnVlKLAL86SV0fLjJ93t60zvFoVvTUNfeAdbQW3v46bvEA-R17EaCtV4L3x68gK2p2fEYjyOtJbsEYUrgroyZtA5MGO8Ez5LTXq9G8yMlKZ0E4iwk-zlI0',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBT-xqUv57d5j0okLq5Lv-3oh4DkYHNPZHktK6mWl6WPlIaid36RQiT4Y8EOKSxNjaZXgiw14P0s37a1rScYdyYHIA6w2CQQp1tDACP2zlDrw77WM7lt0tHi0uCEmrFbKiFK8CNvq9I4LVLyctWi0mgMNF_ztm1fwjhe5YJ3nBuAKlUmT7bu0oEuvmVKDHa9_Fye9lkIeTixNMdJYpnKyq5WswpLB-Y8wOefJyzgF2MHya98U-BAYWCi82Lri3-okIjy8YgqsSbDL4'
    ]
  };

  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'photos', label: 'Work Photos' },
    { id: 'reviews', label: 'Reviews' }
  ];

  return (
    <div className="container-custom py-6 md:py-10 animate-enter">
      {/* Back Button */}
      <Link to="/technicians" className="flex items-center gap-2 text-primary font-bold mb-6 hover:opacity-80 transition">
        <span className="material-symbols-outlined">arrow_back</span>
        <span className="text-sm">Back</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Profile */}
        <div className="lg:col-span-8 space-y-6">
          {/* Profile Header */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden border-4 border-surface shadow-md">
                <img src={tech.image} alt={tech.name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 border-2 border-white">
                <span className="material-symbols-outlined text-sm">check_circle</span> Verified
              </div>
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl font-bold text-primary">{tech.name}</h1>
                <span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-lg text-sm font-bold">{tech.status}</span>
              </div>
              <p className="text-base text-on-surface-variant">{tech.specialty}</p>
              <div className="flex flex-wrap items-center gap-6 pt-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">star</span>
                  <span className="font-bold">{tech.rating}</span>
                  <span className="text-sm text-on-surface-variant">({tech.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-fixed-dim">work</span>
                  <span className="font-bold">{tech.experience} experience</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant overflow-hidden">
            <div className="flex border-b border-outline-variant overflow-x-auto no-scrollbar">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition ${
                    activeTab === tab.id
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="p-6 space-y-8">
              {/* About */}
              {activeTab === 'about' && (
                <section>
                  <h3 className="text-2xl font-bold text-primary mb-4">Short Biography</h3>
                  <p className="text-base text-on-surface-variant leading-relaxed">{tech.about}</p>
                </section>
              )}

              {/* Skills */}
              {activeTab === 'skills' && (
                <section>
                  <h3 className="text-2xl font-bold text-primary mb-4">Specialized Skills</h3>
                  <div className="flex flex-wrap gap-3">
                    {tech.skills.map((skill, idx) => (
                      <span key={idx} className="px-4 py-2 bg-surface-container-high rounded-full text-sm text-primary font-bold border border-outline-variant">
                        {skill}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              {/* Photos */}
              {activeTab === 'photos' && (
                <section>
                  <h3 className="text-2xl font-bold text-primary mb-4">Previous Work Photos</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {tech.photos.map((photo, idx) => (
                      <div key={idx} className="aspect-square rounded-lg overflow-hidden bg-surface-container-high">
                        <img src={photo} alt={`Work ${idx + 1}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Reviews */}
              {activeTab === 'reviews' && (
                <section>
                  <h3 className="text-2xl font-bold text-primary mb-4">Customer Reviews</h3>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="bg-surface-container p-4 rounded-lg border border-outline-variant">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-white">
                            <span className="material-symbols-outlined">person</span>
                          </div>
                          <div>
                            <p className="font-bold text-sm">Customer {i}</p>
                            <div className="flex items-center gap-1 text-secondary text-sm">
                              <span className="material-symbols-outlined text-sm">star</span>
                              <span className="font-bold">5.0</span>
                              <span className="text-xs text-on-surface-variant">• 2 days ago</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-on-surface-variant">Excellent work, technician arrived on time, fixed quickly. Thank you!</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>

        {/* Right: Booking Summary */}
        <div className="lg:col-span-4">
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-lg border border-primary/10 sticky top-24">
            <h3 className="text-2xl font-bold text-primary mb-6">Booking Service</h3>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between py-3 border-b border-outline-variant">
                <span className="text-on-surface-variant">Inspection Fee</span>
                <span className="text-primary font-bold">$5.00</span>
              </div>
              <div className="flex justify-between py-3 border-b border-outline-variant">
                <span className="text-on-surface-variant">Availability</span>
                <span className="text-green-600 font-bold">Immediate</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-on-surface-variant">Service Area</span>
                <span className="text-primary font-bold text-right">Phnom Penh</span>
              </div>
            </div>
            <div className="bg-primary-container/10 p-4 rounded-lg mb-8 border-l-4 border-secondary">
              <p className="text-sm text-on-primary-fixed-variant leading-relaxed italic">
                <span className="material-symbols-outlined align-middle mr-1 text-sm">info</span>
                Final price will be confirmed after inspection
              </p>
            </div>
            <Link to="/booking/confirm">
              <button className="w-full bg-secondary text-white py-4 rounded-xl text-xl font-bold hover:opacity-90 transition shadow-md">
                Select This Technician
              </button>
            </Link>
            <p className="text-center mt-4 text-sm text-on-surface-variant">No immediate charge</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicianProfile;