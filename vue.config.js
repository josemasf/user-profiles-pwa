module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    name: 'User profile app',
    themeColor: '#0741ff',
    msTileColor: '#FAFAFA',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {      
      swSrc: 'dev/sw.js',      
    }
  }
}
