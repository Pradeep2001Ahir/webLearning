export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        lime: { 50:"#f8fce9",100:"#eef8c8",200:"#def29a",300:"#caea5b",400:"#b7e51f",500:"#9fcf12",600:"#7da50b" },
        ink: { 900:"#10182a",800:"#172238",700:"#26324a",600:"#44506a" }
      },
      fontFamily: {
        sans: ["Nunito","ui-sans-serif","system-ui","sans-serif"],
        display: ["Poppins","Nunito","ui-sans-serif","system-ui","sans-serif"]
      },
      boxShadow: {
        soft:"0 24px 70px rgba(16,24,42,.11)",
        card:"0 12px 35px rgba(16,24,42,.075)"
      }
    }
  },
  plugins: []
};
