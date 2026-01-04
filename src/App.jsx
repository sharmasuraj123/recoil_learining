import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { CounterAtom, evenSelector } from "./store/atoms/counter";
import {
  jobsAtom,
  messageAtom,
  networkAtom,
  notificationAtom,
  totolaNotificationSelector,
} from "./store/atoms/topbar";

function App() {
  return (
    <div>
      <RecoilRoot>
        <MainCode />
      </RecoilRoot>
    </div>
  );
}

function MainCode() {
  const networkAtomcount = useRecoilValue(networkAtom);
  const jobsAtomcount = useRecoilValue(jobsAtom);
  const messageAtomcount = useRecoilValue(messageAtom);
  const [notificationAtomcount, setnotificationAtomCount] =
    useRecoilState(notificationAtom);
  const totolnotificationCount = useRecoilValue(totolaNotificationSelector);
  return (
    <div>
      <button>my network({networkAtomcount >= 99 ? "99+" : networkAtomcount})</button>
      <button>jobs{jobsAtomcount}</button>
      <button>messaging{messageAtomcount}</button>
      <button>notification {notificationAtomcount}</button>
      <button
        onClick={() => {
          setnotificationAtomCount((c) => c + 1);
        }}
      >
        me {totolnotificationCount}
      </button>
    </div>
  );
}

function Buttons() {
  const setCount = useSetRecoilState(CounterAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount((c) => c + 2);
        }}
      >
        increse
      </button>
      <button
        onClick={() => {
          setCount((c) => c - 1);
        }}
      >
        decrese
      </button>
    </div>
  );
}

export default App;
