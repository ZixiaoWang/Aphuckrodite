import { CSSAST } from '../interfaces';
import { classStore } from './store';

export const registerByAST = (cssAST: CSSAST): void => {
    if (cssAST.type === 'stylesheet') {
        cssAST?.stylesheet?.rules?.forEach((item: CSSAST) => {
            if (item.type === 'rule') {
                const selector: string = item?.selectors?.join(', ') || "";
                const defination: string = "{ " + item
                    ?.declarations
                    ?.map((declaration: CSSAST) => {
                        return declaration.property + ": " + declaration.value;
                    })
                    ?.join(' ') + "}";

                if (selector.length > 0) {
                    classStore.set(selector, defination);
                }
            } else {
                // TODO (jacky) - other types
            }
        })
    }
}

export const registerByClass = (className: string, value: string): void => {
    classStore.set(className, value);
}