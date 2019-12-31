import { store } from "react-notifications-component";

const openNotification = (type, message, duration) => {
  switch (type) {
    case 'success': {
      store.addNotification({
        title: "Udało się!",
        message,
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeInRight"],
        animationOut: ["animated", "fadeOutRight"],
        dismiss: {
          duration
        }
      })
    }
  }
};

export default openNotification;
