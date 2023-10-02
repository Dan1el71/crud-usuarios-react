import './App.css'
import AdminLogin from './pages/AdminLogin'
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Usuarios from './pages/Usuarios';
import { ProtectedRoute } from './components/ProtectedRoute';
import { useAuthStore } from './store/auth';

function App() {

  const isAuth = useAuthStore(state => state.isAuth);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/login' element={<AdminLogin />} />
        <Route element={<ProtectedRoute isAllowed={isAuth} />}>
          <Route path='/usuarios' element={
            <Usuarios />
          } />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
