import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import CourseContent from './pages/CourseContent';
import Enroll from './pages/Enroll';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursePage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/course/:id" element={<CourseContent />} />
            <Route path="/enroll/:id" element={<Enroll />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;