import React from "react";
import classnames from "classnames";

const ButtonGroup = ({
  text,
  type,
  width,
  icon = false,
  iconImg,
  disabled = false,
  clickHandler,
}) => {
  return (
    <button
      className={classnames(
        "inline-flex rounded-sm border-[1px] font-semibold hover:cursor-pointer justify-center items-center hover:shadow-sm active:shadow-active",
        {
          // Primary
          "bg-color-primary text-white text-[14px] leading-5 px-[14px] py-2 hover:bg-color-primary-1 active:bg-color-primary1 disabled:bg-color-primary-2 disabled:pointer-events-none":
            type === "sm-pr", // Small
          "bg-color-primary text-white text-[14px] leading-5 px-4 py-[10px] hover:bg-color-primary-1 active:bg-color-primary1 disabled:bg-color-primary-2 disabled:pointer-events-none":
            type === "md-pr", // Medium
          "bg-color-primary text-white text-[16px] leading-6 px-[18px] py-[10px] hover:bg-color-primary-1 active:bg-color-primary1 disabled:bg-color-primary-2 disabled:pointer-events-none":
            type === "lg-pr", // Large
          "bg-color-primary text-white text-[16px] leading-6 px-5 py-3 hover:bg-color-primary-1 active:bg-color-primary1 disabled:bg-color-primary-2 disabled:pointer-events-none":
            type === "xl-pr", // Xl
          "bg-color-primary text-white text-[16px] leading-6 px-7 py-4 hover:bg-color-primary-1 active:bg-color-primary1 disabled:bg-color-primary-2 disabled:pointer-events-none":
            type === "2xl-pr", //2Xl

          // Secondary
          "bg-color-secondary text-white text-[14px] leading-5 px-[14px] py-2 hover:bg-color-secondary-1 active:bg-color-secondary1 disabled:bg-color-secondary-2 disabled:pointer-events-none":
            type === "sm-se", // Small
          "bg-color-secondary text-white text-[14px] leading-5 px-4 py-[10px] hover:bg-color-secondary-1 active:bg-color-secondary1 disabled:bg-color-secondary-2 disabled:pointer-events-none":
            type === "md-se", // Medium
          "bg-color-secondary text-white text-[16px] leading-6 px-[18px] py-[10px] hover:bg-color-secondary-1 active:bg-color-secondary1 disabled:bg-color-secondary-2 disabled:pointer-events-none":
            type === "lg-se", // Large
          "bg-color-secondary text-white text-[16px] leading-6 px-5 py-3 hover:bg-color-secondary-1 active:bg-color-secondary1 disabled:bg-color-secondary-2 disabled:pointer-events-none":
            type === "xl-se", // Xl
          "bg-color-secondary text-white text-[16px] leading-6 px-7 py-4 hover:bg-color-secondary-1 active:bg-color-secondary1 disabled:bg-color-secondary-2 disabled:pointer-events-none":
            type === "2xl-se", //2Xl

          // Success
          "bg-color-success text-white text-[14px] leading-5 px-[14px] py-2 hover:bg-color-success-1 active:bg-color-success1 disabled:bg-color-success-2 disabled:pointer-events-none":
            type === "sm-su", // Small
          "bg-color-success text-white text-[14px] leading-5 px-4 py-[10px] hover:bg-color-success-1 active:bg-color-success1 disabled:bg-color-success-2 disabled:pointer-events-none":
            type === "md-su", // Medium
          "bg-color-success text-white text-[16px] leading-6 px-[18px] py-[10px] hover:bg-color-success-1 active:bg-color-success1 disabled:bg-color-success-2 disabled:pointer-events-none":
            type === "lg-su", // Large
          "bg-color-success text-white text-[16px] leading-6 px-5 py-3 hover:bg-color-success-1 active:bg-color-success1 disabled:bg-color-success-2 disabled:pointer-events-none":
            type === "xl-su", // Xl
          "bg-color-success text-white text-[16px] leading-6 px-7 py-4 hover:bg-color-success-1 active:bg-color-success1 disabled:bg-color-success-2 disabled:pointer-events-none":
            type === "2xl-su", //2Xl

          // Warning
          "bg-color-warning text-white text-[14px] leading-5 px-[14px] py-2 hover:bg-color-warning-1 active:bg-color-warning1 disabled:bg-color-warning-2 disabled:pointer-events-none":
            type === "sm-wa", // Small
          "bg-color-warning text-white text-[14px] leading-5 px-4 py-[10px] hover:bg-color-warning-1 active:bg-color-warning1 disabled:bg-color-warning-2 disabled:pointer-events-none":
            type === "md-wa", // Medium
          "bg-color-warning text-white text-[16px] leading-6 px-[18px] py-[10px] hover:bg-color-warning-1 active:bg-color-warning1 disabled:bg-color-warning-2 disabled:pointer-events-none":
            type === "lg-wa", // Large
          "bg-color-warning text-white text-[16px] leading-6 px-5 py-3 hover:bg-color-warning-1 active:bg-color-warning1 disabled:bg-color-warning-2 disabled:pointer-events-none":
            type === "xl-wa", // Xl
          "bg-color-warning text-white text-[16px] leading-6 px-7 py-4 hover:bg-color-warning-1 active:bg-color-warning1 disabled:bg-color-warning-2 disabled:pointer-events-none":
            type === "2xl-wa", //2Xl

          // Error
          "bg-color-error text-white text-[14px] leading-5 px-[14px] py-2 hover:bg-color-error-1 active:bg-color-error1 disabled:bg-color-error-2 disabled:pointer-events-none":
            type === "sm-er", // Small
          "bg-color-error text-white text-[14px] leading-5 px-4 py-[10px] hover:bg-color-error-1 active:bg-color-error1 disabled:bg-color-error-2 disabled:pointer-events-none":
            type === "md-er", // Medium
          "bg-color-error text-white text-[16px] leading-6 px-[18px] py-[10px] hover:bg-color-error-1 active:bg-color-error1 disabled:bg-color-error-2 disabled:pointer-events-none":
            type === "lg-er", // Large
          "bg-color-error text-white text-[16px] leading-6 px-5 py-3 hover:bg-color-error-1 active:bg-color-error1 disabled:bg-color-error-2 disabled:pointer-events-none":
            type === "xl-er", // Xl
          "bg-color-error text-white text-[16px] leading-6 px-7 py-4 hover:bg-color-error-1 active:bg-color-error1 disabled:bg-color-error-2 disabled:pointer-events-none":
            type === "2xl-er", //2Xl

          // Info
          "bg-color-info text-white text-[14px] leading-5 px-[14px] py-2 hover:bg-color-info-1 active:bg-color-info1 disabled:bg-color-info-2 disabled:pointer-events-none":
            type === "sm-in", // Small
          "bg-color-info text-white text-[14px] leading-5 px-4 py-[10px] hover:bg-color-info-1 active:bg-color-info1 disabled:bg-color-info-2 disabled:pointin-events-none":
            type === "md-in", // Medium
          "bg-color-info text-white text-[16px] leading-6 px-[18px] py-[10px] hover:bg-color-info-1 active:bg-color-info1 disabled:bg-color-info-2 disabled:pointin-events-none":
            type === "lg-in", // Large
          "bg-color-info text-white text-[16px] leading-6 px-5 py-3 hover:bg-color-info-1 active:bg-color-info1 disabled:bg-color-info-2 disabled:pointin-events-none":
            type === "xl-in", // Xl
          "bg-color-info text-white text-[16px] leading-6 px-7 py-4 hover:bg-color-info-1 active:bg-color-info1 disabled:bg-color-info-2 disabled:pointin-events-none":
            type === "2xl-in", //2Xl

          // Outline
          "bg-white text-color-primary text-[14px] leading-5 px-[14px] py-2 hover:bg-color-primary-1 active:bg-[#F9F5FF] disabled:bg-color-primary-2 disabled:pointer-events-none":
            type === "sm-ou", // Small
          "bg-white text-color-primary text-[14px] leading-5 px-4 py-[10px] hover:bg-color-primary-1 active:bg-[#F9F5FF] disabled:bg-color-primary-2 disabled:pointin-events-none":
            type === "md-ou", // Medium
          "bg-white text-color-primary text-[16px] leading-6 px-[18px] py-[10px] hover:bg-color-primary-1 active:bg-[#F9F5FF] disabled:bg-color-primary-2 disabled:pointin-events-none":
            type === "lg-ou", // Large
          "bg-white text-color-primary text-[16px] leading-6 px-5 py-3 hover:bg-color-primary-1 active:bg-[#F9F5FF] disabled:bg-color-primary-2 disabled:pointin-events-none":
            type === "xl-ou", // Xl
          "bg-white text-color-primary text-[16px] leading-6 px-7 py-4 hover:bg-color-primary-1 active:bg-[#F9F5FF] disabled:bg-color-primary-2 disabled:pointin-events-none":
            type === "2xl-ou", //2Xl

          // White
          "bg-white border-white text-color-primary text-[14px] leading-5 px-[14px] py-2 hover:bg-color-primary-2 disabled:bg-color-primary-2 disabled:pointer-events-none":
            type === "sm-wh", // Small
          "bg-white border-white text-color-primary text-[14px] leading-5 px-4 py-[10px] hover:bg-color-primary-2 disabled:bg-color-primary-2 disabled:pointin-events-none":
            type === "md-wh", // Medium
          "bg-white border-white text-color-primary text-[16px] leading-6 px-[18px] py-[10px] hover:bg-color-primary-2 disabled:bg-color-primary-2 disabled:pointin-events-none":
            type === "lg-wh", // Large
          "bg-white border-white text-color-primary text-[16px] leading-6 px-5 py-3 hover:bg-color-primary-2 disabled:bg-color-primary-2 disabled:pointin-events-none":
            type === "xl-wh", // Xl
          "bg-white border-white text-color-primary text-[16px] leading-6 px-7 py-4 hover:bg-color-primary-2 disabled:bg-color-primary-2 disabled:pointin-events-none":
            type === "2xl-wh", //2Xl

          // Link
          "bg-white border-white text-color-primary text-[14px] leading-5 disabled:bg-color-primary-2 disabled:pointer-events-none":
            type === "sm-li", // Small
          "bg-white border-white text-color-primary text-[14px] leading-5 disabled:bg-color-primary-2 disabled:pointin-events-none":
            type === "md-li", // Medium
          "bg-white border-white text-color-primary text-[16px] leading-6 disabled:bg-color-primary-2 disabled:pointin-events-none":
            type === "lg-li", // Large
        },
        {
          [width]: width,
        }
      )}
      disabled={disabled}
      onClick={clickHandler}
    >
      {icon === "left" ? (
        <img src={`/images/icons/${iconImg}.svg`} className="mr-2" alt="" />
      ) : null}

      {icon === "only" ? (
        <img src={`/images/icons/${iconImg}.svg`} className="" alt="" />
      ) : (
        <span>{text}</span>
      )}

      {icon === "right" ? (
        <img src={`/images/icons/${iconImg}.svg`} className="ml-2" alt="" />
      ) : null}
    </button>
  );
};

export default ButtonGroup;
