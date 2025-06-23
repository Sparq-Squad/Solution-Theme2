import { createContext, useContext, useState } from 'react';

export const AlertContext = createContext({
  alert: null,
  setAlert: () => {},
  showAlert: () => {}
});

export const useAlert = () => {
  return useContext(AlertContext);
};

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ message, type });
  };

  return (
    <AlertContext.Provider value={{ alert, setAlert, showAlert }}>
      {children}
    </AlertContext.Provider>
  );
};
