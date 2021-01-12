const sentence = "hello there from lighthouse labs";

let timeOut = 0;
let bugfix = sentence + "\n";

for (const char of bugfix) {
  timeOut += 50

  setTimeout(() => {
    process.stdout.write(char)
  }, timeOut)
}
