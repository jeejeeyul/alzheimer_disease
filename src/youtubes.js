import { links } from './youtubes_links.js';

//박스 1개 틀

function pages() {
  for (var i = 0; i < 10; i++) {
    var block = document.createElement('div');
    block.setAttribute('class', 'blocks');
    block.setAttribute('id', `blocks${i}`);
    console.log(block);
    //block attribute설정
    var iframes = document.createElement('iframe');
    iframes.setAttribute('title', 'YouTube video player');
    iframes.setAttribute('frameborder', '0');
    iframes.setAttribute(
      'allow',
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
    );
    iframes.setAttribute('allowfullscreen', '');
    //iframe 기본값
    iframes.setAttribute('id', `iframes${i}`);
    iframes.setAttribute('src', links[i]);
    console.log(iframes);
    //iframe attribute설정
    block.append(iframes);
    document.body.append(block);
    //iframe 삽입
  }
}
pages();
