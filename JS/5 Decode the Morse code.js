/**************
 * My solution *
 **************/

decodeMorse = function (code) {
  var morseCode = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    W: ".--",
    V: "...-",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    SOS: "...---...",
    "!": "-.-.--",
    ".": ".-.-.-",
  };

  const getKeyByValue = (obj, value) => {
    const out = Object.keys(obj).find((key) => {
      return obj[key] === value;
    });
    return out;
  };

  let output = "";

  code.split(" ").forEach((element) => {
    if (element !== "") {
      const key = getKeyByValue(morseCode, element);
      output = output + key;
    } else {
      output = output + " ";
    }
  });

  return output
    .replace(/\s+/g, " ")
    .replace(/^\s+|\s+$/, "")
    .trim();
};

console.log("OUTPUT:::", decodeMorse(".... . -.--   .--- ..- -.. ."));
// console.log("OUTPUT:::", decodeMorse("   .... . -.--   "));

// it("Example from description", () => {
//   assert.strictEqual(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE');
// });

// it("Leading and trailing spaces", () => {
//   assert.strictEqual(decodeMorse('   .... . -.--   '), 'HEY');
// });

/**************
 * Community solution *
 **************/
