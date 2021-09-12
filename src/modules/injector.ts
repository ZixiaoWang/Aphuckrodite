import { hash } from './hash';
import { store } from './store';

export const inject = () => {
    if (document && document.createElement) {
        const styleElement: HTMLStyleElement = document.createElement('style');
        
        let styleInnerText: string = '';
        store.forEach((defination: string, selector: string) => {
            styleInnerText += [selector, defination].join(' ');
            styleInnerText += '\n';
        });

        styleElement.setAttribute('hash', hash(styleInnerText).toString());
        styleElement.setAttribute('scope', "Aphuckrodite");
        styleElement.setAttribute('length', styleInnerText.length.toString());

        document.head.appendChild(styleElement);
    } else {
        throw new Error('Cannot inject styles, cannot find document or document.createElement');
    }
}