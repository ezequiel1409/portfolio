/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Paleta principal — tokens vinculados a variables CSS para que cambien con el tema.
        canvas: 'var(--canvas)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        rim: 'var(--rim)',
        'rim-active': 'var(--rim-active)',

        ink: 'var(--ink)',
        'ink-2': 'var(--ink-2)',
        'ink-3': 'var(--ink-3)',

        gold: 'var(--gold)',
        'gold-dim': 'var(--gold-dim)',
        'gold-glow': 'var(--gold-glow)',

        live: 'var(--live)',
        'live-dim': 'var(--live-dim)',

        warn: 'var(--warn)',
        'warn-dim': 'var(--warn-dim)',
      },
      fontFamily: {
        // DM Mono como display: inusual y representativo del dominio (engineer, no designer)
        display: ['"DM Mono"', 'monospace'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"Fira Code"', '"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.65rem', { lineHeight: '1rem' }],
        xs: ['0.75rem', { lineHeight: '1.1rem' }],
        sm: ['0.875rem', { lineHeight: '1.5rem' }],
        base: ['1rem', { lineHeight: '1.7rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.85rem' }],
        '2xl': ['1.5rem', { lineHeight: '1.25' }],
        '3xl': ['1.875rem', { lineHeight: '1.2' }],
        '4xl': ['2.25rem', { lineHeight: '1.1' }],
        '5xl': ['3rem', { lineHeight: '1.05' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '0.95' }],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.06em',
        wider: '0.1em',
        widest: '0.15em',
      },
      borderRadius: {
        sm: '4px',
        DEFAULT: '8px',
        lg: '12px',
        xl: '16px',
      },
      boxShadow: {
        'gold-sm': '0 0 0 1px rgb(201 162 39 / 0.3)',
        'gold-md': '0 0 0 2px rgb(201 162 39 / 0.2), 0 0 16px rgb(201 162 39 / 0.1)',
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        'type-in': 'type-in 2s steps(40, end)',
        'fade-up': 'fade-up 0.5s ease forwards',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'type-in': {
          from: { width: '0' },
          to: { width: '100%' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
