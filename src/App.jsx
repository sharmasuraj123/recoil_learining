import {
  RecoilRoot,
  useRecoilState,
  useRecoilStateLoadable,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { notifications } from "./store/atoms/topbar";
import { Suspense, useEffect } from "react";


function App() {
  return (
    <div>
      <RecoilRoot>
       
          <Suspense fallback={<div>Loading...</div>}>
            <MainCode />
          </Suspense>
        
      </RecoilRoot>
    </div>
  );
}

function MainCode() {
  return (
    <div>
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={2} />
    </div>
  );
}

function Todo({ id }) {
  // const [todos, setTodo] = useRecoilState(notifications(id)); wrong
  const todos= useRecoilValue(notifications(id))

  return <div>{todos.title}</div>;
}

export default App;
