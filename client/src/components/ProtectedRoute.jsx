// ProtectedRoute.jsx
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const [isAuth, setIsAuth] = useState(null);
  console.log("Protected Route");
  useEffect(() => {
    fetch('http://localhost:5000/user/verify', {
      method: 'GET',
      credentials: 'include'
    })
      .then((res) => {
        if (!res.ok) throw new Error('Not Authenticated');
        return res.json();
      })
      .then(() => setIsAuth(true))
      .catch(() => setIsAuth(false));
  }, []);

  if (isAuth === null) return <h1>Loading...</h1>;        // Waiting...
  if (!isAuth) return <Navigate to="/login" />;           // Not logged in → redirect
  return children;                                        // Authenticated → render
}


export default ProtectedRoute;
