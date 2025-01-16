/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C23636", // Dark Red: For accents and key highlights
        primaryHover: "#E57373", // Muted Red: For hover effects on buttons/links
        secondary: "#0077FF", // Electric Blue: For secondary buttons, links, and headings
        secondaryHover: "#0056D1", // Darker Blue: Hover for secondary elements
        backgroundPrimary: "#1A1A1A", // Jet Black: Main background color
        backgroundSecondary: "#2B2B2B", // Charcoal Gray: Secondary backgrounds
        backgroundAccent: "#F5F2E9", // Neutral Beige: Light background sections
        textPrimary: "#FFFFFF", // Bright White: Main text
        textSecondary: "#E0E0E0", // Light Gray: Subtext or less prominent text
        textHighlight: "#2ECC71", // Emerald Green: For success indicators or emphasis
        borderNeutral: "#4F4F4F", // Steel Gray: For subtle borders
        success: "#2ECC71", // Emerald Green: Success states
        error: "#C23636", // Dark Red: Error states
      },
    },
  },
  plugins: [],
};
