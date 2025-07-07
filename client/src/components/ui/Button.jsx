import * as React from "react";

const Button = ({ onClick, children, className, disabled }) => (
  <button
    onClick={onClick}
    className={`py-3 px-6 rounded-xl transition-all duration-300 shadow-lg transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900
      ${className} ${disabled ? 'opacity-40 cursor-not-allowed' : ''}`}
    disabled={disabled}
  >
    {children}
  </button>
);

export default  Button ;