import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { Alert } from "./Alert";

export function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const { signup, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState()

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    try {
      await signup(user.email, user.password)
      navigate("/")
    } catch (error) {
      if (error.code === "auth/email-already-in-use");
      setError("usted ya se encuentra registrado");
    }
  }
  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle()
      navigate("/");
    } catch (error) {
      console.log(error.message);
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
          <input type="password" name="password" id="password" placeholder="******"
            className="shadow appearance-none border rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange} />
        </div>


        <button className="bg-blue-500 hoover:bg-white-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ">Register</button>

      </form>
      <button onClick={handleGoogleSignIn} className="bg-slate-50 hover:bg-slate-200 text-black shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full">Register with Google</button>

    </div>
  )
}
