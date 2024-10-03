const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "mc",
    projectName: "react-multiple",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.scss$/, 
          use: [
            "style-loader", 
            "css-loader",
            "sass-loader", 
          ],
        },
      ],
    },
  });
};
