import { Route, BrowserRouter, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { DashboardProvider } from './context/DashboardContext';

import LandingPage from './pages/Landing';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

import Dashboard from './pages/Dashboard';
import AnalyticsDashboard from './pages/Analytics';

import ProtectedRoute from './components/ProtectedRoute';
import MainLayout from './components/MainLayout';
import AddProductForm from './components/AddProductForm';
import ProductTable from './components/ProductTable';
import Overview from './components/Overview';
import PriceStrategy from './components/PriceStrategy';
import MarketBranding from './components/MarketBranding';
import LogisticPlanning from './components/LogisticPlanning';
import Report from './components/Report';

// 🔁 PageWrapper for transitions
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
);

// 🔁 Split AppRouter from BrowserRouter
function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<PageWrapper><LandingPage /></PageWrapper>} />
          <Route path="login" element={<PageWrapper><LoginPage /></PageWrapper>} />
          <Route path="register" element={<PageWrapper><RegisterPage /></PageWrapper>} />
          <Route path="forgot-password" element={<PageWrapper><ForgotPassword /></PageWrapper>} />
          <Route path="/reset-password/:token" element={<PageWrapper><ResetPassword /></PageWrapper>} />
        </Route>

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<PageWrapper><Overview /></PageWrapper>} />
          <Route
            path="add-product"
            element={
              <PageWrapper>
                <AddProductForm />
                <ProductTable />
              </PageWrapper>
            }
          />
          <Route path="market-insight" element={<PageWrapper><AnalyticsDashboard /></PageWrapper>} />
          <Route path="price-strategy" element={<PageWrapper><PriceStrategy /></PageWrapper>} />
          <Route path="logistic-planning" element={<PageWrapper><LogisticPlanning /></PageWrapper>} />
          <Route path="market-branding" element={<PageWrapper><MarketBranding /></PageWrapper>} />
          <Route path="report" element={<PageWrapper><Report /></PageWrapper>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <DashboardProvider>
        <div className="bg-[#0f1117] text-white min-h-screen">
          <AppRoutes />
        </div>
      </DashboardProvider>
    </BrowserRouter>
  );
}

export default App;
