/*
 * @Author: your name
 * @Date: 2021-01-26 13:50:28
 * @LastEditTime: 2021-01-26 15:31:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \StudyCode\ling-exercise-wheel\throttle-debounce\__test__\index.spec.js
 */
describe("防抖节流", () => {
  it("节流Throttle", done => {
    const { throttle } = require("..");
    const mockFn = jest.fn();
    const fn = throttle(mockFn, 10);

    fn(1);
    fn(2);

    setTimeout(() => {
      const calls = mockFn.mock.calls;

      expect(calls.length).toBe(1);
      expect(calls[0][0]).toBe(1);
      done();
    }, 50);
  });

  it("防抖Debounce", done => {
    const { debounce } = require("..");
    const mockFn = jest.fn();
    const fn = debounce(mockFn, 10);

    fn(1);
    fn(2);

    setTimeout(() => {
      const calls = mockFn.mock.calls;

      expect(calls.length).toBe(1);
      expect(calls[0][0]).toBe(2);
      done();
    }, 50);
  });
});
