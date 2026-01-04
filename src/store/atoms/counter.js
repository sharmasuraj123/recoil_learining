import { atom, selector } from "recoil";

export const CounterAtom = atom({
  key: " counterAtom",
  default: 0,
});

export const evenSelector = selector({
  key: "isEven",
  get: ({ get }) => {
    const count = get(CounterAtom);
    const isEven = count % 2 == 0;
    return isEven;
  },
});
