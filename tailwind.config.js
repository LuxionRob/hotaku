/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.jsx",
    "./src/components/*/*.jsx",
    "./src/pages/**/*.jsx",
    "./src/layouts/**/*.jsx",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'red-salsa': '#ff595eff',
        'sunglow': '#ffca3aff',
        'yellow-green': '#8ac926ff',
        'green-blue-crayola': '#1982c4ff',
        'royal-purple': '#6a4c93ff',
        'rich-black-fogra-29': '#011627ff',
        'baby-powder': '#fdfffcff',
        'tiffany-blue': '#2ec4b6ff',
        'rose-madder': '#e71d36ff',
        'orange-peel': '#ff9f1cff',
        'space-cadet': '#2b2d42ff',
        'manatee': '#8d99aeff',
        'cultured': '#edf2f4ff',
        'imperial-red': '#ef233cff',
        'amaranth-red': '#d90429ff',
        'paradise-pink': '#ef476fff',
        'orange-yellow-crayola': '#ffd166ff',
        'caribbean-green': '#06d6a0ff',
        'blue-ncs': '#118ab2ff',
        'midnight-green-eagle-green': '#073b4cff',
      }
    },
  },
  plugins: [],
}
