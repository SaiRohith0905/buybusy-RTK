import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebaseconfig"; // Firebase config
import { signOut, onAuthStateChanged } from "firebase/auth";

const NavBar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Listen to the authentication state
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });

    // Cleanup the listener
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/signin"); // Redirect to login page after logout
  };

  return (
    <div className="navbar bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-purple-600 text-2xl font-bold">
        BusyBuy
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        {/* Sign In for unauthenticated users */}
        {!user && (
          <Link
            to="/signin"
            className="text-purple-600 font-medium hover:text-purple-800 transition duration-300"
          >
            SignIn
          </Link>
        )}

        {/* Links for authenticated users */}
        {user && (
          <>
            <Link
              to="/"
              className="flex items-center space-x-2 text-purple-600 hover:text-purple-800 transition duration-300"
            >
              <span>Home</span>
            </Link>
            <Link
              to="/myorders"
              className="flex items-center space-x-2 text-purple-600 hover:text-purple-800 transition duration-300"
            >
              <span>My Orders</span>
            </Link>
            <Link
              to="/cart"
              className="flex items-center space-x-2 text-purple-600 hover:text-purple-800 transition duration-300"
            >
              <span>Cart</span>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-purple-600 hover:text-purple-800 transition duration-300"
            >
              <span>Logout</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
