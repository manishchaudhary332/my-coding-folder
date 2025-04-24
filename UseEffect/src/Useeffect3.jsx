import React, { useState, useEffect } from 'react';

function Useeffect3() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <h2>Window width: {width}px</h2>;
}

export default Useeffect3
