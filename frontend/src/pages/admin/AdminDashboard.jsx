import React, { useState, useEffect } from 'react';
import { Bell, Book, Users, TrendingUp, DollarSign } from 'lucide-react';

const DashboardCard = ({ title, value, icon: Icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-3xl font-semibold mt-1">{value}</p>
      </div>
      <Icon className="h-8 w-8 text-blue-500" />
    </div>
  </div>
);

const NotificationItem = ({ message, time }) => (
  <div className="flex items-center justify-between py-3 border-b last:border-b-0">
    <p className="text-sm">{message}</p>
    <p className="text-xs text-gray-500">{time}</p>
  </div>
);

const TrendingCourseItem = ({ title, enrollments }) => (
  <div className="flex items-center justify-between py-2">
    <p className="text-sm font-medium">{title}</p>
    <p className="text-xs text-gray-500">{enrollments} enrollments</p>
  </div>
);

export default function AdminDashboard() {
  const [dashboardData, setDashboardData] = useState({
    totalCourses: 10,
    totalPurchases: 80,
    totalStudents: 60,
    recentPurchases: [
      {
        studentName: 'John Doe',
        courseName: 'Python for Beginners',
        price: '$50.00',
        date: '2022-01-01',
      },
      {
        studentName: 'Jane Smith',
        courseName: 'JavaScript for Beginners',
        price: '$75.00',
        date: '2022-02-01',
      },
    ],
    notifications: [
      {
        message: 'New course added: Python for Beginners',
        time: '2 hours ago',
      },
      {
        message: 'New course added: JavaScript for Beginners',
        time: '3 hours ago',
      },
    ],
    trendingCourses: [
      {
        title: 'Python for Beginners',
        enrollments: 100,
      },
      {
        title: 'JavaScript for Beginners',
        enrollments: 75,
      },
    ],
  });

  useEffect(() => {
    // Fetch dashboard data from your API
    const fetchDashboardData = async () => {
      // Replace this with your actual API call
      const response = await fetch('/api/admin/dashboard');
      const data = await response.json();
      setDashboardData(data);
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard title="Total Courses" value={dashboardData.totalCourses} icon={Book} />
        <DashboardCard title="Total Purchases" value={dashboardData.totalPurchases} icon={DollarSign} />
        <DashboardCard title="Total Students" value={dashboardData.totalStudents} icon={Users} />
        <DashboardCard title="Trending Courses" value={dashboardData.trendingCourses.length} icon={TrendingUp} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Recent Purchases</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                  <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                  <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {dashboardData.recentPurchases.map((purchase, index) => (
                  <tr key={index}>
                    <td className="p-2 whitespace-nowrap text-sm font-medium text-gray-900">{purchase.studentName}</td>
                    <td className="p-2 whitespace-nowrap text-sm text-gray-500">{purchase.courseName}</td>
                    <td className="p-2 whitespace-nowrap text-sm text-gray-500">{purchase.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Notifications</h2>
          <div className="bg-white rounded-lg shadow-md p-4">
            {dashboardData.notifications.map((notification, index) => (
              <NotificationItem key={index} message={notification.message} time={notification.time} />
            ))}
          </div>

          <h2 className="text-xl font-semibold mt-4 mb-4">Trending Courses</h2>
          <div className="bg-white rounded-lg shadow-md p-4">
            {dashboardData.trendingCourses.map((course, index) => (
              <TrendingCourseItem key={index} title={course.title} enrollments={course.enrollments} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}