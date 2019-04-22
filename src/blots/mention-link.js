import Quill from 'quill';

const Link = Quill.import('formats/link');


class MentionFormat extends Link {

  static create(data) {
    const node = super.create();
    node.setAttribute('href', data.href);
    node.innerHTML = data.text;
    return node;
  }

  static value(domNode) {
    return domNode.dataset;
  }

}

MentionFormat.blotName = 'mention';
MentionFormat.tagName = 'a';
MentionFormat.className = 'mention';

Quill.register(MentionFormat);
