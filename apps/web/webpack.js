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

  // Replaces the webpack rule that loads SVGs as static files to leave out SVG files for us to handle
  const indexOfRuleToRemove = config.module.rules.findIndex((rule) =>
    rule.test.toString().includes('svg')
  );
  config.module.rules.splice(indexOfRuleToRemove, 1, {
    test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
    loader: require.resolve('file-loader'),
    options: {
      name: 'static/media/[name].[hash:8].[ext]',
      esModule: false,
    },
  });
  config.module.rules.push(
    {
      test: /\.ttf$/,
      loader: require.resolve('file-loader'),
      options: { esModule: false, name: 'static/media/[path][name].[ext]' },
    },
    {
      test: /.svg$/,
      use: ['@svgr/webpack'],
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
