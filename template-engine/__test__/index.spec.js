/*
 * @Author: your name
 * @Date: 2021-01-26 09:28:45
 * @LastEditTime: 2021-01-26 13:57:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \StudyCode\ling-exercise-wheel\template-engine\__test__\index.spec.js
 */
const { compile } = require("../index");
describe("模板编译", () => {
  it("{{}} 表达式", () => {
    const output = compile("<b>{{ name }}</b>")({ name: "tom" });
    expect(output).toBe(`<b>tom</b>`);
  });

  it("{{}} toUpperCase表达式", () => {
    const output = compile("<b>{{ name.toUpperCase() }}</b>")({ name: "tom" });
    expect(output).toBe(`<b>TOM</b>`);
  });

  it("{{}} +连接", () => {
    const output = compile("<b>{{ '[' + name + ']' }}</b>")({ name: "tom" });
    expect(output).toBe(`<b>[tom]</b>`);
  });

  it("forEach 遍历", () => {
    const output = compile(
      `
{%arr.forEach(item => {%}
  <li>{{item}}</li>
{%})%}
`
    )({ arr: ["aaa", "bbb"] });
    expect(output).toBe(`


  <li>aaa</li>


  <li>bbb</li>


`);
  });

  it("if 表达式", () => {
    const output = compile(`{% if (isShow) {%}<b>{{name}}</b>{%} %}`)({
      isShow: true,
      name: "tom",
    });
    console.log(output);
    expect(output).toBe(`
<b>tom</b>
`);
  });
});
