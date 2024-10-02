import React, { useState, useEffect } from 'react';
import { Edit, Trash2, Plus } from 'lucide-react';

export default function CoursesManage() {
  const [courses, setCourses] = useState([
    { id: 1, title: 'Course 1', description: 'Description 1', price: 100 },
    { id: 2, title: 'Course 2', description: 'Description 2', price: 200 },
    { id: 3, title: 'Course 3', description: 'Description 3', price: 300 },
    { id: 4, title: 'Course 4', description: 'Description 4', price: 400 },
    { id: 5, title: 'Course 5', description: 'Description 5', price: 500 },
    { id: 6, title: 'Course 6', description: 'Description 6', price: 600 },
    { id: 7, title: 'Course 7', description: 'Description 7', price: 700 },
    { id: 8, title: 'Course 8', description: 'Description 8', price: 800 },
    { id: 9, title: 'Course 9', description: 'Description 9', price: 900 },
    { id: 10, title: 'Course 10', description: 'Description 10', price: 1000 },
  ]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newCourse, setNewCourse] = useState({ title: '', description: '', price: '' });

  useEffect(() => {
    // Fetch courses from your API
    const fetchCourses = async () => {
      // Replace this with your actual API call
      const response = await fetch('/api/admin/courses');
      const data = await response.json();
      setCourses(data);
    };

   // fetchCourses();
  }, []);

  const handleAddCourse = async (e) => {
    e.preventDefault();
    // Replace this with your actual API call
    const response = await fetch('/api/admin/courses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCourse),
    });
    const addedCourse = await response.json();
    setCourses([...courses, addedCourse]);
    setIsAddModalOpen(false);
    setNewCourse({ title: '', description: '', price: '' });
  };

  const handleDeleteCourse = async (id) => {
    // Replace this with your actual API call
    await fetch(`/api/admin/courses/${id}`, { method: 'DELETE' });
    setCourses(courses.filter(course => course.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage Courses</h1>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <Plus className="mr-2" />
          Add Course
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {courses.map((course) => (
              <tr key={course.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{course.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.description}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${course.price}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-3">
                    <Edit className="h-5 w-5" />
                  </button>
                  <button onClick={() => handleDeleteCourse(course.id)} className="text-red-600 hover:text-red-900">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isAddModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">Add New Course</h3>
            <form onSubmit={handleAddCourse}>
              <input
                type="text"
                placeholder="Course Title"
                value={newCourse.title}
                onChange={(e) => setNewCourse({...newCourse, title: e.target.value})}
                className="mb-3 w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
              <textarea
                placeholder="Course Description"
                value={newCourse.description}
                onChange={(e) => setNewCourse({...newCourse, description: e.target.value})}
                className="mb-3 w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
              <input
                type="number"
                placeholder="Price"
                value={newCourse.price}
                onChange={(e) => setNewCourse({...newCourse, price: e.target.value})}
                className="mb-3 w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
              <div className="flex justify-end">
                <button type="button" onClick={() => setIsAddModalOpen(false)} className="mr-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200">Cancel</button>
                <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600">Add Course</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}