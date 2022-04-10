export default function randomColor(color_num) {
  let R0;
  let G0;
  let B0;
  while (1) {
    const tmp_R0 = Math.floor(Math.random() * 256);
    if (tmp_R0 <= 23) {
      continue;
    }
    const tmp_G0 = Math.floor(Math.random() * 256);
    if (tmp_G0 <= 23) {
      continue;
    }
    const tmp_B0 = Math.floor(Math.random() * 256);
    if (tmp_B0 <= 23) {
      continue;
    }
    R0 = tmp_R0;
    G0 = tmp_G0;
    B0 = tmp_B0;
    break;
  }
  const arrColor = [];
  arrColor.push(`#${R0.toString(16)}${G0.toString(16)}${B0.toString(16)}`);
  for (let i = 0; i < color_num; i++) {
    const tmp_R = Math.floor(Math.random() * 256);
    const tmp_G = Math.floor(Math.random() * 256);
    const tmp_B = Math.floor(Math.random() * 256);
    if ((tmp_B - B0) * (tmp_B - B0) + (tmp_R - R0) * (tmp_R - R0) + (tmp_G - G0) * (tmp_G - G0) < 128 * 128 * 2) {
      i--;
    } else {
      arrColor.push(`#${tmp_R.toString(16)}${tmp_G.toString(16)}${tmp_B.toString(16)}`);
    }
  }
  return arrColor;
}
