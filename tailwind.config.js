/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'myself': "url('./src/assets/images/me.jpg')",
        'html': "url('./src/assets/images/html.png')",
        'css': "url('./src/assets/images/css.png')",
        'js': "url('./src/assets/images/js.png')",
        'react': "url('./src/assets/images/react.png')",
        'tailwind': "url('./src/assets/images/tailwind.png')",
        'csharp': "url('./src/assets/images/csharp.png')",
        'python': "url('./src/assets/images/python.png')",
        'git': "url('./src/assets/images/git.png')",
        'firebase': "url('./src/assets/images/firebase.png')",
        'sql': "url('./src/assets/images/sql.png')",
        'fb': "url('./src/assets/images/fb.png')",
        'ig': "url('./src/assets/images/ig.png')",
        'github': "url('./src/assets/images/github.png')",
        'follow': "url('./src/assets/images/follow.png')"
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}