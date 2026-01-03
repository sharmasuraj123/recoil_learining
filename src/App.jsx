// memo code

/* this is the way of protecting the re-rendering in the children that not using the   */

import { memo, useState, useEffect } from "react";

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

function Counter() {
  const [count, setcount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setcount((c) => c + 1);
    }, 3000);
    return () => clearInterval(interval); // Good practice: cleanup your intervals!
  }, []);
  return (
    <>
      <CurrentCount count={count} />
      <Increase />
      <Decrease />
    </>
  );
}

const CurrentCount = memo(({ count }) => {
  console.log("Current Count is rendering.")
  return <div>{count}</div>;
});

const Increase = memo(() => {
  console.log("increase rendered");
  return <div><button>increase</button></div>;
});

const Decrease = memo(() => {
  console.log("decrease rendered");
  return <div><button>decrease</button></div>;
});
export default App;
