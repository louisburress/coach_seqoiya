module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'blue-500': '#007bff',
        'blue-600': '#0056b3',
        'green-500': '#32cd32',
        'green-600': '#228b22',
        'coral': '#ff7f50',
        'dark-coral': '#ff6347',
      },
    },
  },
  variants: {},
  plugins: [],
};

