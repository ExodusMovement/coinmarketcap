module.exports = function (config) {
  config.set({
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'test/**/*.js'
    ],
    frameworks: ['browserify', 'detectBrowsers', 'tap'],
    plugins: [
      'karma-browserify',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-detect-browsers',
      'karma-tap'
    ],
    preprocessors: {
      'test/**/*.js': ['browserify']
    },
    singleRun: true,
    browserify: {
      debug: true,
      transform: [
        [
          'babelify',
          {
            'presets': ['es2015'],
            'plugins': [
              'add-module-exports',
              'syntax-async-functions',
              'transform-regenerator',
              'transform-runtime',
              'transform-strict-mode'
            ]
          }

        ]
      ]
    },
    detectBrowsers: {
      enabled: true,
      usePhantomJS: false,
      postDetection: function (availableBrowser) {
        if (process.env.TRAVIS) {
          return ['Firefox']
        }

        var browsers = ['Chrome', 'Firefox']
        return browsers.filter(function (browser) {
          return availableBrowser.indexOf(browser) !== -1
        })
      }
    }
  })
}
