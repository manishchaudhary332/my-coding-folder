import React, { useEffect, useState } from 'react';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function jab component unmount hoga
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array: effect sirf mount aur unmount par chalega

  return (
    <div style={{ height: '200vh', padding: '20px' }}>
      <h1>Scroll Position: {scrollY}px</h1>
      <p>Scroll karte raho aur scroll position dekhte raho!</p>
    </div>
  );
}

export default App;
