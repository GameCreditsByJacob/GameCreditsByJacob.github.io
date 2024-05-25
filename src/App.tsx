// src/App.tsx
import React, {useState, useEffect, Suspense, lazy } from 'react';
import CoverImg from "./assets/hero/hero_cover.jpg";
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import RingLoader from "react-spinners/RingLoader";
import './App.css';


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


function App(){
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  },[])
  return (
    <div className="App">

  
      {loading?

      <RingLoader
        color={'#D00210'}
        loading={loading}
        size={70}
      />


  :
      <div style={bgImage}>
    <Navbar />
      <div className="flex flex-row">
        <div className="flex-col z-40">
        <Sidebar />
        </div>
        <div className="flex-row flex flex-grow">
          <Suspense fallback={loading}>
            <Routes>
              <Route path="/GameCreditsByJacob/" element={<Hero />} />
              <Route path="/GameCreditsByJacob/home" element={<HomePage />} />
              <Route path="/GameCreditsByJacob/watch" element={<WatchPage />} />
              <Route path="/GameCreditsByJacob/events" element={<EventsPage />} />
              <Route path="/GameCreditsByJacob/store" element={<StorePage />} />
              <Route path="/GameCreditsByJacob/support" element={<SupportPage />} />
              <Route path="/GameCreditsByJacob/login" element={<LoginPage />} />
              <Route path="/GameCreditsByJacob/signup" element={<SignUpPage />} />
              <Route path="/GameCreditsByJacob/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
            </Routes>
            </Suspense>
          </div>
      </div>
      </div>
      
    }
    </div>
  );
};

export default App;
