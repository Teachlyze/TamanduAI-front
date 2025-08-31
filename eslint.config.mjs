import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import nextPlugin from '@next/eslint-plugin-next';

// Configuração base para React
const reactConfig = {
  plugins: {
    'react': pluginReact,
  },
  rules: {
    ...pluginReact.configs.recommended.rules,
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
  },
};

// Configuração base para Next.js
const nextConfig = {
  plugins: {
    '@next/next': nextPlugin,
  },
  rules: {
    ...nextPlugin.configs.recommended.rules,
    '@next/next/no-html-link-for-pages': 'error',
    '@next/next/no-sync-scripts': 'error',
  },
};

export default [
  // Configuração global
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  
  // Configuração do TypeScript
  ...tseslint.configs.recommended,
  
  // Configuração do React
  {
    ...reactConfig,
    files: ['**/*.{jsx,tsx}'],
  },
  
  // Configuração do Next.js
  {
    ...nextConfig,
    files: ['**/*.{js,jsx,ts,tsx}'],
  },
];
