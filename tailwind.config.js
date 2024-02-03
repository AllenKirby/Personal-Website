/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'myself': "url('./src/images/me.jpg')",
        'html': "url('./src/images/html.png')",
        'css': "url('./src/images/css.png')",
        'js': "url('./src/images/js.png')",
        'react': "url('./src/images/react.png')",
        'tailwind': "url('./src/images/tailwind.png')",
        'csharp': "url('./src/images/csharp.png')",
        'java': "url('./src/images/java.png')",
        'python': "url('./src/images/python.png')",
        'git': "url('./src/images/git.png')",
        'firebase': "url('./src/images/firebase.png')",
        'sql': "url('./src/images/sql.png')"
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}