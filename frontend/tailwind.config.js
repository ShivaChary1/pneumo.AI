/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  text:{
    blue:{
      1:"#4f46e5"
    }
  },
  bg:{
    blue:{
      1:"#4f46e5"
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
