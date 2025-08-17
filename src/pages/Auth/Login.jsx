import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = { email: "", password: "" };
export default function LoginForm() {
  const [state, setState] = useState(initialState);
  let { email, password } = state;

  const navigate = useNavigate()
  const handleChange = (e) =>
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", state);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-md border border-gray-200">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Welcome Back, Coder!
        </h2>

        <form className="space-y-6" method="POST" action="/login">
          <div>
            <label
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-lg transition-all duration-200"
            />
          </div>
          <div>
            <label
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-lg transition-all duration-200"
            />
          </div>
          <button
            className="w-full flex justify-center py-3 px-6 border border-transparent rounded-full shadow-lg text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105"
            onClick={handleSubmit}
          >
            Sign In
          </button>
        </form>
        <p className="mt-8 text-center text-base text-gray-600">
          New to AHTCODERS?{" "}
          <button 
          onClick={()=>navigate("/auth/register")}
          className="font-bold text-blue-600 hover:text-blue-500 focus:outline-none transition-colors duration-300">
            Register Here
          </button>
        </p>
      </div>
    </div>
  );
}
