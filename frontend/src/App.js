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
// {/* admin panel */}
import AdminDashboard from './pages/admin/AdminDashboard';
import CoursesManage from './pages/admin/CoursesManage';
import StudentsManage from './pages/admin/StudentsManage';
import AdminProfile from './pages/admin/AdminProfile';
import PaymentHistory from './pages/admin/PaymentHistory';
import AdminHeader from './components/admin/AdminHeader';
import AdminFooter from './components/admin/AdminFooter';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route
            path="/admin/*"
            element={
              <>
                <AdminHeader />
                <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Routes>
                  <Route path="/" element={<AdminDashboard />} />
                  <Route path="/courses" element={<CoursesManage />} />
                  <Route path="/students" element={<StudentsManage />} />
                  <Route path="/profile" element={<AdminProfile />} />
                  <Route path="/payments" element={<PaymentHistory />} />
                </Routes>
                </main>
                <AdminFooter />
              </>
            }
          />
          <Route
            path="/*"
            element={
              <>
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
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
