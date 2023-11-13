/** @type import('@svgr/core').Config */
module.exports = {
  ref: true,
  titleProp: true,
  replaceAttrValues: {
    "#000": "currentColor",
    "#000000": "currentColor",
    black: "currentColor",
  },
  typescript: true,
  outDir: "src/components/svg",
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
