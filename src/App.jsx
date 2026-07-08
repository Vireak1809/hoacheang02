// src/App.jsx
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { LanguageProvider } from './contexts/LanguageContext';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute'; 

// Lazy load pages (excluding CustomerDashboard – we'll import it directly for root)
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

// Import CustomerDashboard directly (no lazy) because it's the root page
import CustomerDashboard from './pages/CustomerDashboard';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <LanguageProvider>
          <Layout>
            <Suspense
              fallback={
                <div className="flex items-center justify-center min-h-[60vh]">
                  <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
              }
            >
              <Routes>
                
                {/* ===== PUBLIC ROUTES (No login required) ===== */}
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/services" element={<Services />} />
                <Route path="/service/plumber" element={<ServiceDetailPlumber />} />
                <Route path="/service/electrician" element={<ServiceDetailElectrician />} />
                <Route path="/service/ac" element={<ServiceDetailAC />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/contact" element={<Contact />} />

                {/* ===== PROTECTED ROUTES (Require login) ===== */}
                <Route path="/dashboard" element={<PrivateRoute><CustomerDashboard /></PrivateRoute>} />
                <Route path="/technicians" element={<PrivateRoute><AvailableTechnicians /></PrivateRoute>} />
                <Route path="/technician/:id" element={<PrivateRoute><TechnicianProfile /></PrivateRoute>} />
                <Route path="/booking/history" element={<PrivateRoute><BookingHistory /></PrivateRoute>} />
                <Route path="/booking/track" element={<PrivateRoute><BookingTracking /></PrivateRoute>} />
                <Route path="/messages" element={<PrivateRoute><Messages /></PrivateRoute>} />
                <Route path="/profile" element={<PrivateRoute><CustomerProfile /></PrivateRoute>} />
                <Route path="/help" element={<PrivateRoute><HelpSupport /></PrivateRoute>} />
                <Route path="/select/plumber" element={<PrivateRoute><SelectServicePlumber /></PrivateRoute>} />
                <Route path="/select/electrician" element={<PrivateRoute><SelectServiceElectrician /></PrivateRoute>} />
                <Route path="/select/ac" element={<PrivateRoute><SelectServiceAC /></PrivateRoute>} />
                <Route path="/problem-detail" element={<PrivateRoute><ProblemDetail /></PrivateRoute>} />
                <Route path="/map-location" element={<PrivateRoute><MapSelectLocation /></PrivateRoute>} />
                <Route path="/booking/confirm" element={<PrivateRoute><BookingConfirmation /></PrivateRoute>} />
                <Route path="/service/in-progress" element={<PrivateRoute><ServiceInProgress /></PrivateRoute>} />
                <Route path="/invoice" element={<PrivateRoute><EInvoiceReview /></PrivateRoute>} />
                <Route path="/payment" element={<PrivateRoute><PaymentConfirmation /></PrivateRoute>} />
                <Route path="/rating" element={<PrivateRoute><RatingReview /></PrivateRoute>} />

                {/* Dashboard is also accessible separately */}
                <Route path="/dashboard" element={<CustomerDashboard />} />
              </Routes>
            </Suspense>
          </Layout>
        </LanguageProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;