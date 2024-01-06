/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      animation: {
        "slide-in-left": "slide-in-left .75s",
        "slide-in-out-left": "slide-in-out-left 1.5s",
      },
      keyframes: {
        "slide-in-left": {
          "0%": { transform: "translateX(-1000px);" },
          "100%": { transform: "translateX(0);" },
        },
        "slide-in-out-left": {
          "0%, 100%": { width: "0" },
          "50%": { width: "50%" },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
