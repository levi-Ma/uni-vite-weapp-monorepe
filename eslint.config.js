import antfu from '@antfu/eslint-config'

export default await antfu({
  ignores: ['dist*', 'output', 'cache', 'static', 'public', 'node_modules', '**/*.d.ts', '**/*.md'],
}, {
  rules: {
    'n/prefer-global/process': ['error', 'always' | 'never'],
    'no-unused-vars': process.env.NODE_ENV !== 'production' ? 'off' : 'warn',
    'no-console': process.env.NODE_ENV !== 'production' ? 'off' : 'warn',
  },
})
