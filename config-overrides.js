const path = require('path');
const { override, useBabelRc, addWebpackModuleRule } = require("customize-cra");

module.exports = override(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc(),
    addWebpackModuleRule({
        test: /\.(jpg|jpeg|png|gif)$/,
        use: [
          {
            loader: require.resolve('file-loader'),
            options: {
              name: 'assets/images/[name].[hash:8].[ext]',
            },
          },
        ],
      })
);