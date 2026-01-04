import { atom, selector } from "recoil";

export const notifications = atom({
  key: "networkAtom",
  default: {
    networks: 0,
    jobs: 0,
    notification: 5,
    messages: 3,
  },
});

export const totolaNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const allnotification = get(notifications);

    return (
      allnotification.networks +
      allnotification.jobs +
      allnotification.messages +
      allnotification.notification
    );
  },
});
