module.exports = function (api) {
  let resProduction = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      'babel-plugin-styled-components',
      'tailwind-rn',
      'transform-remove-console',
      [
        'module-resolver',
        {
          root: './src',
          alias: {
            '~': './src',
            '~pages': './src/pages',
            '~store': './src/store',
            '~components': './src/components',
            '~slice': './src/slice',
            '~assets': './src/assets',
            '~hooks': './src/hooks',
            '~lib': './src/lib',
            '~shared': './src/components/shared',
            '~ui': './src/components/ui',
          },
        },
      ],
      [
        '@babel/plugin-proposal-decorators',
        {
          legacy: true,
        },
      ],
      // [
      //   '@babel/plugin-proposal-class-properties',
      //   {
      //     loose: true,
      //   },
      // ],
    ],
  };

  if (api.env('production')) {
    return resProduction;
  }

  resProduction.plugins.splice(resProduction.plugins.indexOf('transform-remove-console'), 1);

  return resProduction;
};
