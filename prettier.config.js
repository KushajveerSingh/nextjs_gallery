/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  experimentalTernaries: true,
  printWidth: 80,
  singleQuote: true,
  jsxSingleQuote: true,
  singleAttributePerLine: true,
  overrides: [
    {
      files: "*.md",
      options: {
        tabWidth: 4,
      },
    },
  ],
};

export default config;
