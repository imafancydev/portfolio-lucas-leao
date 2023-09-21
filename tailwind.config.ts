/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  animation: {
    "rainbow-text-simple-animation":
      "rainbow-text-simple-animation 0.5s ease-in forwards",
    "rainbow-text-simple-animation-rev":
      "rainbow-text-simple-animation-rev 0.75s ease forwards",
  },
};
