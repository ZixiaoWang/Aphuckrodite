import { AphuckroditeInstance } from "../interfaces";

/**
 * css classname generator
 * @param { String | AphuckroditeInstance } args - Passing Aphuckrodite style instance or string  
 * @returns { String } - return class names
 */
export function css(...args: Array<string | AphuckroditeInstance>): string {
    return args.map((arg: string | AphuckroditeInstance) => {
        if (typeof arg === 'string') {
            return arg;
        } else {
            return arg._name;
        }
    }).join(' ');
}