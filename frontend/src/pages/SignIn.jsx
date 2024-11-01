import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import login  from '../services/authService'

export default function SignIn() {
  const [formData, setFormData] = useState({})

  const onSubmit = async (e)=>{
    e.preventDefault()
    const loginResult = await login(formData.email, formData.password)
    console.log('Login data:', loginResult)

    if(loginResult.status === true){
      window.location.href = '/Profile'
    }

  }
  return (
    <main className="flex-1 flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-black">Sign In to CourseHub</h1>
        <form className="space-y-4" onSubmit={onSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
              onKeyUp={e => setFormData({...formData, email:e.target.value})}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
              onKeyUp={e => setFormData({...formData, password:e.target.value})}
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="font-medium text-black hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  )
}
