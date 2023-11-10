import { Toaster } from "react-hot-toast";

const NotificationGroup = ({ notificationType }) => {
  // Define a default style
  let defaultStyle = {
    width: "700px",
    background: "#DCF6F0",
    border: "1px solid #429060",
    borderRadius: "2px",
    padding: "12px 20px",
  };

  // Conditionally adjust the style based on notificationType
  switch (notificationType) {
    case "success":
      defaultStyle = {
        ...defaultStyle,
      };
      break;
    case "info":
      defaultStyle = {
        ...defaultStyle,
        background: "#D8EEFD",
        border: "1px solid #1851B8",
      };
      break;
    case "warning":
      defaultStyle = {
        ...defaultStyle,
        background: "#FFFDE4",
        border: "1px solid #D4AC49",
      };
      break;
    case "error":
      defaultStyle = {
        ...defaultStyle,
        background: "#F9E3DB",
        border: "1px solid #AB2F28",
      };
      break;

    default:
      break;
  }

  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        className: "",
        style: defaultStyle,
        // duration: 5000,
      }}
    />
  );
};

export default NotificationGroup;
