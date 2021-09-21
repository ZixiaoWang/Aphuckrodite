import { parse } from 'css';

// TODO - Find a better alternaitive
// import { renderSync, Result } from 'sass';

import { hash } from './hash';
import { registerByAST, registerByClass } from './register';
import { AphuckroditeInstance, AphuckroditePropertyInstance, CSSAST, styleFragment } from '../interfaces';

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

// TODO - find a better alternative
// const createSASS = (sassStyles: string): void => {
//     const result: Result = renderSync({ data: sassStyles });
//     const cssString: string = result.css.toString();
//     createCSS(cssString);
// }

const createCSS = (cssStyles: string): void => {
    const cssAST: CSSAST = parse(cssStyles) as CSSAST;
    registerByAST(cssAST);
}

const create = (style: styleFragment): AphuckroditeInstance => {

    const checkClassName = (className: string): string => {
        if (/^[A-Za-z]/.test(className)) {
            return className;
        }
        throw new Error('Invalid class Name, class name should start with alphabets, but got ' + className)
    }

    const generatePropertyInstance = (defination: any): AphuckroditePropertyInstance => {
        let _defination: string = '{';

        Object
            .keys(defination)
            .forEach((prop: string) => {
                const property: string = dashifyCamel(prop);
                const value: any = defination[prop];
                if (typeof value === 'string') {
                    _defination += property + ': ' + value + ';';
                } else if (typeof value === 'number') {
                    _defination += property + ': ' + value.toString() + 'px;';
                }
            });
        
        _defination = _defination + '}';

        return {
            _defination,
            _len: _defination.length
        }
    }

    if (isObject(style)) {
        let instance: AphuckroditeInstance = {};

        Object
            .keys(style)
            .forEach((className: string) => {
                checkClassName(className);
                const meta = generatePropertyInstance(style[className]);
                const _name: string = className + '_' + hash(meta._defination);

                registerByClass('.' + _name, meta._defination);                

                instance[className] = {
                    _name,
                    ...meta
                };
            });

        return instance;
    }

    return {};
}

export const StyleSheet = {
    createCSS,
    create
}