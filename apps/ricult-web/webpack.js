const getWebpackConfig = require('@nrwl/react/plugins/webpack');
const webpack = require('webpack');

function getCustomWebpackConfig(webpackConfig) {
  const config = getWebpackConfig(webpackConfig);
  const isProduction = webpackConfig.mode === 'production';

  if (!isProduction) {
    config.resolve.alias = {
      'react-native': 'react-native-web',
    };
  }

  config.module.rules.push(
    {
      test: /\.ttf$/,
      loader: require.resolve('file-loader'),
      options: { esModule: false, name: 'static/media/[path][name].[ext]' },
    },
    {
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    }
  );

  config.plugins = [
    ...config.plugins,
    new webpack.EnvironmentPlugin({ JEST_WORKER_ID: null }),
  ];
  // config.entry = ['babel-polyfill', './src/main.tsx'];
  return config;
}

module.exports = getCustomWebpackConfig;
