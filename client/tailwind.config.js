module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        "dark-purple": "#424242",
        "light-white": "rgba(255,255,255,0.17)",
        "darkFrom": "#040e34",
        "darkTo": "#1e1e1e",
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    styled: true,
    themes: true,
    base: false,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}