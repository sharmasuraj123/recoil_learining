// this is the best code to asyncronouse queries.

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
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
    </div>
  );
}

function Todo({ id }) {
  const [todos, setTodo] = useRecoilState(notifications(id));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTodo((x) => {
        if (x.id === 2) {
          return {
            ...x,
            description: "my name is suraj.",
          };
        }
        return x;
      });
    }, 5000);

    return () => clearTimeout(timer);
  }, [setTodo]);
  
  return <div>{todos.description}</div>;
}

export default App;
