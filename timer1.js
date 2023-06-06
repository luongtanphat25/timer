const arr = process.argv.slice(2);
let max = parseInt(arr[0]) || 0;
for (const n of arr) {
  max = parseInt(n) > max ? parseInt(n) : max;
}

if (arr.length >= 1) {
  let i = 1;
  const interval = setInterval(() => {
    if (arr.includes(`${i}`)) {
      process.stdout.write('\x07');
    }
    process.stdout.write(`${i} `);
    (i === max) ? clearInterval(interval) : i++;
  }, 1000);
}