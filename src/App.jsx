// App.jsx
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { LanguageProvider } from './contexts/LanguageContext';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetailPlumber = lazy(() => import('./pages/ServiceDetailPlumber'));
const ServiceDetailElectrician = lazy(() => import('./pages/ServiceDetailElectrician'));
const ServiceDetailAC = lazy(() => import('./pages/ServiceDetailAC'));
const SelectServicePlumber = lazy(() => import('./pages/SelectServicePlumber'));
const SelectServiceElectrician = lazy(() => import('./pages/SelectServiceElectrician'));
const SelectServiceAC = lazy(() => import('./pages/SelectServiceAC'));
const ProblemDetail = lazy(() => import('./pages/ProblemDetail'));
const MapSelectLocation = lazy(() => import('./pages/MapSelectLocation'));
const AvailableTechnicians = lazy(() => import('./pages/AvailableTechnicians'));
const TechnicianProfile = lazy(() => import('./pages/TechnicianProfile'));
const BookingConfirmation = lazy(() => import('./pages/BookingConfirmation'));
const BookingHistory = lazy(() => import('./pages/BookingHistory'));
const BookingTracking = lazy(() => import('./pages/BookingTracking'));
const ServiceInProgress = lazy(() => import('./pages/ServiceInProgress'));
const Messages = lazy(() => import('./pages/Messages'));
const EInvoiceReview = lazy(() => import('./pages/EInvoiceReview'));
const PaymentConfirmation = lazy(() => import('./pages/PaymentConfirmation'));
const RatingReview = lazy(() => import('./pages/RatingReview'));
const CustomerProfile = lazy(() => import('./pages/CustomerProfile'));
const HelpSupport = lazy(() => import('./pages/HelpSupport'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const HowItWorks = lazy(() => import('./pages/HowItWorks'));
const Contact = lazy(() => import('./pages/Contact'));
const CustomerDashboard = lazy(() => import('./pages/CustomerDashboard'));

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Layout>
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-[60vh]">
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/services" element={<Services />} />
              <Route path="/service/plumber" element={<ServiceDetailPlumber />} />
              <Route path="/service/electrician" element={<ServiceDetailElectrician />} />
              <Route path="/service/ac" element={<ServiceDetailAC />} />
              <Route path="/select/plumber" element={<SelectServicePlumber />} />
              <Route path="/select/electrician" element={<SelectServiceElectrician />} />
              <Route path="/select/ac" element={<SelectServiceAC />} />
              <Route path="/problem-detail" element={<ProblemDetail />} />
              <Route path="/map-location" element={<MapSelectLocation />} />
              <Route path="/technicians" element={<AvailableTechnicians />} />
              <Route path="/technician/:id" element={<TechnicianProfile />} />
              <Route path="/booking/confirm" element={<BookingConfirmation />} />
              <Route path="/booking/history" element={<BookingHistory />} />
              <Route path="/booking/track" element={<BookingTracking />} />
              <Route path="/service/in-progress" element={<ServiceInProgress />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/invoice" element={<EInvoiceReview />} />
              <Route path="/payment" element={<PaymentConfirmation />} />
              <Route path="/rating" element={<RatingReview />} />
              <Route path="/profile" element={<CustomerProfile />} />
              <Route path="/help" element={<HelpSupport />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/dashboard" element={<CustomerDashboard />} />
            </Routes>
          </Suspense>
        </Layout>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;