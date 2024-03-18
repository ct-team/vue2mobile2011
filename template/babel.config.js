module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true
      },
      'vant'
    ],
    [
      'transform-modules',
      {
        nat: {
          transform: 'nat/lib/${member}',
          preventFullImport: true,
          kebabCase: true
        }
      }
    ]
  ]
};
