import { css, StyleSheet } from '../src';

const style: any = StyleSheet.create({
    container: {
        width: 100,
        left: {
            float: 'left'
        }
    }
})

console.log(
    JSON.stringify(style, null, 2),
    css(style.container, style.container.left, 'left'),
)