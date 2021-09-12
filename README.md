# Aph-uck-rodite
<a href="http://www.wtfpl.net/">
    <img src="http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-4.png" width="80" height="15" alt="WTFPL" />
</a>  

----
EN / [中文](./docs/README-zh.md)

----
Aphuckrodite = F**k Aphrodite
## Why?
Aphrodite is a good css-in-js library, but it only provides very limited functions.   
The `create` method only accept a flatten object as style input, and it doesn't support other CSS selector rather than using keys as classes.  
No `id` selector, no `tag` selector, no nested syntax, all the `number` value is `px` by default...


## What different?
APIs are the same as `Aphrodite`, but it catches invalid keys or values and prevents throwing errors everywhere. Most Importantly, **IT SUPPORTS SASS!**  

## How?
```typescript
import React from 'react';
import { css, Stylesheet } from 'Aphuckrodite';

// This is scoped style
// The generated class name with have an unique hash string in the name
const scopedStyles = Stylesheet.create({
    container: {
        width: 1920,
        padding: 20,
        border: "1px solid black";
    }
});

// This is global style
// The styles can be shared in other components
const globalStyles = Stylesheet.createSASS(`
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
WTFPL