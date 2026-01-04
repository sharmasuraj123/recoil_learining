import axios from "axios";
import { atom, selector } from "recoil";

export const notifications = atom({
  key: "networkAtom",
  default: selector({
    key: "notificationAtomSelector",
    get: async ({ get }) => {
      const res = await axios("https://sum-server.100xdevs.com/notifications");
      return res.data;
    },
  }),
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
