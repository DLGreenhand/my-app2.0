export default function randomArr(arr, num) {
  const res = [];
  for (let i = 0; i < num; i++) {
    const tmp = arr[Math.floor(Math.random() * arr.length)];
    res.push(tmp);
  }
  return res;
}
