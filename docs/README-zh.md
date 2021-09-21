# Aph-uck-rodite &nbsp;<small>(阿特么佛洛狄忒)</small>
<a href="http://www.wtfpl.net/">
    <img src="http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-4.png" width="80" height="15" alt="WTFPL" />
</a>  

----
[EN](../README.md) / 中文

----
阿特么佛洛狄忒 = 阿-特么-佛洛狄特

## 为啥？
Aphrodite 是一个还凑合的 css-in-js 库，但是他的功能实在是太少了。  
`create` 方法只能接受一个扁平的 object 作为参数，而且它还不支持其他 CSS 选择器，只是把 `key` 默认用作类名。  
没有 id 选择器，没有标签选择器，没有嵌套的语法，数字只能默认用 `px` 作为默认单位……

## 有啥不一样？
和 `Aphrodite` 的 API 一样，但是如果你用了错误的语法（或传入了错误的值），它会帮你过滤一些低级错误。更重要的是，它**支持CSS语法！**

## 咋用？
```typescript
import React from 'react';
import { css, Stylesheet } from 'Aphuckrodite';

// 这是局部样式
// 这个样式的类名会加一段 hash 字符串以保证它不会污染其他作用域
const scopedStyles = Stylesheet.create({
    container: {
        width: 1920,
        padding: 20,
        border: "1px solid black";
    }
});

// 这是全局样式
// 这个类可以被其他组件复用
const globalStyles = Stylesheet.createCSS(`
    .container {
        width: 1366px;
        padding: 12px;
        border: 1px solid grey;
    }
`);


/**
 * @React.Component
 * React Component
 */
const CustomComponent = (props: any): JSX.Element => {
    return (
        <div className={css(scopedStyles.container, "is-bgWhite")}>
            {/* Your code here... */}
        </div>
    )
}

```

### License
WTFPL （你特么干啥都行）