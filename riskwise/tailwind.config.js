/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary
        "color-primary": "#6C58CC",
        "color-primary1": "#493DAF",
        "color-primary2": "#29278A",
        "color-primary-1": "#7D60D9",
        "color-primary-2": "#E8E1F9",

        // Secondary
        "color-secondary": "#2974E4",
        "color-secondary1": "#1851B8",
        "color-secondary2": "#0A3489",
        "color-secondary-1": "#3B90F2",
        "color-secondary-2": "#D8EEFD",

        // Success
        "color-success": "#51AA7D",
        "color-success1": "#429060",
        "color-success2": "#327143",
        "color-success-1": "#5CBC96",
        "color-success-2": "#DCF6F0",

        // Warning
        "color-warning": "#FAD962",
        "color-warning1": "#D4AC49",
        "color-warning2": "#A47A30",
        "color-warning-1": "#FCE871",
        "color-warning-2": "#FFFDE4",

        // Error
        "color-error": "#C8493B",
        "color-error1": "#AB2F28",
        "color-error2": "#851F1E",
        "color-error-1": "#D65D46",
        "color-error-2": "#F9E3DB",

        // Info
        "color-info": "#3D4751",
        "color-info1": "#2E3946",
        "color-info2": "#1D2838",
        "color-info-1": "#4B5B6A",
        "color-info-2": "#DDE6E8",

        // Menu
        "color-menu": "#2C303A",
        "color-menu2": "#939AAB",
        "color-menu-2": "#22252C",

        // Neutral
        "color-neutral": "#FFFFFF",
        "color-neutral1": "#F4F4F4",
        "color-neutral2": "#E0E0E0",
        "color-neutral3": "#757575",
        "color-neutral4": "#4B4B4B",
        "color-neutral5": "#212121",
        "color-neutral6": "#fbfcfe",
      },
      fontFamily: {
        "main-font": ["Inter", "inter"],
      },
      boxShadow: {
        focus: "0 0 0 4px #F4EBFF, 0 1px 2px 0 rgba(16, 24, 40, 0.05)",
      },
      screens: {
        "3xl": "2000px",
      },
    },
  },
  plugins: [],
};
