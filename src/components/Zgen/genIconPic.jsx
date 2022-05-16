// const url = 'https://picsum.photos/200/300?random=100';
function load(name) {
  const xhr = new XMLHttpRequest();
  const okStatus = document.location.protocol === 'file:' ? 0 : 200;
  xhr.open('GET', name, false);
  xhr.overrideMimeType('text/html;charset=utf-8'); // 默认为utf-8
  xhr.send(null);
  return xhr.status === okStatus ? xhr.responseText : null;
}

const text = load('../../../fn_icon.txt');

const root_dir = '../../../icon_pics/';

export default function randomIconPic() {
  const pic_num = Math.floor(Math.random() * parseInt(text, 10));
  return `${root_dir}${pic_num}.jpg`;
}
