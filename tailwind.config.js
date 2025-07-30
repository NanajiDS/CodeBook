 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js}"],
   darkMode: ['selector', '[data-mode="dark"]','[class="dark"]'],
   theme: {
     extend: {},
   },
   plugins: [],
 }