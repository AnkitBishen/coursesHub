import React, { useState, useEffect } from 'react';
import { Edit, Trash2, Mail } from 'lucide-react';

export default function StudentsManage() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch students from your API
    const fetchStudents = async () => {
      // Replace this with your actual API call
      const response = await fetch('/api/admin/students');
      const data = await response.json();
      setStudents(data);
    };

    // fetchStudents();
  }, []);

  const handleDeleteStudent = async (id) => {
    // Replace this with your actual API call
    await fetch(`/api/admin/students/${id}`, { method: 'DELETE' });
    setStudents(students.filter(student => student.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Manage Students</h1>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Enrolled Courses</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {students.map((student) => (
              <tr key={student.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.enrolledCourses}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-3">
                    <Edit className="h-5 w-5" />
                  </button>
                  <button onClick={() => handleDeleteStudent(student.id)} className="text-red-600 hover:text-red-900 mr-3">
                    <Trash2 className="h-5 w-5" />
                  </button>
                  <button className="text-green-600 hover:text-green-900">
                    <Mail className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}