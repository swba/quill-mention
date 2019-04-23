import Quill from 'quill';

const Image = Quill.import('formats/image');

class MentionFormat extends Image {

  static create(data) {
    const node = super.create();
    node.setAttribute('href', this.sanitize(data.href));
    node.innerText = data.text.trim();
    return node;
  }

  static value(domNode) {
    return domNode.getAttribute('href');
  }

  static formats(domNode) {
    return {};
  }

  format(name, value) {
    super.super.format(name, value);
  }
}

MentionFormat.blotName = 'mention';
MentionFormat.tagName = 'A';
MentionFormat.className = 'mention';

Quill.register(MentionFormat);
