/*
 * @Author: your name
 * @Date: 2021-01-27 15:07:30
 * @LastEditTime: 2021-01-27 15:22:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \StudyCode\ling-exercise-wheel\compose\test.js
 */
const viewLog = false;

module.exports = compose => {
  it("同步函数", async () => {
    const mockFn = jest.fn();

    const middlewares = [
      next => {
        mockFn("1 start");
        next();
        mockFn("1 end");
      },
      next => {
        mockFn("2 start");
        next();
        mockFn("2 end");
      },
    ];

    const func = compose(middlewares);

    viewLog && console.log("同步函数 > compose定义", compose.toString());

    func();

    const calls = mockFn.mock.calls;
    viewLog && console.log("第一次", calls);
    expect(calls.length).toBe(4);
    expect(calls[0][0]).toBe("1 start");
    expect(calls[1][0]).toBe("2 start");
    expect(calls[2][0]).toBe("2 end");
    expect(calls[3][0]).toBe("1 end");
  });
};
