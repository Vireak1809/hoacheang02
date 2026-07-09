// src/pages/BookingHistory.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  pageTitle: { km: 'ប្រវត្តិការកក់', en: 'Booking History' },
  pageSubtitle: { km: 'តាមដានការកក់ទាំងអស់របស់អ្នក', en: 'Track all your bookings' },
  tabAll: { km: 'ទាំងអស់', en: 'All' },
  tabActive: { km: 'កំពុងដំណើរការ', en: 'Active' },
  tabCompleted: { km: 'បានបញ្ចប់', en: 'Completed' },
  tabCancelled: { km: 'បានបោះបង់', en: 'Cancelled' },
  viewDetail: { km: 'មើលលម្អិត', en: 'View Details' },
  einvoice: { km: 'E-Invoice', en: 'E-Invoice' },
  track: { km: 'តាមដាន', en: 'Track' },
  rebook: { km: 'កក់ម្តងទៀត', en: 'Rebook' },
  cancelBooking: { km: 'បោះបង់ការកក់', en: 'Cancel Booking' },
  cancelConfirmTitle: { km: 'បញ្ជាក់ការបោះបង់', en: 'Confirm Cancellation' },
  cancelConfirmMessage: { km: 'តើអ្នកពិតជាចង់បោះបង់ការកក់នេះមែនទេ?', en: 'Are you sure you want to cancel this booking?' },
  confirmYes: { km: 'យល់ព្រម', en: 'Yes, cancel' },
  confirmNo: { km: 'ទេ', en: 'No, go back' },
  technician: { km: 'ជាង', en: 'Technician' },
  dateLabel: { km: 'ថ្ងៃទី', en: 'Date' },
  total: { km: 'សរុប', en: 'Total' },
  emptyTitle: { km: 'ត្រៀមកក់សេវាថ្មី?', en: 'Ready to book a new service?' },
  emptyDesc: { km: 'ចុចប៊ូតុងខាងក្រោមដើម្បីចាប់ផ្ដើម', en: 'Click the button below to get started' },
  newBooking: { km: 'កក់សេវាថ្មី', en: 'Book New Service' },
};

const bookingsData = [
  {
    id: 1,
    service: { km: 'ជួសជុលម៉ាស៊ីនត្រជាក់', en: 'AC Repair' },
    bookingId: '#HC-88219',
    status: 'completed',
    technician: { km: 'លោក សុភ័ក្ត្រ', en: 'Mr. Sopheak' },
    date: { km: '២៥ មករា ២០២៤', en: '25 Jan 2024' },
    price: '$41.50',
    icon: 'ac_unit'
  },
  {
    id: 2,
    service: { km: 'ជួសជុលប្រព័ន្ធទឹក', en: 'Plumbing Repair' },
    bookingId: '#HC-88450',
    status: 'active',
    technician: { km: 'លោក ពិសិដ្ឋ', en: 'Mr. Piseth' },
    date: { km: '២០ មករា ២០២៤', en: '20 Jan 2024' },
    price: '$25.00',
    icon: 'plumbing',
    inProgress: true
  },
  {
    id: 3,
    service: { km: 'ជួសជុលប្រព័ន្ធភ្លើង', en: 'Electrical Repair' },
    bookingId: '#HC-88102',
    status: 'cancelled',
    technician: { km: 'មិនទាន់កំណត់', en: 'Not Assigned' },
    date: { km: '១០ មករា ២០២៤', en: '10 Jan 2024' },
    price: '$30.00',
    icon: 'electric_bolt'
  }
];

const statusMap = {
  completed: { km: 'បានបញ្ចប់', en: 'Completed' },
  active: { km: 'កំពុងដំណើរការ', en: 'In Progress' },
  cancelled: { km: 'បានបោះបង់', en: 'Cancelled' }
};

const statusColors = {
  completed: 'bg-secondary-fixed text-on-secondary-fixed',
  active: 'bg-secondary-container text-on-secondary-container',
  cancelled: 'bg-error-container text-on-error-container'
};

const borderColors = {
  completed: 'border-l-secondary',
  active: 'border-l-secondary-container',
  cancelled: 'border-l-error/30'
};

