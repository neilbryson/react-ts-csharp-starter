// This is only used for unit tests (for import.meta.env)
module.exports = {
  env: {
    test: {
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        '@babel/preset-react',
        '@babel/preset-typescript',
      ],
      plugins: ['babel-plugin-transform-vite-meta-env'],
    },
  },
};
