import { parse } from 'css';
import { renderSync, Result } from 'sass';

import { hash } from './hash';
import { registerByAST, registerByClass } from './register';
import { AphuckroditeInstance, AphuckroditePropertyInstance, AphuckroditeSelectorInstance, CSSAST, styleFragment } from '../interfaces';

const isObject = (value: any): boolean => {
    return Object.prototype.toString.call(value) === '[object Object]';
}

const dashifyCamel = (name: string): string => {
    if (typeof name === 'string') {
        return name
            .split(/(?=[A-Z])/g)
            .filter((item: string) => !!item)
            .map((item: string) => {
                const firstChar: string = item.charAt(0);
                if (/[A-Z]/.test(firstChar)) {
                    return '-' + firstChar.toLocaleLowerCase() + item.substring(1);
                }
                return item;
            })
            .join('');
    }

    throw new Error('key is not string type');
}

const createSASS = (sassStyles: string): void => {
    const result: Result = renderSync({ data: sassStyles });
    const cssString: string = result.css.toString();
    createCSS(cssString);
}

const createCSS = (cssStyles: string): void => {
    const cssAST: CSSAST = parse(cssStyles) as CSSAST;
    registerByAST(cssAST);
}

const create = (style: styleFragment, preClass?: string): AphuckroditeInstance | null => {
    const stringifyDefinations = (defination: any): AphuckroditePropertyInstance => {
        let _defination: string = '';
        let _children: any = {};

        _defination = '{' + _defination;
        Object
            .keys(defination)
            .forEach((prop: string) => {
                const property: string = dashifyCamel(prop);
                const value: any = defination[prop];
                if (typeof value === 'string') {
                    _defination += property + ': ' + value;
                } else if (typeof value === 'number') {
                    _defination += property + ': ' + value.toString() + 'px;';
                } else {
                    _children[prop] = value;
                }
            });
        _defination = _defination + '}';

        return {
            _defination,
            _len: _defination.length,
            _children
        }
    }

    if (isObject(style)) {
        const instance: AphuckroditeInstance = {};

        Object
            .keys(style)
            .forEach((key: string) => {
                const value: any = style[key];
                const meta = stringifyDefinations(value);
                const children: any = create(meta._children);
                const _name: string = key + '_' + hash(meta._defination);

                delete meta._children;
                registerByClass(_name, meta._defination);                

                instance[key] = {
                    _name,
                    ...meta,
                    ...children
                }
            });

        return instance;
    }

    return null;
}

export const StyleSheet = {
    createCSS,
    createSASS,
    create
}