import {Outlet} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useAlert } from '../context/AlertContext';
import {AlertMessage} from './ui/AlertMessage';

export default function MainLayout() {
  const { alert } = useAlert();

  return (
    <>
      <Header />

      {alert && (
        <AlertMessage
          message={alert.message}
          type={alert.type}
          onClose={() => {}} // fade-out already clears it
        />
      )}
     
      <main className="min-h-[80vh]">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}