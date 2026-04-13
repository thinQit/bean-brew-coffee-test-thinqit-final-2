/**
 * PostCSS config for Next.js.
 *
 * The build was failing because `autoprefixer` isn't installed in this repo.
 * Next.js will work fine without it; we keep Tailwind (if present) and omit autoprefixer.
 */
module.exports = {
  plugins: {
    tailwindcss: {},
  },
};
