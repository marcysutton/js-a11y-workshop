exports.onCreateBabelConfig = function onCreateBabelConfig({ actions }) {
    actions.setBabelPlugin({
      name: `@babel/plugin-proposal-export-default-from`
    })
}
