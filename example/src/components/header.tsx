import React from 'react';
import { css, StyleSheet } from '../../../src';
import { AphuckroditeInstance } from '../../../src/interfaces';

StyleSheet.createCSS(`
    .header {
        position: fixed;
        width: 100%;
        padding: 12px 20px;
        top: 0;
        left: 0;
        border-bottom: 1px solid #cccccc;
        display: flex;
        align-items: center;
    }
`);

const scopedStyle: AphuckroditeInstance = StyleSheet.create({
    heading: {
        fontSize: "28px",
        fontWeight: "lighter"
    }
})

export const Header = () => {
    return (
        <div className="header">
            <div className={css(scopedStyle.heading)}>
                Aphuckrodite DEMO
            </div>
        </div>
    )
}