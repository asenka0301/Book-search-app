import React, { useState, useMemo } from 'react';
import LoadContext from './context';

const LoadProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [isBooksFounded, setIsBooksFounded] = useState(true);

  const data = useMemo(() => ({
    loading,
    setLoading,
    isBooksFounded,
    setIsBooksFounded,
  }), [loading]);
  return (
    <LoadContext.Provider value={data}>
      { children }
    </LoadContext.Provider>
  );
};

export default LoadProvider;
