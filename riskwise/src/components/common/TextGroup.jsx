import React from "react";
import classnames from "classnames";
const TextGroup = ({text, type = "p1-r"}) => {
    return (
        <div className={classnames("font-main-font", {
						// Heading/h1
            "font-bold text-[44px] leading-[53.25px]": type === "h1-b", // Bold
            "font-semibold text-[44px] leading-[53.25px]": type === "h1-s", // Semi Bold
            "font-medium text-[44px] leading-[53.25px]": type === "h1-m", // Medium
						"font-normal text-[44px] leading-[53.25px]": type === "h1-r", // Regular
						"font-light text-[44px] leading-[53.25px]": type === "h1-l", // Light

						// Heading/h2
            "font-bold text-[41px] leading-[49.62px]": type === "h2-b", // Bold
            "font-semibold text-[41px] leading-[49.62px]": type === "h2-s", // Semi Bold
            "font-medium text-[41px] leading-[49.62px]": type === "h2-m", // Medium
						"font-normal text-[41px] leading-[49.62px]": type === "h2-r", // Regular
						"font-light text-[41px] leading-[49.62px]": type === "h2-l", // Light

						// Heading/h3
            "font-bold text-[36px] leading-[43.57px]": type === "h3-b", // Bold
            "font-semibold text-[36px] leading-[43.57px]": type === "h3-s", // Semi Bold
            "font-medium text-[36px] leading-[43.57px]": type === "h3-m", // Medium
						"font-normal text-[36px] leading-[43.57px]": type === "h3-r", // Regular
						"font-light text-[36px] leading-[43.57px]": type === "h3-l", // Light

						// Heading/h4
            "font-bold text-[32px] leading-[38.73px]": type === "h4-b", // Bold
            "font-semibold text-[32px] leading-[38.73px]": type === "h4-s", // Semi Bold
            "font-medium text-[32px] leading-[38.73px]": type === "h4-m", // Medium
						"font-normal text-[32px] leading-[38.73px]": type === "h4-r", // Regular
						"font-light text-[32px] leading-[38.73px]": type === "h4-l", // Light

						// Heading/h5
            "font-bold text-[29px] leading-[35.1px]": type === "h5-b", // Bold
            "font-semibold text-[29px] leading-[35.1px]": type === "h5-s", // Semi Bold
            "font-medium text-[29px] leading-[35.1px]": type === "h5-m", // Medium
						"font-normal text-[29px] leading-[35.1px]": type === "h5-r", // Regular
						"font-light text-[29px] leading-[35.1px]": type === "h5-l", // Light

						// Heading/h6
            "font-bold text-[26px] leading-[31.47px]": type === "h6-b", // Bold
            "font-semibold text-[26px] leading-[31.47px]": type === "h6-s", // Semi Bold
            "font-medium text-[26px] leading-[31.47px]": type === "h6-m", // Medium
						"font-normal text-[26px] leading-[31.47px]": type === "h6-r", // Regular
						"font-light text-[26px] leading-[31.47px]": type === "h6-l", // Light

						// Paragraph/p1
            "font-bold text-[23px] leading-[27.84px]": type === "p1-b", // Bold
            "font-semibold text-[23px] leading-[27.84px]": type === "p1-s", // Semi Bold
            "font-medium text-[23px] leading-[27.84px]": type === "p1-m", // Medium
						"font-normal text-[23px] leading-[27.84px]": type === "p1-r", // Regular
						"font-light text-[23px] leading-[27.84px]": type === "p1-l", // Light

						// Paragraph/p2
            "font-bold text-[20px] leading-[24.2px]": type === "p2-b", // Bold
            "font-semibold text-[20px] leading-[24.2px]": type === "p2-s", // Semi Bold
            "font-medium text-[20px] leading-[24.2px]": type === "p2-m", // Medium
						"font-normal text-[20px] leading-[24.2px]": type === "p2-r", // Regular
						"font-light text-[20px] leading-[24.2px]": type === "p2-l", // Light

						// Paragraph/p3
            "font-bold text-[18px] leading-[21.78px]": type === "p3-b", // Bold
            "font-semibold text-[18px] leading-[21.78px]": type === "p3-s", // Semi Bold
            "font-medium text-[18px] leading-[21.78px]": type === "p3-m", // Medium
						"font-normal text-[18px] leading-[21.78px]": type === "p3-r", // Regular
						"font-light text-[18px] leading-[21.78px]": type === "p3-l", // Light

						// Paragraph/p4
            "font-bold text-[16px] leading-[19.36px]": type === "p4-b", // Bold
            "font-semibold text-[16px] leading-[19.36px]": type === "p4-s", // Semi Bold
            "font-medium text-[16px] leading-[19.36px]": type === "p4-m", // Medium
						"font-normal text-[16px] leading-[19.36px]": type === "p4-r", // Regular
						"font-light text-[16px] leading-[19.36px]": type === "p4-l", // Light

						// Paragraph/p5
            "font-bold text-[14px] leading-[16.94px]": type === "p5-b", // Bold
            "font-semibold text-[14px] leading-[16.94px]": type === "p5-s", // Semi Bold
            "font-medium text-[14px] leading-[16.94px]": type === "p5-m", // Medium
						"font-normal text-[14px] leading-[16.94px]": type === "p5-r", // Regular
						"font-light text-[14px] leading-[16.94px]": type === "p5-l", // Light

						// Overline
            "font-bold text-[13px] leading-[15.73px]": type === "ol-b", // Bold
            "font-semibold text-[13px] leading-[15.73px]": type === "ol-s", // Semi Bold
            "font-medium text-[13px] leading-[15.73px]": type === "ol-m", // Medium
						"font-normal text-[13px] leading-[15.73px]": type === "ol-r", // Regular
						"font-light text-[13px] leading-[15.73px]": type === "ol-l", // Light

						// Smalltext
            "font-bold text-[11px] leading-[13.31px]": type === "st-b", // Bold
            "font-semibold text-[11px] leading-[13.31px]": type === "st-s", // Semi Bold
            "font-medium text-[11px] leading-[13.31px]": type === "st-m", // Medium
						"font-normal text-[11px] leading-[13.31px]": type === "st-r", // Regular
						"font-light text-[11px] leading-[13.31px]": type === "st-l", // Light
            })}>
            {text}
        </div>
    )
}

export default TextGroup;