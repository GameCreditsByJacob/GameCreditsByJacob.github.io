// src/App.tsx
import React, {useState, useEffect, Suspense, lazy } from 'react';
import CoverImg from "./assets/hero/hero_cover.jpg";
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar.tsx';
import RingLoader from "react-spinners/RingLoader";
import './App.css';


import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import ProtectedRoute from './components/ProtectedRoute.tsx';

const HomePage = lazy(() => import('./pages/HomePage.tsx'));
const WatchPage = lazy(() => import('./pages/WatchPage.tsx'));
const EventsPage = lazy(() => import('./pages/EventsPage.tsx'));
const StorePage = lazy(() => import('./pages/StorePage.tsx'));
const SupportPage = lazy(() => import('./pages/SupportPage.tsx'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard.tsx'));
const LoginPage = lazy(() => import('./pages/LoginPage.tsx'));
const SignUpPage = lazy(() => import('./pages/SignupPage.tsx'));

const bgImage = {
 backgroundImage: `url(${CoverImg})`,
 backgroundSize: "cover",
 backgroundPosition: "center",
 backgroundRepeat: "no-repeat",
 height: "100vh",
 width: "100%",
 }; 


function App(){
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false); // switch to true after developing
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
             {/* will fix this on github, upon reload the thing says it cannot be seen for some reason */}
             
              <Route path="/" element={<Hero />} />
              <Route path="/home" element={<HomePage />} />
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
      
    }
    </div>
  );
};

export default App;
