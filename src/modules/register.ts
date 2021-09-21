import { CSSAST } from '../interfaces';
import { store } from './store';

export const registerByAST = (cssAST: CSSAST): void => {
    if (cssAST.type === 'stylesheet') {
        cssAST?.stylesheet?.rules?.forEach((item: CSSAST) => {
            if (item.type === 'rule') {
                const selector: string = item?.selectors?.join(', ') || "";
                const defination: string = "{ " + item
                    ?.declarations
                    ?.map((declaration: CSSAST) => {
                        return declaration.property + ": " + declaration.value + ";"; 
                    })
                    ?.join(' ') + "}";

                if (selector.length > 0) {
                    store.set(selector, defination);
                }
            } else {
                // TODO (jacky) - other types
            }
        })
    }
}

export const registerByClass = (className: string, value: string): void => {
    store.set(className, value);
}