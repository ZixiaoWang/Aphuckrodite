export interface AphuckroditeSelectorInstance {
    _name: string,
    _len: number,
    _defination: string,
    [selector: string]: any
}

export interface AphuckroditePropertyInstance {
    _len: number,
    _defination: string,
    _children: any
}

export interface AphuckroditeInstance {
    [className: string]: AphuckroditeSelectorInstance
}

export interface styleFragment {
    [className: string]: {
        [property: string]: any;
    }
}

export interface CSSStylesheetAST {
    rules: CSSAST[],
    parsingErrors: any[];
}

export interface CSSAST {
    type: "stylesheet" | "rule" | "declaration" | "comment" | "charset" | "custom-media" | "document" | "font-face" | "host" | "import" | "keyframes" | "keyframe" | "media"| "namespace" | "page" | "supports",
    stylesheet?: CSSStylesheetAST,
    selectors?: string[],
    property?: string,
    value?: string,
    declarations?: CSSAST[],
    media?: string,
    position: {
        start: {
            line: number,
            column: number
        },
        end: {
            line: number,
            column: number
        }
    }
}