import axios from "axios";
import { TODOS } from "../TODOS";
import { atom, atomFamily, selector, selectorFamily } from "recoil";

export const notifications = atomFamily({
  key: 'todosAtomFamily',
  default: selectorFamily({
    key: "todoSelectorFamily",
    get: (id) => async ({get}) => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
      return res.data;
    },
  })
});
