const webpack = require('webpack')
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
    webpack: function override(config, _) {
        return {
            ...config, 
            resolve: {
                ...config.resolve,
                plugins: [
                    ...config.resolve.plugins,
                    new TsConfigPathsPlugin()
                ]
            },
            plugins: [
                ...config.plugins,
            ]
        }
    }
}