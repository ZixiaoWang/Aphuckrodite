declare module "interfaces/index" {
    export interface AphuckroditeSelectorInstance {
        _name: string;
        _len: number;
        _defination: string;
        [selector: string]: any;
    }
    export interface AphuckroditePropertyInstance {
        _len: number;
        _defination: string;
    }
    export interface AphuckroditeInstance {
        [className: string]: AphuckroditeSelectorInstance;
    }
    export interface styleFragment {
        [className: string]: {
            [property: string]: any;
        };
    }
    export interface CSSStylesheetAST {
        rules: CSSAST[];
        parsingErrors: any[];
    }
    export interface CSSAST {
        type: "stylesheet" | "rule" | "declaration" | "comment" | "charset" | "custom-media" | "document" | "font-face" | "host" | "import" | "keyframes" | "keyframe" | "media" | "namespace" | "page" | "supports";
        stylesheet?: CSSStylesheetAST;
        selectors?: string[];
        property?: string;
        value?: string;
        declarations?: CSSAST[];
        media?: string;
        position: {
            start: {
                line: number;
                column: number;
            };
            end: {
                line: number;
                column: number;
            };
        };
    }
}
declare module "modules/css" {
    import { AphuckroditeInstance } from "interfaces/index";
    /**
     * css classname generator
     * @param { String | AphuckroditeInstance } args - Passing Aphuckrodite style instance or string
     * @returns { String } - return class names
     */
    export function css(...args: Array<string | AphuckroditeInstance>): string;
}
declare module "modules/hash" {
    /**
     * @description - hash string
     * @thanks - https://github.com/darkskyapp/string-hash
     * @param str - Input String
     * @returns { Number } - string hash
     */
    export const hash: (str: string) => string;
}
declare module "modules/store" {
    export const store: Map<string, string>;
}
declare module "modules/register" {
    import { CSSAST } from "interfaces/index";
    export const registerByAST: (cssAST: CSSAST) => void;
    export const registerByClass: (className: string, value: string) => void;
}
declare module "modules/stylesheet" {
    import { AphuckroditeInstance, styleFragment } from "interfaces/index";
    export const StyleSheet: {
        createCSS: (cssStyles: string) => void;
        create: (style: styleFragment) => AphuckroditeInstance;
    };
}
declare module "modules/injector" {
    export const inject: () => void;
}
declare module "index" {
    export * from "modules/css";
    export * from "modules/stylesheet";
    export * from "modules/injector";
}
