import { useState, useEffect } from 'react';

function Useeffect2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect chala - Count badla ya component load hua");

    // Browser ke title ko change kar rahe hain
    document.title = `Count is ${count}`;

  }, [count]); // dependency array mein 'count' diya, matlab jab count change hoga tabhi chalega

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Useeffect2;
