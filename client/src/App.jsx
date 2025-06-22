import LandingPage from './pages/Landing';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import LoginPage from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import RegisterPage from './pages/Register';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
            <Header />
            <LandingPage />
            <Footer />
          </>
        } />
        <Route path='/login' element={
          <>
            <Header />
            <LoginPage />
            <Footer />
          </>
        } />
        <Route path='/register' element={
          <>
            <Header />
            <RegisterPage />
            <Footer />
          </>
        } />
        <Route path="/dashboard" element={
                                          <ProtectedRoute>
                                           <Dashboard />
                                           </ProtectedRoute>
                                                             }
         />

      </Routes>

    </BrowserRouter>
  )
}

export default App