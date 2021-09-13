declare module "example/index" { }
declare module "example/components/header" { }
declare module "src/interfaces/index" {
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
declare module "src/modules/css" {
    import { AphuckroditeInstance } from "src/interfaces/index";
    /**
     * css classname generator
     * @param { String | AphuckroditeInstance } args - Passing Aphuckrodite style instance or string
     * @returns { String } - return class names
     */
    export function css(...args: Array<string | AphuckroditeInstance>): string;
}
declare module "src/modules/hash" {
    /**
     * @description - hash string
     * @thanks - https://github.com/darkskyapp/string-hash
     * @param str - Input String
     * @returns { Number } - string hash
     */
    export const hash: (str: string) => string;
}
declare module "src/modules/store" {
    export const store: Map<string, string>;
}
declare module "src/modules/register" {
    import { CSSAST } from "src/interfaces/index";
    export const registerByAST: (cssAST: CSSAST) => void;
    export const registerByClass: (className: string, value: string) => void;
}
declare module "src/modules/stylesheet" {
    import { AphuckroditeInstance, styleFragment } from "src/interfaces/index";
    export const StyleSheet: {
        createSASS: (sassStyles: string) => void;
        create: (style: styleFragment) => AphuckroditeInstance | null;
    };
}
declare module "src/modules/injector" {
    export const inject: () => void;
}
declare module "src/index" {
    export * from "src/modules/css";
    export * from "src/modules/stylesheet";
    export * from "src/modules/injector";
}
