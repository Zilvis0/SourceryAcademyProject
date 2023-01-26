const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: "@storybook/react",
  core: {
    "builder": "@storybook/builder-webpack5"
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    const devMode = configType === 'DEVELOPMENT';

    config.module.rules.push(
    {
      test: /\.scss$/,
      use: [
        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
          },
        },
        {
          loader: 'postcss-loader',
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: devMode,
          },
        },
      ],
      exclude: /\.module\.scss$/,
    });

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader', // The css-loader interprets @import and url() like import/require() and will resolve them.
          options: {
            importLoaders: 1,
            modules: {
              localIdentName: devMode ? '[folder]__[local]' : '[hash:base64]',
            },
            sourceMap: devMode,
          },
        },
        {
          loader: 'postcss-loader',
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: devMode,
          },
        },
        {
          loader: 'style-resources-loader', // Loads css resources
          options: {
            patterns: [
              `${__dirname}/../src/sass/utilities/index.scss`
            ],
          },
        },
      ],
      include: /\.module\.scss$/,
    });

    // Return the altered config
    return config;
  },
}
