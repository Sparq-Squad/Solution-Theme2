import { Route, BrowserRouter, Routes } from 'react-router-dom';
import LandingPage from './pages/Landing';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import Dashboard from './pages/Dashboard';
import AnalyticsDashboard from './pages/Analytics';

import ProtectedRoute from './components/ProtectedRoute';
import MainLayout from './components/MainLayout';
import AddProductForm from './components/AddProductForm';
import ProductTable from './components/ProductTable';
import { DashboardProvider } from './context/DashboardContext';

function App() {
  return (
    <BrowserRouter>
      <DashboardProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
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
                <AddProductForm />
                <ProductTable />
              </>
            } />
            <Route path="analysis" element={<AnalyticsDashboard />} />
          </Route>
        </Routes>
      </DashboardProvider>
    </BrowserRouter>
  );
}

export default App;
