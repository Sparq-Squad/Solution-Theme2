import { useEffect, useState } from 'react';

function AlertMessage({ message, type = 'error', onClose }) {
  if(!message || message.trim()==='') return null;
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hideTimer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 100); // Matches the fade-out duration
    }, 500);

    return () => clearTimeout(hideTimer);
  }, [onClose]);

  const base = 'w-full py-4 text-center text-sm font-semibold shadow-md transition-opacity duration-300';
  const styles = {
    error: 'bg-red-500 text-white',
    success: 'bg-green-500 text-white',
    info: 'bg-blue-500 text-white',
    warning: 'bg-yellow-400 text-black',
  };

  return (
    <div
      className={`
        fixed top-[64px] left-0 z-50
        ${base}
        ${styles[type] || styles.error}
        ${visible ? 'opacity-100' : 'opacity-0'}
      `}
    >
      {message}
    </div>
  );
}

export { AlertMessage };
