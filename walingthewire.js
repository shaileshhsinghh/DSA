const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

let t = Number(input[0]);
let index = 1;

while (t > 0) {
  let flag = false;
  let s = input[index++];
  let i = 0;
  let j = s.length - 1;

  while (i <= j) {
    let peter = s[i];
    let mj = s[j];
    if (peter === mj) {
      if (i == j) {
        flag = true;
        break;
      }
    }
    if (peter != mj) {
      flag = false;
      break;
    }
    ++i;
    --j;
  }
  --t;

  console.log(flag ? "YES" : "NO");
}
