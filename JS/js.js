function moveZeros(arr) {
  let zerroCach = 0;
  let output = [];

  arr.forEach((x) => {
    if (x === 0) zerroCach = zerroCach + 1;
    else output.push(x);
  });

  if (zerroCach !== 0) {
    console.log("zerroCach", zerroCach);
    const lol = new Array(zerroCach).fill(0);
    output = output.concat(new Array(zerroCach).fill(0));
    console.log("lol", lol);
  }

  return output;
}

console.log("OUTPUT ::: ", moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));

// describe("Tests", () => {
//     it("test", () => {
//       assert.deepEqual(moveZeros([1,2,0,1,0,1,0,3,0,1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
//     });
//   });
