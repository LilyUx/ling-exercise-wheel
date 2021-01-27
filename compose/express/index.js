/*
 * @Author: your name
 * @Date: 2021-01-27 15:11:51
 * @LastEditTime: 2021-01-27 15:24:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \StudyCode\ling-exercise-wheel\compose\express\index.js
 */
module.exports.compose = (middlewares = []) => {
  if (!Array.isArray(middlewares)) {
    middlewares = Array.from(arguments);
  }

  if (middlewares.some(fn => typeof fn !== "function")) {
    throw new TypeError("Middle must be composed of functions!");
  }

  return async () => {
    let idx = 0;

    async function next() {
      if (idx === middlewares.length) {
        return Promise.resolve();
      }
      if (idx < middlewares.length) {
        return Promise.resolve(middlewares[idx++](next));
      }
    }

    return await next();
  };
};
