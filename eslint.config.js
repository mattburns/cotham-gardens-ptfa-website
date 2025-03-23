import next from 'eslint-config-next';
import tailwindcss from 'eslint-plugin-tailwindcss';

export default [
  // Next.js handles React, JSX, and modern JS syntax
  ...next(),

  {
    plugins: {
      tailwindcss
    },
    rules: {
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/no-custom-classname': 'off' // can turn on if you want stricter Tailwind class checking
    }
  },

  {
    rules: {
      'react/prop-types': 'off' // disable prop-types if not using them
    }
  }
];
