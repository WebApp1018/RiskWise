import toast from "react-hot-toast";

const notify = (text, type) => {
  switch (type) {
    case "success":
      toast(
        (t) => (
          <div className="w-full flex justify-between">
            <span className="text-color-success text-base font-semibold leading-6">
              Success:
              <span> {text}</span>
            </span>
            <button onClick={() => toast.dismiss(t.id)}>
              <img src="/images/icons/close.svg" alt="x" />
            </button>
          </div>
        ),
        {
          icon: <img src="/images/icons/check-circle.svg" alt="success" />,
        }
      );
      break;
    case "info":
      toast(
        (t) => (
          <div className="w-full flex justify-between">
            <span className="text-color-secondary text-base font-semibold leading-6">
              Info:
              <span> {text}</span>
            </span>
            <button onClick={() => toast.dismiss(t.id)}>
              <img src="/images/icons/close.svg" alt="x" />
            </button>
          </div>
        ),
        {
          icon: <img src="/images/icons/info.svg" alt="info" />,
        }
      );
      break;
    case "warning":
      toast(
        (t) => (
          <div className="w-full flex justify-between">
            <span className="text-color-warning text-base font-semibold leading-6">
              Warning:
              <span> {text}</span>
            </span>
            <button onClick={() => toast.dismiss(t.id)}>
              <img src="/images/icons/close.svg" alt="x" />
            </button>
          </div>
        ),
        {
          icon: <img src="/images/icons/alert-triangle.svg" alt="warning" />,
        }
      );
      break;
    case "error":
      toast(
        (t) => (
          <div className="w-full flex justify-between">
            <span className="text-color-error text-base font-semibold leading-6">
              Error:
              <span> {text}</span>
            </span>
            <button onClick={() => toast.dismiss(t.id)}>
              <img src="/images/icons/close.svg" alt="x" />
            </button>
          </div>
        ),
        {
          icon: <img src="/images/icons/x-circle.svg" alt="error" />,
        }
      );
      break;
    default:
      break;
  }
};

export default notify;
