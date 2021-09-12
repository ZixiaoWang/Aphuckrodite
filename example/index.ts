import { css, StyleSheet } from '../src';
import { classStore } from '../src/modules/store';

const style: any = StyleSheet.create({
    container: {
        width: 100,
        left: {
            float: 'left'
        },
        "+ .container": {
            marginTop: 100
        }
    }
});

StyleSheet.createSASS(`
    .container {
        width: 100%;
        max-width: 1920px;
        padding-left: 15px;
        padding-right: 15px;
    }
    .row {
        margin-left: -15px;
        margin-right: -15px;
    }
    .shell {
        background-color: #ccc;
        .is-red {
            background-color: red;
        }
        .is-green {
            background-green: green;
        }
    }
`)

console.log(
    JSON.stringify(style, null, 2),
    classStore,
    css(style.container, 'row', 'is-red')
)