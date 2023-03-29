/***********************************************************************************************************************
 * WRITE A FUNCTION CALLED SUMINTERVALS/SUM_INTERVALS THAT ACCEPTS AN ARRAY OF INTERVALS, AND RETURNS THE SUM OF ALL THE
 *  INTERVAL LENGTHS. OVERLAPPING INTERVALS SHOULD ONLY BE COUNTED ONCE. *
 *                                                      INTERVALS                                                      *
 * INTERVALS ARE REPRESENTED BY A PAIR OF INTEGERS IN THE FORM OF AN ARRAY. THE FIRST VALUE OF
 *  THE INTERVAL WILL ALWAYS BE LESS THAN THE SECOND VALUE. INTERVAL EXAMPLE: [1, 5] IS AN INTERVAL
 *  FROM 1 TO 5. THE LENGTH OF THIS INTERVAL IS 4. *
 *                                                OVERLAPPING INTERVALS                                                *
 *                                       LIST CONTAINING OVERLAPPING INTERVALS:                                        *
 ***********************************************************************************************************************/
/**************
 * My solution *
 **************/
function sumIntervals(intervals) {
  let finalArr = [];

  intervals.forEach((e) => {
    for (let i = e[0]; i < e[1]; i++) {
      finalArr.push(i);
    }
  });

  console.log("finalArr UPPER", finalArr);

  finalArr = [...new Set(finalArr)];

  console.log("finalArr DOWN", finalArr);

  return finalArr.length;
}

console.log(
  "OUTPUT ::: ",
  sumIntervals([
    [1, 2],
    [6, 10],
    [11, 15],
  ])
);

console.log(
  "OUTPUT ::: ",
  sumIntervals([
    [0, 20],
    [-100000000, 10],
    [30, 40],
  ])
);

/**************
 * Community solution *
 **************/
