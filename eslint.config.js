import antfu from '@antfu/eslint-config'

export default antfu(
  {
    react: true,
  },
  {
    rules: {
      'react/prop-types': [0], // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md#rule-options
      'no-console': ['off', { allow: ['warn', 'error'] }],
    },
  },
)
