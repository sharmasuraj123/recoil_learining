import axios from "axios";
import { TODOS } from "../TODOS";
import { atom, atomFamily, selector } from "recoil";

export const notifications = atomFamily({
  key: "Todos",
  default: (id) => {
    return TODOS.find((x) => x.id === id);
  },
});
