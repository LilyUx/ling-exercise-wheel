/*
 * @Author: your name
 * @Date: 2021-01-27 15:22:53
 * @LastEditTime: 2021-01-27 15:25:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \StudyCode\ling-exercise-wheel\compose\koa\index.js
 */
module.exports.compose = (middlewares = []) => {
  if (!Array.isArray(middlewares)) {
    middlewares = Array.from(arguments);
  }

  if (middlewares.some(fn => typeof fn !== "function")) {
    throw new TypeError("Middle must be composed of functions!");
  }

  return function () {
    return dispatch(0);
    function dispatch(i) {
      let fn = middlewares[i];
      if (!fn) {
        return new Promise();
      }
      return Promise.resolve(
        fn(function next() {
          return dispatch(i + 1);
        })
      );
    }
  };
};
