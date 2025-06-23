import LandingPage from './pages/Landing';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import LoginPage from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import RegisterPage from './pages/Register';
import Dashboard from './pages/Dashboard';
import AnalyticsDashboard from './pages/Analytics';
import { DashboardProvider } from './context/DashboardContext';
import AddProductForm from './components/AddProductForm';
import ProductTable from './components/ProductTable';

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
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<>
            <AddProductForm />
            <ProductTable />
          </>} />
          <Route path='analysis' element={<AnalyticsDashboard />} />
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App