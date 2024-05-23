// src/App.tsx
import React, { Suspense, lazy } from 'react';
import CoverImg from "./assets/hero/hero_cover.jpg";
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProtectedRoute from './components/ProtectedRoute';

const HomePage = lazy(() => import('./pages/HomePage'));
const WatchPage = lazy(() => import('./pages/WatchPage'));
const EventsPage = lazy(() => import('./pages/EventsPage'));
const StorePage = lazy(() => import('./pages/StorePage'));
const SupportPage = lazy(() => import('./pages/SupportPage'));
const AdminDashboard = lazy(() => import('./admin/AdminDashboard'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const SignUpPage = lazy(() => import('./pages/SignupPage'));

const bgImage = {
  backgroundImage: `url(${CoverImg})`,
 backgroundSize: "cover",
 backgroundPosition: "center",
 backgroundRepeat: "no-repeat",
  height: "100%",
 width: "100%",
 }; 

const App: React.FC = () => {
  return (
    <div style={bgImage} className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <Hero />
        <div className="flex-1 p-4">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/watch" element={<WatchPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/store" element={<StorePage />} />
              <Route path="/support" element={<SupportPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default App;
