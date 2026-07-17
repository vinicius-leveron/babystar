/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          0: '#060A1C',
          1: '#0B1026',
          2: '#121A3A',
          3: '#1A2350',
        },
        gold: {
          DEFAULT: '#F5C86B',
          light: '#FBDF9E',
          2: '#E8A94E',
          deep: '#C9862F',
        },
        peach: '#F0A987',
        lav: '#A9B2E8',
        sky: '#7FA8E8',
        ink: '#F4F3FF',
        ink2: '#BDC2E0',
        muted: '#818AB4',
        ok: '#8ADBAE',
        alert: '#F2A0A0',
      },
      fontFamily: {
        rounded: [
          'ui-rounded', 'SF Pro Rounded', 'Nunito', 'Varela Round',
          'Quicksand', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif',
        ],
      },
      borderRadius: {
        card: '20px',
        lg2: '28px',
      },
      boxShadow: {
        gold: '0 8px 26px rgba(245,200,107,0.32)',
        'gold-sm': '0 0 18px rgba(245,200,107,0.28)',
        card: '0 12px 34px rgba(0,0,0,0.5)',
        phone: '0 30px 80px rgba(0,0,0,0.65), 0 4px 18px rgba(0,0,0,0.5)',
      },
      backgroundImage: {
        'gold-grad': 'linear-gradient(135deg,#F5C86B 0%,#E8A94E 100%)',
        'sky-grad': 'linear-gradient(180deg,#0B1026 0%,#060A1C 55%,#050817 100%)',
      },
      keyframes: {
        twinkle: {
          '0%,100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        twinkle: 'twinkle 3.5s ease-in-out infinite',
        floaty: 'floaty 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
