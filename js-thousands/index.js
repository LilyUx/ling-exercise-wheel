/**
 * * js 实现千分位
 */

const number = 13123903243;

// * toLocaleString()
// console.log(number.toLocaleString())

// * 正则实现
// function format(num) {
//   let reg = /\B(?=(\d{3})+$)/g
//   return (num + '').replace(reg, ',')
// }


// * for循环
// function format(num) {
//   num = num + ''
//   let str = ''
//   for (let i = num.length - 1, j = 1; i >= 0; i--, j++) {
//     if (j % 3 == 0 && i != 0) {
//       str = ',' + num[i] + str
//       continue
//     }
//     str = num[i] + str
//   }
//   return str
// }

// * slice + while
// function format(num) {
//   let arr = [], str = num + '', count = str.length;

//   while (count > 3) {
//     arr.unshift(str.slice(count - 3, count));
//     count -= 3
//   }

//   str.length % 3 && arr.unshift(str.slice(0, str.length % 3))

//   return arr.toString()
// }

// * reduce
function format(num) {
  let str = num + ''
  return str.split('').reverse().reduce((prev, next, index) => {
    return ((index % 3) ? next : (next + ',')) + prev
  })
}

console.log(format(13123903243))
