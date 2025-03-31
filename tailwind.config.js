/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "hsl(20, 14.3%, 4.1%)",
        foreground: "hsl(60, 9.1%, 97.8%)",
        card: "hsl(20, 14.3%, 4.1%)",
        "card-foreground": "hsl(60, 9.1%, 97.8%)",
        popover: "hsl(20, 14.3%, 4.1%)",
        "popover-foreground": "hsl(60, 9.1%, 97.8%)",
        primary: "hsl(47.9, 95.8%, 53.1%)",
        "primary-foreground": "hsl(26, 83.3%, 14.1%)",
        secondary: "hsl(12, 6.5%, 15.1%)",
        "secondary-foreground": "hsl(60, 9.1%, 97.8%)",
        muted: "hsl(12, 6.5%, 15.1%)",
        "muted-foreground": "hsl(24, 5.4%, 63.9%)",
        accent: "hsl(12, 6.5%, 15.1%)",
        "accent-foreground": "hsl(60, 9.1%, 97.8%)",
        destructive: "hsl(0, 62.8%, 30.6%)",
        "destructive-foreground": "hsl(60, 9.1%, 97.8%)",
        border: "hsl(12, 6.5%, 15.1%)",
        input: "hsl(12, 6.5%, 15.1%)",
      },
    },
  },
  plugins: [],
};
