const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */

const extraNodeModules = {
  stream: require.resolve('stream-browserify'),
  'readable-stream': require.resolve('readable-stream'),
};

const config = {
  resolver: {
    sourceExts: ['js', 'ts', 'tsx', 'svg', 'json'],
    extraNodeModules: {
      ...extraNodeModules,
      'react-native-url-polyfill': require.resolve('react-native-url-polyfill'),
    },
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
