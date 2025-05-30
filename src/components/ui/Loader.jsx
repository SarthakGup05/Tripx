import { useEffect, useState } from 'react';

const Loader = ({ delay = 2000 }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center gap-6 transition-opacity duration-700">
      

      <div className="flex flex-col items-center gap-4">
        <img src="/assets/img/logo.svg" alt="logo" className="h-12 w-auto animate-pulse" />

        <span className="loader block w-10 h-10 border-4 border-t-orange-500 border-b-orange-500 border-r-transparent border-l-transparent rounded-full animate-spin" />
      </div>
    </div>
  );
};

export default Loader;
