import React from 'react';
import { css, StyleSheet } from '../../../src';
import { AphuckroditeInstance } from '../../../src/interfaces';

StyleSheet.createCSS(`
    .footer {
        position: fixed;
        width: 100%;
        padding: 12px 20px;
        bottom: 0;
        left: 0;
        background-color: #667788;
        color: white;
        display: flex;
        align-items: center;
    }
`);

const scopedStyle: AphuckroditeInstance = StyleSheet.create({
    label: {
        fontSize: "22px",
        fontWeight: "lighter"
    }
})

export const Footer = () => {
    return (
        <div className="footer">
            <div>
                <div className={css(scopedStyle.label)}>
                    Item 1
                </div>
                <ul>
                    <li>subitem</li>
                    <li>subitem</li>
                    <li>subitem</li>
                    <li>subitem</li>
                </ul>
            </div>
            <div>
                <div className={css(scopedStyle.label)}>
                    Item 2
                </div>
                <ul>
                    <li>subitem</li>
                    <li>subitem</li>
                    <li>subitem</li>
                </ul>
            </div>
            <div>
                <div className={css(scopedStyle.label)}>
                    Item 3
                </div>
                <ul>
                    <li>subitem</li>
                    <li>subitem</li>
                    <li>subitem</li>
                    <li>subitem</li>
                    <li>subitem</li>
                    <li>subitem</li>
                </ul>
            </div>
        </div>
    )
}