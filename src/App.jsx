import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { CounterAtom, evenSelector } from "./store/atoms/counter";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Counter />
        <Buttons />
        <IsEven />
      </RecoilRoot>
    </div>
  );
}

function Counter() {
  const count = useRecoilValue(CounterAtom);
  console.log("1")
  return <div>{count}</div>;
}

function Buttons() {
  const setCount = useSetRecoilState(CounterAtom);
  console.log("2")
  return(
    <div>
      <button
        onClick={() => {
          setCount((c) => c + 2);
        }}
      >increse</button>
      <button
        onClick={() => {
          setCount((c) => c - 1);
        }}
      >decrese</button>
    </div>
  );
}

function IsEven() {
  const isEven = useRecoilValue(evenSelector);
  console.log("3")
  return <>{isEven ? "true" : "false"}</>;
}

export default App;
