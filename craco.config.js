module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Find the webpack-dev-server configuration
      const devServerConfig = webpackConfig.devServer || {};
      
      // Remove deprecated options
      delete devServerConfig.onBeforeSetupMiddleware;
      delete devServerConfig.onAfterSetupMiddleware;
      
      // Add the new setupMiddlewares option if needed
      if (!devServerConfig.setupMiddlewares) {
        devServerConfig.setupMiddlewares = (middlewares, devServer) => {
          return middlewares;
        };
      }
      
      // Update the devServer configuration
      webpackConfig.devServer = devServerConfig;
      
      return webpackConfig;
    },
  },
}; 