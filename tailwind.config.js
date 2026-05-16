/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#FEF3E9',
          500: '#E8720C',
          600: '#C45E08',
        },
        neutral: {
          0: '#FFFFFF',
          100: '#F5F5F5',
          300: '#D4D4D4',
          600: '#6B6B6B',
          900: '#1A1A1A',
        },
        error: {
          100: '#FEF2F2',
          500: '#DC2626',
        },
        success: {
          100: '#F0FDF4',
          500: '#16A34A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'xs':   ['12px', '16px'],
        'sm':   ['14px', '20px'],
        'base': ['16px', '24px'],
        'lg':   ['18px', '28px'],
        'xl':   ['20px', '30px'],
        '2xl':  ['24px', '32px'],
        '3xl':  ['30px', '38px'],
      },
      spacing: {
        '1':  '4px',
        '2':  '8px',
        '3':  '12px',
        '4':  '16px',
        '6':  '24px',
        '8':  '32px',
        '12': '48px',
        '16': '64px',
      },
      borderRadius: {
        'sm':   '6px',
        'md':   '12px',
        'lg':   '16px',
        'full': '999px',
      },
      boxShadow: {
        'sm': '0 1px 3px rgba(0,0,0,0.1)',
        'md': '0 4px 12px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
}