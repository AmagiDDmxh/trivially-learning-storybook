const path = require('path')

const resolve = (...paths) => path.resolve(__dirname, ...paths)

module.exports = {
  stories: [
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: [
              require('tailwindcss/nesting'),
              require('tailwindcss'),
              require('autoprefixer'),
            ],
          },
        },
      ],
      include: [resolve('../src'), resolve('../components')],
    })
    return config
  },
}
