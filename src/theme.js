const colors = {
  white: "#FFFFFF",
  whiteTransp: "#FFFFFFC4",
  whiteLilac: "#FBFBFE",
  black: "#000000",
  mineShaft: "#252525",
  mineShaftTransp: "#65656536",
  indigo: "#3C6EC9",
  indigoTransp: "#3c6ec942",
  slateGray: "#6E7E91",
  mischka: "#D1D5DA4D",
  vinRouge: "#8E3C6B",
  vinRougeLessSaturated: "#8E3C6B9D",
};

const common = {
  breakpoint: {
    mobileMin: "380px",
    mobileMid: "480px",
    mobileMax: "767px",
    tabletMax: "860px",
    navMax: "1100px",
  },
};

export const themeLight = {
  ...common,
  color: {
    boxBackground: colors.white,
    headerLine: colors.black,
    site: {
      background: colors.whiteLilac,
      text: colors.slateGray,
    },
    buttonLink: {
      background: colors.indigo,
      text: colors.white,
      hover: colors.vinRouge,
      active: colors.vinRougeLessSaturated,
    },
    list: {
      headerText: colors.indigo,
      marker: colors.indigo,
      line: colors.mischka,
      text: colors.slateGray,
      underscore: colors.indigoTransp,
      activeText: colors.vinRouge,
      activeUnderscore: colors.vinRougeLessSaturated,
    },
    icon: {
      static: colors.black,
      hover: colors.vinRouge,
      active: colors.vinRougeLessSaturated,
    },
    themeSwitch: {
      background: colors.whiteLilac,
      icon: colors.white,
    },
  },
};

export const themeDark = {
  ...common,
  color: {
    boxBackground: colors.mineShaftTransp,
    headerLine: colors.white,
    site: {
      background: colors.mineShaft,
      text: colors.whiteTransp,
    },
    buttonLink: {
      background: colors.indigo,
      text: colors.white,
      hover: colors.vinRouge,
      active: colors.vinRougeLessSaturated,
    },
    list: {
      headerText: colors.white,
      marker: colors.indigo,
      line: colors.mischka,
      text: colors.whiteTransp,
      underscore: colors.indigoTransp,
      activeText: colors.vinRouge,
      activeUnderscore: colors.vinRougeLessSaturated,
    },
    icon: {
      static: colors.whiteTransp,
      hover: colors.vinRouge,
      active: colors.vinRougeLessSaturated,
    },
    themeSwitch: {
      background: colors.whiteLilac,
      icon: colors.white,
    },
  },
};
