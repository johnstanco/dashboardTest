/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,ts}"],
    theme: {
      extend: {
        colors: {
          primary: { 50:'#eef7ff',100:'#d9ecff',200:'#b5d9ff',300:'#8ec5ff',400:'#61adff',500:'#3b97ff',600:'#1f7ae6',700:'#165fba',800:'#144f97',900:'#123f78' }
        },
        boxShadow: { soft: '0 10px 25px -10px rgba(0,0,0,0.1)' },
        borderRadius: { card: 'var(--card-radius)' }
      }
    },
    plugins: []
  };
  