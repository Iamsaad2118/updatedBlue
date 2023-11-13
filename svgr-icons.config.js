/** @type import('@svgr/core').Config */
module.exports = {
  icon: true,
  ref: true,
  titleProp: true,
  replaceAttrValues: {
    "#000": "currentColor",
    "#000000": "currentColor",
    black: "currentColor",
  },
  typescript: true,
  outDir: "src/components/icons",
  svgProps: { role: "img" },
  prettier: true,
  svgoConfig: {
    plugins: [
      {
        name: "preset-default",
        params: {
          overrides: {
            convertColors: false,
            removeViewBox: false,
          },
        },
      },
      "convertStyleToAttrs",
    ],
  },
};
