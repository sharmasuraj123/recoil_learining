import {
  RecoilRoot,
  useRecoilState,
  useRecoilStateLoadable,
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
    </div>
  );
}

function Todo({ id }) {
  const [todos, setTodo] = useRecoilStateLoadable(notifications(id));
  console.log(todos);
  if(todos.state==="loading"){
    return <div>Loading...</div>
  }
  else if(todos.state==="hasError"){
    return <div>Error while fetching data</div>;
  }
  return <div>{todos.contents.title}</div>;
}

export default App;
