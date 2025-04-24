import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite';



// httpns://vite.dev/config/


export default defineConfig({
  plugins: [tailwindcss(), react()],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  base: '/your-repo-name/',
  darkMode: 'class', // This is important - 'class' enables manual toggling
  theme: {
    extend: {},
  },
});


