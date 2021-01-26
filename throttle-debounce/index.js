/*
 * @Author: xuling
 * @Date: 2021-01-26 13:30:01
 * @LastEditTime: 2021-01-26 15:31:05
 * @LastEditors: Please set LastEditors
 * @Description: 节流 防抖
 * @FilePath: \StudyCode\ling-exercise-wheel\throttle-debounce\index.js
 */
module.exports.throttle = (fn, delay = 1000) => {
  let last = 0;
  return (...args) => {
    const now = +Date.now();
    if (now > last + delay) {
      last = now;
      fn.apply(this, args);
    }
  };
};

module.exports.debounce = (fn, delay = 1000) => {
  let timer;
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};
