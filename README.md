# js-utils
JavaScript simple functions.

# Export Vue

```jd
# Export
function fun1() {}
function fun2() {}
function fun3() {}

export { fun1, fun2, fun3 }
export { fun1 as default, fun2, fun3 }
```

## Import Vue

```js
import { default as fun1, fun2, fun3 } cookie from '@/utils/cookies'
import fun1, { fun2, fun3 } cookie from '@/utils/cookies'
import * as cookie from '@/utils/cookies'
```
