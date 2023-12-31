import React from "react";
import classnames from "classnames";

const InputGroup = ({
  name,
  placeholder,
  value,
  error,
  icon,
  type = "text",
  onChange,
}) => {
  return (
    <div>
      {icon ? (
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <img src="/images/icons/" alt="" />
        </div>
      ) : null}

      <input
        className={classnames(
          "border border-color-neutral3 focus:border-color-neutral5 focus:outline-none focus:ring-0 text-color-neutral4 text-sm font-normal w-full p-1.5 3xl:p-2",
          {
            "ps-10": icon,
          }
        )}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && (
        <p className="mt-2 text-xs text-color-error1">
          <span className="font-medium">Oh, snapp!</span> {error}
        </p>
      )}
    </div>
  );
};

export default InputGroup;
