const sizes = ['medium'];

export default function randomSize() {
  return sizes[Math.floor(Math.random() * sizes.length)];
}