const BookingHistory = () => {
  const { lang } = useLanguage();
  const t = (key) => translations[key]?.[lang] || key;
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [cancelModalId, setCancelModalId] = useState(null);

  const filteredBookings = bookingsData.filter(b => activeTab === 'all' || b.status === activeTab);
  const sortedBookings = [...filteredBookings].sort((a, b) => {
    if (a.status === 'active' && b.status !== 'active') return -1;
    if (b.status === 'active' && a.status !== 'active') return 1;
    return 0;
  });

  const handleCancelConfirm = () => {
    setCancelModalId(null);
    navigate('/');
  };

  const tabs = [
    { id: 'all', labelKey: 'tabAll' },
    { id: 'active', labelKey: 'tabActive' },
    { id: 'completed', labelKey: 'tabCompleted' },
    { id: 'cancelled', labelKey: 'tabCancelled' }
  ];

  const getStatusText = (status) => statusMap[status]?.[lang] || status;
  const getStatusColor = (status) => statusColors[status] || '';
  const getBorderColor = (status) => borderColors[status] || '';

  return (
    <div className="container-custom py-6 md:py-10 animate-enter">
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">{t('pageTitle')}</h1>
        <p className="text-base text-on-surface-variant">{t('pageSubtitle')}</p>
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
            {t(tab.labelKey)}
          </button>
        ))}
      </div>

      {/* Booking Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {sortedBookings.map((booking) => (
          <div
            key={booking.id}
            className={`relative bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border-l-4 hover:shadow-md transition ${
              getBorderColor(booking.status)
            } ${booking.status === 'cancelled' ? 'opacity-80' : ''}`}
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
                  <h3 className="text-xl font-bold text-primary">{booking.service[lang]}</h3>
                  <p className="text-xs text-on-surface-variant">Booking {booking.bookingId}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded text-xs font-medium ${getStatusColor(booking.status)}`}>
                {getStatusText(booking.status)}
              </span>
            </div>
            <div className="flex flex-col gap-2 mb-4 text-sm">
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-sm">person</span> {t('technician')}: {booking.technician[lang]}
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-sm">calendar_month</span> {t('dateLabel')}: {booking.date[lang]}
              </div>
              <div className="flex items-center gap-2 text-primary font-bold">
                <span className="material-symbols-outlined text-sm">payments</span> {t('total')}: {booking.price}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              {/* Left button – varies by status */}
              {booking.inProgress ? (
                <Link to="/service/in-progress" className="flex-1">
                  <button className="w-full py-2.5 border border-primary text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition">
                    {t('viewDetail')}
                  </button>
                </Link>
              ) : booking.status === 'completed' ? (
                <Link to="/invoice?source=history" className="flex-1">
                  <button className="w-full py-2.5 border border-primary text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-sm">receipt_long</span>
                    {t('einvoice')}
                  </button>
                </Link>
              ) : (
                <Link to="/booking/track" className="flex-1">
                  <button className="w-full py-2.5 border border-primary text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition">
                    {t('viewDetail')}
                  </button>
                </Link>
              )}

              {/* Right button – varies by status */}
              {booking.inProgress ? (
                <button
                  onClick={() => setCancelModalId(booking.id)}
                  className="flex-1 py-2.5 rounded-lg text-sm font-medium shadow-sm bg-error text-white hover:opacity-90 transition flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">close</span>
                  {t('cancelBooking')}
                </button>
              ) : (
                <Link to="/select/plumber" className="flex-1">
                  <button className="w-full py-2.5 rounded-lg text-sm font-medium shadow-sm bg-secondary text-white hover:opacity-90 transition flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-sm">refresh</span>
                    {t('rebook')}
                  </button>
                </Link>
              )}
            </div>
          </div>
        ))}

        {/* Empty State */}
        <div className="hidden lg:flex flex-col items-center justify-center p-8 border-2 border-dashed border-outline-variant rounded-xl bg-surface-container-low text-center">
          <span className="material-symbols-outlined text-6xl text-primary/20 mb-4">event_note</span>
          <h4 className="text-xl font-bold text-primary mb-2">{t('emptyTitle')}</h4>
          <p className="text-sm text-on-surface-variant mb-4">{t('emptyDesc')}</p>
          <Link to="/select/plumber">
            <button className="px-8 py-3 bg-primary text-white rounded-full text-sm font-medium shadow-lg hover:scale-105 transition">
              {t('newBooking')}
            </button>
          </Link>
        </div>
      </div>

      {/* Cancel Confirmation Modal */}
      {cancelModalId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-xl animate-enter">
            <div className="text-center mb-6">
              <span className="material-symbols-outlined text-5xl text-error mb-3">warning</span>
              <h3 className="text-xl font-bold text-on-surface">{t('cancelConfirmTitle')}</h3>
              <p className="text-sm text-on-surface-variant mt-2">{t('cancelConfirmMessage')}</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setCancelModalId(null)}
                className="flex-1 py-2.5 rounded-lg border border-outline-variant text-on-surface-variant font-medium hover:bg-surface-container transition"
              >
                {t('confirmNo')}
              </button>
              <button
                onClick={handleCancelConfirm}
                className="flex-1 py-2.5 rounded-lg bg-error text-white font-medium hover:opacity-90 transition"
              >
                {t('confirmYes')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingHistory;