module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'custom': '270px',
        'custom2': '350px', // or any value you desire
      },
      boxShadow: {
        'custom': '10px 10px 1px black', // Replace with desired values
      },
      height: {
        'custom': '540px', // or any value you desire
      },
      fontFamily: {
        
        'figtree' :['figtree', 'sans-serif'],
        'figtree-italy' :['figtree-italy', 'sans-serif']
      },
    },
  },
  plugins: [],
};
