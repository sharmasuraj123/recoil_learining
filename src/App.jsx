import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";

import React from "react";
import { CounterAtom } from "./store/atoms/counter";

function App() {
  return (
    <>
      <RecoilRoot>
        <Counter />
        <Increase />
        <Decrease />
      </RecoilRoot>
      <div>Hello Counter</div>
    </>
  );
}

function Counter() {
  const count = useRecoilValue(CounterAtom);
   console.log("count:", count);
  return <div>{count}</div>;
}

function Increase() {
  const setcount = useSetRecoilState(CounterAtom);
  return (
    <div>
      <button
        onClick={() => {
          setcount((c) => c + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
}

function Decrease() {
  const setcount = useSetRecoilState(CounterAtom);
  return (
    <div>
      <button
        onClick={() => {
          setcount((c) => c - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}
 export default App;


// import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
// import { CounterAtom } from "./store/atoms/counter";

// function App() {
//   return (
//     <RecoilRoot>
//       <Counter />
//     </RecoilRoot>
//   );
// }

// function Counter() {
//   return (
//     <div style={{ textAlign: "center", marginTop: "40px" }}>
//       <CurrentCount />
//       <Increase />
//       <Decrease />
//     </div>
//   );
// }

// function CurrentCount() {
//   const count = useRecoilValue(CounterAtom);
//   return <h2>Count: {count}</h2>;
// }

// function Increase() {
//   const setCount = useSetRecoilState(CounterAtom);
//   return <button onClick={() => setCount(c => c + 1)}>Increase</button>;
// }

// function Decrease() {
//   const setCount = useSetRecoilState(CounterAtom);
//   return <button onClick={() => setCount(c => c - 1)}>Decrease</button>;
// }

// export default App;
