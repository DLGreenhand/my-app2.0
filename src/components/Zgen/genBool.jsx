export default function randomBool() {
  const a = Math.random();
  if (a > 0.5) {
    return true;
  } else {
    return false;
  }
}
