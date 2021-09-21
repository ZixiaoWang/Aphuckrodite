const path = require('path');
const { nodeExternalsPlugin } = require('esbuild-node-externals');

const EXAMPLE_ENTRANCE = path.resolve(__dirname, '../example/src/index.tsx');
const EXAMPLE_OUTPUT = path.resolve(__dirname, '../example/dist/index.js');
const PRODUCTION_ENTRANCE = path.resolve(__dirname, '../src/index.ts');
const PRODUCTION_OUTPUT = path.resolve(__dirname, '../index.js');
const PRODUCTION_NODE_OUTPUT = path.resolve(__dirname, '../index.node.js');

const defaultConfig = {
    entryPoints: [PRODUCTION_ENTRANCE],
    outfile: PRODUCTION_OUTPUT,
    platform: 'browser',
    bundle: true,
    sourcemap: true,
    plugins: [nodeExternalsPlugin()],
    treeShaking: 'ignore-annotations',
    external: ['fsevents'],
    metafile: true,
    target: ['esnext'],
    define: {
        process: JSON.stringify({
            env: {
                NODE_ENV: "production"
            }
        })
    }
};

module.exports = {
    EXAMPLE_ENTRANCE,
    EXAMPLE_OUTPUT,
    PRODUCTION_ENTRANCE,
    PRODUCTION_OUTPUT,
    PRODUCTION_NODE_OUTPUT,
    defaultConfig
}
