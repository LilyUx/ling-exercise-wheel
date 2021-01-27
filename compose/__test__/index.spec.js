/*
 * @Author: your name
 * @Date: 2021-01-27 15:03:19
 * @LastEditTime: 2021-01-27 15:14:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \StudyCode\ling-exercise-wheel\compose\__test__\index.spce.js
 */

const test = require("../test");
describe("中间件", () => {
  describe("express 实现", () => {
    const { compose } = require("../express");
    test(compose);
  });
});
