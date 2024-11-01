import React from 'react'
import { useState, useContext } from 'react'
import { Book, Clock } from 'lucide-react'
import AuthContext from '../contexts/client/auth/AuthContext'

export default function ProfilePage() {
    
    const { contextUser, setContextUser, loading, redirectToLogin,userInfo } = useContext(AuthContext)
    console.log(contextUser)

    // if (!contextUser) {
    //     return <div>Loading...</div>
    // }

    // if(redirectToLogin === true) {
    //     // redirect to login page
    //     window.location.href = '/'
    // }


    const [user, setUser] = useState(() => ({
        img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80',
        name: 'contextUser[0].name',
        email: 'contextUser[0].email',
        bio: 'Passionate learner and web developer',
        enrolledCourses: [
            { id: '1', title: 'Web Development Bootcamp', progress: 60 },
            { id: '2', title: 'Data Science Fundamentals', progress: 30 },
            { id: '3', title: 'UX/UI Design Essentials', progress: 10 },
        ],
    }))

    const [isEditing, setIsEditing] = useState(false)

    const handleChange = (e) =>
        setUser(prevUser => (
            { ...prevUser, [e.target.name]: e.target.value }
        ))

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsEditing(false)
    }

    return (
        <main className="flex-grow container mx-auto px-4 py-8 bg-white text-black">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">Your Profile</h1>
                <div className="bg-white shadow rounded-lg p-6 mb-8">
                    <div className="flex items-center mb-6">
                        <img
                            src={user.img}
                            alt="Profile picture"
                            width={100}
                            height={100}
                            className="rounded-full"
                        />
                        <div className="ml-4">
                            <h2 className="text-2xl font-semibold">{user.name}</h2>
                            <p className="text-gray-600">{user.email}</p>
                        </div>
                    </div>
                    {isEditing ? (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={user.name}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={user.email}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                />
                            </div>
                            <div>
                                <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
                                <textarea
                                    id="bio"
                                    name="bio"
                                    rows="3"
                                    value={user.bio}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                ></textarea>
                            </div>
                            <div className="flex justify-end space-x-2">
                                <button
                                    type="button"
                                    onClick={() => setIsEditing(false)}
                                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div>
                            <p className="text-gray-700 mb-4">{user.bio}</p>
                            <button
                                onClick={() => setIsEditing(true)}
                                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Edit Profile
                            </button>
                        </div>
                    )}
                </div>
                <div className="bg-white shadow rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Enrolled Courses</h3>
                    {user.enrolledCourses.length > 0 ? (
                        <ul className="space-y-4">
                            {user.enrolledCourses.map(course => (
                                <li key={course.id} className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <Book className="h-5 w-5 text-blue-500 mr-2" />
                                        <span>{course.title}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="h-4 w-4 text-gray-400 mr-2" />
                                        <span className="text-sm text-gray-600">{course.progress}% complete</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-600">You are not enrolled in any courses yet.</p>
                    )}
                </div>
            </div>
        </main>
    )
}
