/*
 * @Author: xuling
 * @Date: 2021-01-26 09:28:36
 * @LastEditTime: 2021-01-26 13:30:46
 * @LastEditors: xuling
 * @Description: 模板引擎解析
 * @FilePath: \StudyCode\ling-exercise-wheel\template-engine\index.js
 */
module.exports.compile = template => {
  // console.log(template.replace(/\{\{([^}]+)\}\}/g)) // "<b>{{ name }}</b>" => <b>undefined</b>
  template = template.replace(/\{\{([^}]+)\}\}/g, function () {
    let key = arguments[1].trim();
    return "${" + key + "}";
  });

  let head = `let str = '';\r\n with (obj) {\r\n`;
  head += "str+=`";
  template = template.replace(/\{\%([^%]+)\%\}/g, function () {
    return "`\r\n" + arguments[1] + "\r\nstr+=`\r\n";
  });
  let tail = "`}\r\n return str;";

  // console.log('======render=====')
  // console.log(head + template + tail)
  // * new Function()用于动态创建函数体
  // * with 改变作用域
  return new Function("obj", head + template + tail);
};
