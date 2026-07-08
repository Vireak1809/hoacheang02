// src/pages/BookingHistory.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BookingHistory = () => {
  const [activeTab, setActiveTab] = useState('all');

  const bookings = [
    {
      id: 1,
      service: 'ជួសជុលម៉ាស៊ីនត្រជាក់',
      bookingId: '#HC-88219',
      status: 'បានបញ្ចប់',
      statusColor: 'bg-secondary-fixed text-on-secondary-fixed',
      technician: 'លោក សុភ័ក្ត្រ',
      date: '២៥ មករា ២០២៤',
      price: '$41.50',
      icon: 'ac_unit'
    },
    {
      id: 2,
      service: 'ជួសជុលប្រព័ន្ធទឹក',
      bookingId: '#HC-88450',
      status: 'កំពុងដំណើរការ',
      statusColor: 'bg-secondary-container text-on-secondary-container',
      technician: 'លោក ពិសិដ្ឋ',
      date: '២០ មករា ២០២៤',
      price: '$25.00',
      icon: 'plumbing',
      inProgress: true
    },
    {
      id: 3,
      service: 'ជួសជុលប្រព័ន្ធភ្លើង',
      bookingId: '#HC-88102',
      status: 'បានបោះបង់',
      statusColor: 'bg-error-container text-on-error-container',
      technician: 'លោក មិនទាន់កំណត់',
      date: '១០ មករា ២០២៤',
      price: '$30.00',
      icon: 'electric_bolt'
    }
  ];

  const tabs = [
    { id: 'all', label: 'ទាំងអស់' },
    { id: 'active', label: 'កំពុងដំណើរការ' },
    { id: 'completed', label: 'បានបញ្ចប់' },
    { id: 'cancelled', label: 'បានបោះបង់' }
  ];

  return (
    <div className="container-custom py-6 md:py-10 animate-enter">
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">ប្រវត្តិការកក់</h1>
        <p className="text-base text-on-surface-variant">តាមដានការកក់ទាំងអស់របស់អ្នក</p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-3 mb-6 overflow-x-auto pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-primary text-white'
                : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Booking Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className={`bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border-l-4 hover:shadow-md transition ${
              booking.status === 'បានបញ្ចប់'
                ? 'border-l-secondary'
                : booking.status === 'កំពុងដំណើរការ'
                ? 'border-l-secondary-container'
                : 'border-l-error/30'
            } ${booking.status === 'បានបោះបង់' ? 'opacity-80' : ''}`}
          >
            {booking.inProgress && (
              <div className="absolute top-0 right-0 p-2">
                <div className="shimmer w-20 h-1 bg-secondary-container rounded-full"></div>
              </div>
            )}
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl">{booking.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">{booking.service}</h3>
                  <p className="text-xs text-on-surface-variant">Booking {booking.bookingId}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded text-xs font-medium ${booking.statusColor}`}>
                {booking.status}
              </span>
            </div>
            <div className="flex flex-col gap-2 mb-4 text-sm">
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-sm">person</span> ជាង: {booking.technician}
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-sm">calendar_month</span> ថ្ងៃទី {booking.date}
              </div>
              <div className="flex items-center gap-2 text-primary font-bold">
                <span className="material-symbols-outlined text-sm">payments</span> សរុប: {booking.price}
              </div>
            </div>
            <div className="flex gap-3">
              <Link to={booking.inProgress ? '/service/in-progress' : '/booking/track'}>
                <button className="flex-1 py-2.5 border border-primary text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition">
                  មើលលម្អិត
                </button>
              </Link>
              <Link to={booking.status === 'បានបញ្ចប់' ? '/invoice' : booking.inProgress ? '/booking/track' : '/select/plumber'}>
                <button className={`flex-1 py-2.5 rounded-lg text-sm font-medium shadow-sm hover:opacity-90 transition flex items-center justify-center gap-2 ${
                  booking.status === 'បានបញ្ចប់'
                    ? 'bg-secondary text-white'
                    : booking.inProgress
                    ? 'bg-secondary text-white'
                    : 'bg-secondary text-white'
                }`}>
                  <span className="material-symbols-outlined text-sm">reorder</span>
                  {booking.status === 'បានបញ្ចប់' ? 'E-Invoice' : booking.inProgress ? 'តាមដាន' : 'កក់ម្តងទៀត'}
                </button>
              </Link>
            </div>
          </div>
        ))}

        {/* Empty State */}
        <div className="hidden lg:flex flex-col items-center justify-center p-8 border-2 border-dashed border-outline-variant rounded-xl bg-surface-container-low text-center">
          <span className="material-symbols-outlined text-6xl text-primary/20 mb-4">event_note</span>
          <h4 className="text-xl font-bold text-primary mb-2">ត្រៀមកក់សេវាថ្មី?</h4>
          <p className="text-sm text-on-surface-variant mb-4">ចុចប៊ូតុងខាងក្រោមដើម្បីចាប់ផ្ដើម</p>
          <Link to="/select/plumber">
            <button className="px-8 py-3 bg-primary text-white rounded-full text-sm font-medium shadow-lg hover:scale-105 transition">
              កក់សេវាថ្មី
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingHistory;