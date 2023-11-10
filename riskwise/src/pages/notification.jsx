import React, { useState } from "react";
import NotificationGroup from "../components/common/NotificationGroup";
import ButtonGroup from "../components/common/ButtonGroup";
import notify from "../utils/notify";

const Notification = () => {
  const [notificationType, setNotificationType] = useState("");

  const notificationClick = (type) => {
    setNotificationType(type);
    notify(type, type);
  };

  return (
    <div>
      <ButtonGroup
        text="Success Notification"
        type="sm-su"
        clickHandler={() => notificationClick("success")}
      />
      <ButtonGroup
        text="Info Notification"
        type="sm-se"
        clickHandler={() => notificationClick("info")}
      />
      <ButtonGroup
        text="Warning Notification"
        type="sm-wa"
        clickHandler={() => notificationClick("warning")}
      />
      <ButtonGroup
        text="Error Notification"
        type="sm-er"
        clickHandler={() => notificationClick("error")}
      />
      <NotificationGroup notificationType={notificationType} />
    </div>
  );
};

export default Notification;
