const { nodeExternalsPlugin } = require('esbuild-node-externals');
const { EXAMPLE_ENTRANCE, EXAMPLE_OUTPUT, defaultConfig } = require('./esbuild.common');

require('esbuild')
    .build({
        ...defaultConfig,
        entryPoints: [EXAMPLE_ENTRANCE],
        outfile: EXAMPLE_OUTPUT,
        plugins: [nodeExternalsPlugin({
            allowList: [
                'css',
                'react',
                'react-dom'
            ]
        })]
    })
    .catch((err) => {
        console.log(err)
        process.exit(1);
    })