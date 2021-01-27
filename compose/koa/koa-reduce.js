/*
 * @Author: your name
 * @Date: 2021-01-27 15:38:41
 * @LastEditTime: 2021-01-27 15:43:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \StudyCode\ling-exercise-wheel\compose\koa\koa-reduce.js
 */
module.exports.compose = (middlewares = []) => {
  if (!Array.isArray(middlewares)) {
    middlewares = Array.from(arguments);
  }

  if (middlewares.some(fn => typeof fn !== "function")) {
    throw new TypeError("Middle must be composed of functions!");
  }

  if (middlewares.length === 0) {
    return Promise.resolve();
  } else if (middlewares.length === 1) {
    return Promise.resolve(middlewares[0].call(null, () => Promise.resolve()));
  } else {
    return middlewares
      .map(item => item)
      .reverse()
      .reduce((pre, cur) => () => cur(() => pre(() => {})))();
  }
};
