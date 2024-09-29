import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

function CourseCard({ title, description, image, price, id }) {
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
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">{price}</span>
          <Link
            to={`/enroll/${id}`}
            className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-900 focus-visible:outline-none focus:ring-1 focus:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
          >
            Enroll Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const featuredCourses = [
    {
      id: "1",
      title: "Web Development Bootcamp",
      description: "Learn HTML, CSS, and JavaScript to become a full-stack developer.",
      image: "/placeholder.svg?height=400&width=600",
      price: "$99.99"
    },
    {
      id: "2",
      title: "Data Science Fundamentals",
      description: "Master the basics of data analysis and machine learning.",
      image: "/placeholder.svg?height=400&width=600",
      price: "$129.99"
    },
    {
      id: "3",
      title: "UX/UI Design Essentials",
      description: "Create stunning user interfaces and improve user experiences.",
      image: "/placeholder.svg?height=400&width=600",
      price: "$89.99"
    },
    {
      id: "4",
      title: "Mobile App Development",
      description: "Build cross-platform mobile apps using React Native.",
      image: "/placeholder.svg?height=400&width=600",
      price: "$149.99"
    },
    {
      id: "5",
      title: "Artificial Intelligence Basics",
      description: "Understand the fundamentals of AI and machine learning.",
      image: "/placeholder.svg?height=400&width=600",
      price: "$199.99"
    }
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth;
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      checkScroll(); // Initial check
    }
    return () => container?.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Welcome to LearnHub
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Unlock your potential with our expert-led online courses. Learn at your own pace and advance your career.
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  to="/courses"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus:ring-1 focus:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                >
                  Explore Courses
                </Link>
                <Link
                  to="/signup"
                  className="inline-flex h-9 items-center justify-center rounded-md border border-gray-800 bg-black px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-900 focus-visible:outline-none focus:ring-1 focus:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Featured Courses</h2>
            <div className="relative">
              <button
                onClick={() => scroll('left')}
                className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md ${
                  canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
                } transition-opacity duration-300`}
                aria-label="Scroll left"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
              <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {featuredCourses.map((course) => (
                  <div key={course.id} className="flex-none w-[300px]">
                    <CourseCard {...course} />
                  </div>
                ))}
              </div>
              <button
                onClick={() => scroll('right')}
                className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md ${
                  canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
                } transition-opacity duration-300`}
                aria-label="Scroll right"
              >
                <ArrowRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join Our Learning Community</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get access to exclusive content, interact with instructors, and connect with fellow learners.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-md bg-black text-white px-4 py-2 text-sm font-medium shadow hover:bg-gray-900 focus-visible:outline-none focus:ring-1 focus:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}