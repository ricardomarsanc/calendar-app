module.exports = {
  chainWebpack: config => {
    config
        .plugin('html')
        .tap(args => {
            args[0].title = "CloudManLabs Calendar App";
            return args;
        })
  },
  transpileDependencies: [
    'vuetify'
  ]
}
