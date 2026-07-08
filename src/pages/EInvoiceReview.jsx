// src/pages/EInvoiceReview.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const EInvoiceReview = () => {
  return (
    <div className="container-custom py-6 md:py-10 animate-enter">
      <div className="flex items-center gap-3 mb-6">
        <Link to="/service/in-progress" className="p-2 hover:bg-surface-container rounded-full transition text-primary">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-primary">E-Invoice</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Invoice */}
        <div className="lg:col-span-8 space-y-6">
          {/* Header Card */}
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant relative">
            <div className="absolute top-4 right-4">
              <span className="px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container text-sm font-medium">បានបញ្ចប់</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div>
                <p className="text-xs text-on-surface-variant uppercase tracking-wider">លេខវិក្កយបត្រ</p>
                <p className="text-2xl font-bold text-primary">#HC-2024-8892</p>
              </div>
              <div>
                <p className="text-xs text-on-surface-variant uppercase tracking-wider">កាលបរិច្ឆេទ</p>
                <p className="text-lg text-on-surface">ថ្ងៃទី 24 មករា 2024 • 14:30</p>
              </div>
              <div>
                <p className="text-xs text-on-surface-variant uppercase tracking-wider">អតិថិជន</p>
                <p className="text-base text-on-surface">សុភា</p>
              </div>
              <div>
                <p className="text-xs text-on-surface-variant uppercase tracking-wider">ជាង</p>
                <p className="text-base text-secondary">ជាង វណ្ណៈ</p>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl shadow-sm border border-outline-variant overflow-hidden">
            <div className="bg-surface-container-high px-6 py-4 border-b border-outline-variant">
              <h2 className="text-xl font-bold text-primary">លម្អិត</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface">
                    <th className="px-6 py-4 text-sm text-on-surface-variant uppercase">ការងារ</th>
                    <th className="px-6 py-4 text-sm text-on-surface-variant text-right uppercase">តម្លៃ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  <tr className="hover:bg-surface-container-low transition">
                    <td className="px-6 py-4">
                      <div className="font-bold">ជួសជុលម៉ាស៊ីនត្រជាក់</div>
                      <div className="text-xs text-on-surface-variant">សេវាស្តង់ដារ និងសម្អាត</div>
                    </td>
                    <td className="px-6 py-4 text-right text-lg">$30.00</td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition">
                    <td className="px-6 py-4">
                      <div className="font-bold">គ្រឿងបន្លាស់</div>
                      <div className="text-xs text-on-surface-variant">តម្រង និងឧបករណ៍តូចៗ</div>
                    </td>
                    <td className="px-6 py-4 text-right text-lg">$10.00</td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition">
                    <td className="px-6 py-4">
                      <div className="font-bold">ថ្លៃសេវា (15%)</div>
                      <div className="text-xs text-on-surface-variant">ថ្លៃសេវាបច្ចេកទេស</div>
                    </td>
                    <td className="px-6 py-4 text-right text-lg">$1.50</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="bg-primary text-white">
                    <td className="px-6 py-6 text-2xl font-bold">សរុប</td>
                    <td className="px-6 py-6 text-2xl font-bold text-right">$41.50</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>

        {/* Right: Summary */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 space-y-6">
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border-2 border-primary">
              <h3 className="text-2xl font-bold text-primary text-center mb-6">សង្ខេប</h3>
              <div className="space-y-4 py-4 border-y border-outline-variant mb-6">
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">តម្លៃសរុប</span>
                  <span className="font-bold">$40.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">ពន្ធ/សេវា</span>
                  <span className="font-bold">$1.50</span>
                </div>
                <div className="flex justify-between text-2xl text-primary">
                  <span>សរុប</span>
                  <span>$41.50</span>
                </div>
              </div>
              <Link to="/payment">
                <button className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">check_circle</span> បញ្ជាក់ការបង់ប្រាក់
                </button>
              </Link>
              <Link to="/rating">
                <button className="w-full mt-3 py-4 bg-transparent text-secondary border-2 border-secondary font-bold rounded-xl hover:bg-secondary-fixed transition flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">edit_note</span> កែសម្រួល
                </button>
              </Link>
            </div>

            <div className="p-6 bg-surface-container rounded-xl border border-outline-variant">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary">security</span>
                <div>
                  <h4 className="text-sm font-medium text-primary mb-1">ការទូទាត់សុវត្ថិភាព</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    ការទូទាត់របស់អ្នកត្រូវបានការពារដោយប្រព័ន្ធសុវត្ថិភាពខ្ពស់។
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EInvoiceReview;