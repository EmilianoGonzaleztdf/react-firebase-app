import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import { Alert } from "./Alert";

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle()
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  }

  const handleResetPassword = async () => {
    if (!user.email) return setError("Please enter your email");
    try {
      await resetPassword(user.email);
      setError("we sent you an email with reset your password")
    } catch (error) {
      setError(error.message)
    }
    }

  return (
    <div className="w-full max-w-xs m-auto">

      {error && <Alert message={error} />}

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input type="email" name="email" id="email" placeholder="youremail@yourcompany.com"
            className="shadow appearance-none border rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input type="password" name="password" id="password" placeholder="******" className="shadow appearance-none border rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange} />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hoover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ">Login</button>
          <a href="#!" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" 
          onClick={handleResetPassword}>Forgot Password?</a>
        </div>

      </form>
      <p className="my-4 text-sm flex justify-between px-3">You do not have an account?<Link to="/register" className="text-blue-700">Register</Link> </p>

      <button onClick={handleGoogleSignIn} className="bg-slate-50 hover:bg-slate-200 text-black shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full">Login with Google</button>
    </div>
  )
};