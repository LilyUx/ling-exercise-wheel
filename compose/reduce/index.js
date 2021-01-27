/*
 * @Author: your name
 * @Date: 2021-01-27 15:26:19
 * @LastEditTime: 2021-01-27 16:00:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \StudyCode\ling-exercise-wheel\compose\reduce\index.js
 */
module.exports.compose = (middlewares = []) => {
  if (!Array.isArray(middlewares)) {
    middlewares = Array.from(arguments);
  }

  if (middlewares.length === 0) {
    return arg => arg;
  }

  if (middlewares.some(fn => typeof fn !== "function")) {
    throw new TypeError("Middle must be composed of functions!");
  }

  return (next = async () => {}) =>
    middlewares.reduce((a, b) => arg => a(() => b(arg)))(next);
};
