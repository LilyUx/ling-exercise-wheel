/*
 * @Author: your name
 * @Date: 2021-01-27 15:47:20
 * @LastEditTime: 2021-01-27 15:50:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \StudyCode\ling-exercise-wheel\compose\async\index.js
 */
module.exports.compose = (middlewares = []) => {
  return async function () {
    let next = async () => Promise.resolve();

    function createNext(middleware, oldNext) {
      return async () => {
        await middleware(oldNext);
      };
    }

    for (let i = middlewares.length - 1; i >= 0; i--) {
      next = createNext(middlewares[i], next);
    }
    return await next;
  };
};
