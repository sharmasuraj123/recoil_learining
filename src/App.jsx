//

import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { notifications } from "./store/atoms/topbar";
import { useEffect } from "react";

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
  return (
    <div>
      <Todo id={1} />
      <Todo id={2} />
    </div>
  );
}

function Todo({ id }) {
  const [todos, setTodo] = useRecoilState(notifications(id));

  return <div>{todos.description}</div>;
}

export default App;
