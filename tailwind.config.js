/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1100px',
        '2xl': '1496px',
      },
    },
    extend: {
      colors: {
        activeLink: '#FF963C',
        white: "#fff",
        darkslategray: {
          "100": "#414141",
          "200": "#2e2e2e",
          "300": "rgba(46, 46, 46, 0.5)",
          "400": "rgba(46, 46, 46, 0.25)",
        },
        gray: {
          "100": "#777",
          "200": "rgba(255, 255, 255, 0)",
          "300": "rgba(255, 255, 255, 0.15)",
        },
        gold: "#ffcc21",
        darkorange: {
          "100": "#ff963c",
          "200": "#ea6c00",
          "300": "rgba(255, 150, 60, 0.15)",
        },
        black: "#000",
        whitesmoke: "#ebebeb",
        dimgray: "#707070",
      },
      spacing: {},
      fontFamily: {
        "hiragino-kaku-gothic-pro": "'Hiragino Kaku Gothic Pro'",
        inter: "Inter",
      },
      borderRadius: {
        "10xs": "3px",
        "2xs": "11px",
      },
    },
    fontSize: {
      "2xs": "0.688rem",
      lg: "1.125rem",
      "3xl": "1.375rem",
      mini: "0.938rem",
      "5xs": "0.5rem",
      xs: "0.75rem",
      sm: "0.875rem",
      "6xl": "1.563rem",
      xl: "1.25rem",
      base: "1rem",
      "3xs": "0.625rem",
      inherit: "inherit",
    }
  },
  variants: {
    extend: {
      textDecoration: ['hover', 'focus', 'active'],
      textColor: ['active'],
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    function ({ addUtilities }) {
      addUtilities({
        '.absolute-center': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
      });
    },
  ],
};
