export default function textArr(arr) {
  let tmp = '';
  for (let i = 0; i < arr.length; i++) {
    tmp += arr[i];
    tmp += '   ';
  }
  return tmp;
}
