// src/pages/EInvoiceReview.jsx
import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  pageTitle: { km: 'E-Invoice', en: 'E-Invoice' },
  completed: { km: 'បានបញ្ចប់', en: 'Completed' },
  invoiceNo: { km: 'លេខវិក្កយបត្រ', en: 'Invoice No.' },
  invoiceNoValue: { km: '#HC-2024-8892', en: '#HC-2024-8892' },
  dateLabel: { km: 'កាលបរិច្ឆេទ', en: 'Date' },
  dateValue: { km: 'ថ្ងៃទី 24 មករា 2024 • 14:30', en: '24 Jan 2024 • 14:30' },
  customerLabel: { km: 'អតិថិជន', en: 'Customer' },
  customerName: { km: 'សុភា', en: 'Sophea' },
  technicianLabel: { km: 'ជាង', en: 'Technician' },
  technicianName: { km: 'ជាង វណ្ណៈ', en: 'Mr. Vannak' },
  serviceHeader: { km: 'ការងារ', en: 'Service' },
  amountHeader: { km: 'តម្លៃ', en: 'Amount' },
  acRepair: { km: 'ជួសជុលម៉ាស៊ីនត្រជាក់', en: 'AC Repair' },
  acDesc: { km: 'សេវាស្តង់ដារ និងសម្អាត', en: 'Standard service & cleaning' },
  spareParts: { km: 'គ្រឿងបន្លាស់', en: 'Spare Parts' },
  sparePartsDesc: { km: 'តម្រង និងឧបករណ៍តូចៗ', en: 'Filters and small tools' },
  serviceFee: { km: 'ថ្លៃសេវា (15%)', en: 'Service Fee (15%)' },
  serviceFeeDesc: { km: 'ថ្លៃសេវាបច្ចេកទេស', en: 'Technical service charge' },
  total: { km: 'សរុប', en: 'Total' },
  summaryTitle: { km: 'សង្ខេប', en: 'Summary' },
  subtotal: { km: 'តម្លៃសរុប', en: 'Subtotal' },
  taxService: { km: 'ពន្ធ/សេវា', en: 'Tax/Service' },
  summaryTotal: { km: 'សរុប', en: 'Total' },
  confirmPayment: { km: 'បញ្ជាក់ការបង់ប្រាក់', en: 'Confirm Payment' },
  edit: { km: 'កែសម្រួល', en: 'Edit' },
  securePaymentTitle: { km: 'ការទូទាត់សុវត្ថិភាព', en: 'Secure Payment' },
  securePaymentDesc: { km: 'ការទូទាត់របស់អ្នកត្រូវបានការពារដោយប្រព័ន្ធសុវត្ថិភាពខ្ពស់។', en: 'Your payment is protected by a high‑security system.' },
};

const EInvoiceReview = () => {
  const { lang } = useLanguage();
  const t = (key) => translations[key]?.[lang] || key;
  const [searchParams] = useSearchParams();
  const source = searchParams.get('source'); // 'history' when coming from completed booking

  return (
    <div className="container-custom py-6 md:py-10 animate-enter">
      <div className="flex items-center gap-3 mb-6">
        <Link to="/service/in-progress" className="p-2 hover:bg-surface-container rounded-full transition text-primary">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-primary">{t('pageTitle')}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Invoice */}
        <div className={source === 'history' ? 'lg:col-span-12' : 'lg:col-span-8 space-y-6'}>
          {/* Header Card */}
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant relative">
            <div className="absolute top-4 right-4">
              <span className="px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container text-sm font-medium">
                {t('completed')}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div>
                <p className="text-xs text-on-surface-variant uppercase tracking-wider">{t('invoiceNo')}</p>
                <p className="text-2xl font-bold text-primary">{t('invoiceNoValue')}</p>
              </div>
              <div>
                <p className="text-xs text-on-surface-variant uppercase tracking-wider">{t('dateLabel')}</p>
                <p className="text-lg text-on-surface">{t('dateValue')}</p>
              </div>
              <div>
                <p className="text-xs text-on-surface-variant uppercase tracking-wider">{t('customerLabel')}</p>
                <p className="text-base text-on-surface">{t('customerName')}</p>
              </div>
              <div>
                <p className="text-xs text-on-surface-variant uppercase tracking-wider">{t('technicianLabel')}</p>
                <p className="text-base text-secondary">{t('technicianName')}</p>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl shadow-sm border border-outline-variant overflow-hidden mt-6">
            <div className="bg-surface-container-high px-6 py-4 border-b border-outline-variant">
              <h2 className="text-xl font-bold text-primary">{t('pageTitle')} – {t('summaryTitle')}</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface">
                    <th className="px-6 py-4 text-sm text-on-surface-variant uppercase">{t('serviceHeader')}</th>
                    <th className="px-6 py-4 text-sm text-on-surface-variant text-right uppercase">{t('amountHeader')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  <tr className="hover:bg-surface-container-low transition">
                    <td className="px-6 py-4">
                      <div className="font-bold">{t('acRepair')}</div>
                      <div className="text-xs text-on-surface-variant">{t('acDesc')}</div>
                    </td>
                    <td className="px-6 py-4 text-right text-lg">$30.00</td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition">
                    <td className="px-6 py-4">
                      <div className="font-bold">{t('spareParts')}</div>
                      <div className="text-xs text-on-surface-variant">{t('sparePartsDesc')}</div>
                    </td>
                    <td className="px-6 py-4 text-right text-lg">$10.00</td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition">
                    <td className="px-6 py-4">
                      <div className="font-bold">{t('serviceFee')}</div>
                      <div className="text-xs text-on-surface-variant">{t('serviceFeeDesc')}</div>
                    </td>
                    <td className="px-6 py-4 text-right text-lg">$1.50</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="bg-primary text-white">
                    <td className="px-6 py-6 text-2xl font-bold">{t('total')}</td>
                    <td className="px-6 py-6 text-2xl font-bold text-right">$41.50</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>

        {/* Right: Summary – hidden when source=history */}
        {source !== 'history' && (
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border-2 border-primary">
                <h3 className="text-2xl font-bold text-primary text-center mb-6">{t('summaryTitle')}</h3>
                <div className="space-y-4 py-4 border-y border-outline-variant mb-6">
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">{t('subtotal')}</span>
                    <span className="font-bold">$40.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">{t('taxService')}</span>
                    <span className="font-bold">$1.50</span>
                  </div>
                  <div className="flex justify-between text-2xl text-primary">
                    <span>{t('summaryTotal')}</span>
                    <span>$41.50</span>
                  </div>
                </div>
                <Link to="/payment">
                  <button className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">check_circle</span> {t('confirmPayment')}
                  </button>
                </Link>
                <Link to="/rating">
                  <button className="w-full mt-3 py-4 bg-transparent text-secondary border-2 border-secondary font-bold rounded-xl hover:bg-secondary-fixed transition flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">edit_note</span> {t('edit')}
                  </button>
                </Link>
              </div>

              <div className="p-6 bg-surface-container rounded-xl border border-outline-variant">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary">security</span>
                  <div>
                    <h4 className="text-sm font-medium text-primary mb-1">{t('securePaymentTitle')}</h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      {t('securePaymentDesc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EInvoiceReview;