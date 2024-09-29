import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react'

export default function Enroll() {

  // Mock data for the course
  const courseData = {
    id: '1',
    title: 'Web Development Bootcamp',
    description: 'Learn HTML, CSS, and JavaScript to become a full-stack developer.',
    instructor: 'Jane Doe',
    price: 99.99,
    duration: '12 weeks',
    lessons: 60,
    level: 'Beginner to Intermediate',
    features: [
      'Lifetime access to course materials',
      'Certificate of completion',
      'Interactive coding exercises',
      '24/7 community support',
      'Live Q&A sessions with instructor',
    ],
  }

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the enrollment data to your backend
    console.log('Enrollment submitted:', formData)
    // For now, we'll just log the data and show an alert
    alert('Enrollment successful! Check the console for details.')
  }

  // const [course, setCourse] = useState(null);
  const { id } = useParams();
  console.log(id)
  return (
    <main className="flex-1 container mx-auto px-4 py-8 bg-white text-black">
      <Link to="/courses" className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline mb-6">
        <ArrowLeft className="mr-1 h-4 w-4" />
        Back to Courses
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">Enroll in {courseData.title}</h1>
          <img
            src="/placeholder.svg?height=300&width=500"
            alt={courseData.title}
            width={500}
            height={300}
            className="rounded-lg mb-4"
          />
          <p className="text-gray-600 mb-4">{courseData.description}</p>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <h2 className="text-xl font-semibold mb-2">Course Details</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="font-medium mr-2">Instructor:</span>
                {courseData.instructor}
              </li>
              <li className="flex items-center">
                <span className="font-medium mr-2">Duration:</span>
                {courseData.duration}
              </li>
              <li className="flex items-center">
                <span className="font-medium mr-2">Lessons:</span>
                {courseData.lessons}
              </li>
              <li className="flex items-center">
                <span className="font-medium mr-2">Level:</span>
                {courseData.level}
              </li>
            </ul>
          </div>
          <h2 className="text-xl font-semibold mb-2">What You'll Get</h2>
          <ul className="space-y-2 mb-4">
            {courseData.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Complete Your Enrollment</h2>
            <div className="mb-6">
              <span className="text-3xl font-bold">${courseData.price}</span>
              <span className="text-gray-600 ml-2">one-time payment</span>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  required
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    required
                    placeholder="MM/YY"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    required
                    placeholder="123"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>
              <Link to={`../course/${courseData.id}`} >
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 mt-2 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Enroll Now
              </button>
              </Link>
            </form>
            <p className="mt-4 text-sm text-gray-600 text-center">
              By enrolling, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
