const { nodeExternalsPlugin } = require('esbuild-node-externals');
const { PRODUCTION_ENTRANCE, PRODUCTION_OUTPUT, defaultConfig } = require('./esbuild.common');

require('esbuild')
    .build({
        ...defaultConfig,
        entryPoints: [PRODUCTION_ENTRANCE],
        outfile: PRODUCTION_OUTPUT,
        minify: true,
        sourcemap: false,
        plugins: [nodeExternalsPlugin({
            allowList: [
                'css'
            ]
        })]
    })
    .catch((err) => {
        console.log(err)
        process.exit(1);
    })