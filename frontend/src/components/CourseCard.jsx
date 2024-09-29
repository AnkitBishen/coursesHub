import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'


export default function CourseCard({ title, description, image, price, id }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
      <img
        alt="Course thumbnail"
        className="aspect-video object-cover"
        height={400}
        src={image}
        width={600}
      />
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl font-semibold text-black">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-black">{price}</span>
          <Link
            className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
            to={`/enroll/${id}`}
          >
            Enroll Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}