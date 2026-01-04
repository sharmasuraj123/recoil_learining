import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 12,
});
export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0,
});
export const notificationAtom = atom({
  key: "notificationAtom",
  default: 0,
});
export const messageAtom = atom({
  key: "messageAtom",
  default: 12,
});

export const totolaNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const networkAtomCount = get(networkAtom);
    const jobsAtomCount = get(jobsAtom);
    const notificationAtomCount = get(notificationAtom);
    const messageAtomCount = get(messageAtom);

    return (
      networkAtomCount +
      jobsAtomCount +
      notificationAtomCount +
      messageAtomCount
    );
  },
});
