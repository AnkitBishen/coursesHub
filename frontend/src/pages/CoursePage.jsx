import React,{ useState } from 'react'
import CourseCard from '../components/CourseCard'

// Mock data for courses
const coursesData = [
  { id: 1, title: "Introduction to React", description: "Learn the basics of React and build your first app", instructor: "Jane Doe", price: 49.99 },
  { id: 2, title: "Advanced JavaScript", description: "Master advanced JavaScript concepts and patterns", instructor: "John Smith", price: 79.99 },
  { id: 3, title: "CSS Flexbox and Grid", description: "Create responsive layouts with modern CSS techniques", instructor: "Emily Brown", price: 39.99 },
  { id: 4, title: "Node.js Fundamentals", description: "Build scalable backend applications with Node.js", instructor: "Mike Johnson", price: 59.99 },
  { id: 5, title: "Python for Data Science", description: "Learn Python programming for data analysis and visualization", instructor: "Sarah Lee", price: 69.99 },
  { id: 6, title: "UX/UI Design Principles", description: "Master the fundamentals of user experience and interface design", instructor: "Alex Chen", price: 54.99 },
]

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredCourses = coursesData.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto px-4 py-8 bg-white text-black">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Courses</h1>
      
      <div className="mb-8">
      <input
        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="Search courses..."
        type="text"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map(course => (
          <CourseCard {...course} />
        ))}
      </div>
    </div>
  )
}