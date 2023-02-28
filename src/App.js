import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { AuthProvider } from './context/AuthContext'

export default function App() {
  return (
    <div className='bg-slate-300 h-screen text-black flex'>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' component={<Login />} />
          <Route path='/register' component={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  )
}