const theme = {
  button: {
    colors: {
      active: {
        background: "#359DCB",
        text: "#FFFFFF",
      },
      hover: {
        background: "#205F7B",
        text: "#FFFFFF",
      },
      focused: {
        background: "#C2E6F5",
        border: "2px #297B9E solid",
        text: "#297B9E",
      },
      pressed: {
        background: "#F6F7F6",
        border: "2px #205F7B solid",
        text: "#205F7B",
      },
      disabled: {
        background: "#E4E5E4",
        text: "#A9ABA9",
      },
    },
    typography: {
        fontFamily: "IBM Plex Sans",
        fontSize: "14px",
        fontWeight: "700",
    },
  },
  boxShadow: {
    elevation01: "0px 2px 4px 0px #00161F3D",
    elevation02: "0px 4px 4px 0px #00000040",
    elevation03: "0px 6px 12px 1px #00161F3D",
  },
};

export default theme;
