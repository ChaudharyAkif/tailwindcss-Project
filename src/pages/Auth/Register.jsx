
  import { useState } from "react"
import { useNavigate } from "react-router-dom"; // ✅ Navigation hook

  const initialState = {email:"", password:"", confirmPassword:""}
  const  RegisterForm=()=> {
  const [state, setState] = useState(initialState);
    let { email, password,confirmPassword } = state;
  const navigate = useNavigate(); // ✅ Navigation function


    const handleChange = (e) =>
      setState((s) => ({ ...s, [e.target.name]: e.target.value }));
    
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Login submitted:", state);
    };
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-md border border-gray-200">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Join AHTCODERS Today!</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label 
              s className="block text-lg font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 text-lg transition-all duration-200"
              />
            </div>
            <div>
              <label 
               className="block text-lg font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                onChange={handleChange}
                name="password"
                value={password}
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 text-lg transition-all duration-200"
              />
            </div>
            <div>
              <label 
               className="block text-lg font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 text-lg transition-all duration-200"
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-6 border border-transparent rounded-full shadow-lg text-lg font-bold text-white bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-300 transform hover:scale-105"
            >
              Register
            </button>
          </form>
          <p className="mt-8 text-center text-base text-gray-600">
            Already have an account?{" "}
            <button
              className="font-bold text-blue-600 hover:text-blue-500 focus:outline-none transition-colors duration-300"
             onClick={() => navigate("/auth/login")} 
            >
              Login Here
            </button>
          </p>
        </div>
      </div>
    )
  }


  export default RegisterForm