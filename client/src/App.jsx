import { Route, BrowserRouter, Routes } from 'react-router-dom';
import LandingPage from './pages/Landing';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import AnalyticsDashboard from './pages/Analytics';
import ResetPassword from './pages/ResetPassword';

import ProtectedRoute from './components/ProtectedRoute';
import MainLayout from './components/MainLayout';
import AddProductForm from './components/AddProductForm';
import ProductTable from './components/ProductTable';
import { DashboardProvider } from './context/DashboardContext';
import Overview from './components/Overview';
import PriceStrategy from './components/PriceStrategy';
import MarketBranding from './components/MarketBranding';
import LogisticPlanning from './components/LogisticPlanning';
import Report from './components/Report';

function App() {
  return (
    <BrowserRouter>
      <DashboardProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
          </Route>

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route index element={
              <>
                <Overview />
              </>
            } />
            <Route path="add-product" element={
              <>
                <AddProductForm />
                <ProductTable />
              </>
            } />
            <Route path="market-insight" element={<AnalyticsDashboard />} />
            <Route path="price-strategy" element={<PriceStrategy />} />
            <Route path="logistic-planning" element={<LogisticPlanning />} />
            <Route path="market-branding" element={<MarketBranding />} />
            <Route path="report" element={<Report />} />
          </Route>
        </Routes>
      </DashboardProvider>
    </BrowserRouter>
  );
}

export default App;
