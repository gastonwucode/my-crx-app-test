/** @type {import('tailwindcss').Config} */
module.exports = {
  // prefix: 'twl-',
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true }), require("prettier-plugin-tailwindcss")],

}
