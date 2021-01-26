# 模板引擎

## 需求

### {{}} 表达式

其实就是将 {{}} 中的值替换为表达式的结果
|模板 | |结果 |
|:-------------- |-----:|:-----: |
|<b>{{ name }}</b> | -> |<b>tom</b> |
|<b>{{ name.toUpperCase() }}</b> | -> |<b>TOM</b> |
|<b>{{ '[' + name ']' }}</b> | -> |<b>[tom]</b> |

### forEach 遍历

```js
{%arr.forEach(item => {%}
  <li>{{item}}</li>
{%})%}
```

生成结果

```html
<li>aaa</li> <li>bbb</li>
```

### if 判断

```js
{% if(isShow) { %} <b>{{ name }}</b> {% } %}
```

生成结果

```html
<b>tom</b>
```

## 功能实现

模板渲染的功能大概可以归纳为两步：

1. 编译模板为 Generate 函数 - 主要是通过正则表达式的匹配
1. 将 {{ XXX }} 表达式 转化为 ES6 模板字符串 ${ xxx }
1. 将 {% %} 表达式转化为 JS 语句这样的就可以在模板中使用 if、forEach 了。如:

   ```
   {% if(isShow) { %} <b>{{ name }}</b> {% } %}
   // 转化的函数
   let str = '';
     with(obj){
     str+=``
     if(isShow) {
       str+=`<b>${name}</b> `
     }
     return str;
   ```

1. 执行渲染函数 - new Function()用于动态创建函数体。如：

````
  new Function('arg', 'console.log(arg + 1);');
  // 相当于创建了一个匿名函数
  function (arg) {
      console.log(arg + 1);
  }
```
````
