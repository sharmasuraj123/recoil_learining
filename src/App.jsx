// this is the best code to asyncronouse queries.

import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { totolaNotificationSelector } from "./store/atoms/topbar";

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
  const [notificationCount, setnotificationCount] =
    useRecoilState(notifications);
  const allnotificationCount = useRecoilValue(totolaNotificationSelector);

  

  return (
    <div>
      <button>
        my network(
        {notificationCount.networks >= 99 ? "99+" : notificationCount.networks})
      </button>
      <button>jobs{notificationCount.jobs}</button>
      <button>messaging{notificationCount.notification}</button>
      <button>notification {notificationCount.messages}</button>
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

export default App;
