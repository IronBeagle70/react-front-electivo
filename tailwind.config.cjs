/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'body-color':'#F6F8F7',
        'bg-linkedin':'#0077b7',
        'bg-github':'#171515',
        'bg-react':'#00D8FF'
      }
    },
  },
  plugins: [],
}
