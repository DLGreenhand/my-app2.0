export default function randomString(length) {
  const TextNum = length;
  const str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = TextNum; i > 0; --i) {
    result += str[Math.floor(Math.random() * str.length)];
  }
  return result;
}
