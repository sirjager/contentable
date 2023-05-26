/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [],
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },
    extend: {
      borderWidth: { 1: "1px" },
      borderRadius: {
        buttons: "var(--radius-buttons)",
        cards: "var(--radius-cards)",
      },
      colors: {
        accent: {
          light: "var(--accent-light)",
          dark: "var(--accent-dark)",
        },
        border: { light: "var(--border-light)", dark: "var(--border-dark)" },
        primary: { light: "var(--primary-light)", dark: "var(--primary-dark)" },
        secondary: {
          light: "var(--secondary-light)",
          dark: "var(--secondary-dark)",
        },
        "color-primary": {
          light: "var(--text-primary-light)",
          dark: "var(--text-primary-dark)",
        },
        "color-secondary": {
          light: "var(--text-secondary-light)",
          dark: "var(--text-secondary-dark)",
        },
        "color-secondary": {
          light: "var(--text-secondary-light)",
          dark: "var(--text-secondary-dark)",
        },
        "color-muted": {
          light: "var(--text-muted-light)",
          dark: "var(--text-muted-dark)",
        },
      },
    },
  },
};
