/**
 *
 * Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
 * moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
 */

/**************
 * My solution *
 **************/

// function moveZeros(arr) {
//   let zerroCach = 0;
//   let output = [];

//   arr.forEach((x) => {
//     if (x === 0) zerroCach = zerroCach + 1;
//     else output.push(x);
//   });

//   if (zerroCach !== 0) output = output.concat(new Array(zerroCach).fill(0));

//   return output;
// }

// console.log("OUTPUT ::: ", moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));

/**************
 * Community solution *
 **************/

var moveZeros = function (arr) {
  return arr
    .filter(function (x) {
      return x !== 0;
    })
    .concat(
      arr.filter(function (x) {
        return x === 0;
      })
    );
};

// console.log("OUTPUT ::: ", moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
