import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // jsx-a11y plugin is already registered by eslint-config-next. Tighten
  // the rules that core-web-vitals leaves as warns or off, so common a11y
  // regressions (anchor without href, click without keyboard handler, role
  // on a non-interactive element) fail lint instead of only axe at runtime.
  {
    files: ['**/*.{ts,tsx,js,jsx,mjs}'],
    rules: {
      'jsx-a11y/anchor-is-valid': 'error',
      'jsx-a11y/click-events-have-key-events': 'error',
      'jsx-a11y/no-static-element-interactions': 'error',
      'jsx-a11y/no-noninteractive-element-interactions': 'error',
      'jsx-a11y/role-has-required-aria-props': 'error',
      'jsx-a11y/aria-props': 'error',
      'jsx-a11y/aria-role': 'error',
      'jsx-a11y/aria-unsupported-elements': 'error',
      'jsx-a11y/no-redundant-roles': 'error',
      'jsx-a11y/heading-has-content': 'error',
      'jsx-a11y/anchor-has-content': 'error',
      'jsx-a11y/label-has-associated-control': 'error',
      'jsx-a11y/no-aria-hidden-on-focusable': 'error',
    },
  },
  // Architecture boundaries: data and types are pure; they cannot import
  // from React-tree code (components, app routes, lib/analytics, etc.).
  // Catches accidental coupling early. The list grows as the codebase does.
  {
    files: ['src/data/**/*.{ts,tsx}', 'src/types/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@/components/*', '@/app/*'],
              message:
                'src/data and src/types must stay pure: no React-tree imports.',
            },
            {
              group: ['react', 'react-dom', 'next/*', 'framer-motion'],
              message:
                'src/data and src/types must stay pure: no React/Next/runtime UI imports.',
            },
          ],
        },
      ],
    },
  },
  // Library code (src/lib/*) may depend on data/types but not on
  // components or app routes. Keeps the call graph honest.
  {
    files: ['src/lib/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@/components/*', '@/app/*'],
              message:
                'src/lib must not import from components or app routes; it is a leaf.',
            },
          ],
        },
      ],
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'coverage/**',
    'playwright-report/**',
    'test-results/**',
    '.lighthouseci/**',
  ]),
]);

export default eslintConfig;
