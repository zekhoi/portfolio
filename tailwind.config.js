const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: ["./components/**/*.js", "./pages/**/*.js"],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
];

module.exports = {
  purge: [
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        one:    '#FBBF24',
        two:    '#00D0FF',
        three:  '#FF4BB5',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}