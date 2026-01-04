import axios from "axios";
import { TODOS } from "../TODOS";
import { atom, atomFamily, selector, selectorFamily } from "recoil";

export const notifications = atomFamily({
  key: "Todos",
  default: selectorFamily({
    key: "notificationselectorFamily",
    get: (id) => {
      return async ({ get }) => {
        const res = await axios.get(
          `https://sum-server.100xdevs.com/todo?id=${id}`
        );
        return res.data.todo;
      };
    },
  }),
});
