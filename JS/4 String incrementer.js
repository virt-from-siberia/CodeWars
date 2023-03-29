/************************************************************************************************
 *      YOUR JOB IS TO WRITE A FUNCTION WHICH INCREMENTS A STRING, TO CREATE A NEW STRING.      *
 *       IF THE STRING ALREADY ENDS WITH A NUMBER, THE NUMBER SHOULD BE INCREMENTED BY 1.       *
 * IF THE STRING DOES NOT END WITH A NUMBER. THE NUMBER 1 SHOULD BE APPENDED TO THE NEW STRING. *
 ************************************************************************************************/
/**************
 * My solution *
 **************/
function incrementString(input) {
  const checked = isNaN(parseInt(input[input.length - 1]));

  if (checked) return input + "1";

  return input.replace(/(0*)([0-9]+$)/, function (match, p1, p2) {
    var up = parseInt(p2) + 1;
    return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
  });
}

console.log("OUTPUT::: ", incrementString("foobar000"));
console.log("OUTPUT::: ", incrementString("foo1"));
console.log("OUTPUT::: ", incrementString("foobar000"));
console.log("OUTPUT::: ", incrementString("foobar999"));

/**************
 * Community solution *
 **************/
