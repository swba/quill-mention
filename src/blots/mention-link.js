import Quill from 'quill';

const Inline = Quill.import('blots/inline');

class MentionFormat extends Inline {

  static create(data) {
    const node = super.create();
    node.setAttribute('href', data.href);
    node.innerHTML = data.text;
    return node;
  }

  static formats(domNode) {
    return domNode.getAttribute('href');
  }

  static value(domNode) {
    return domNode.getAttribute('href');
  }

  format(name, value) {
    if (name !== this.statics.blotName || !value) {
      super.format(name, value);
    }
    else {
      this.domNode.setAttribute('href', value);
    }
  }

}

MentionFormat.blotName = 'mention';
MentionFormat.tagName = 'A';
MentionFormat.className = 'mention';

Quill.register(MentionFormat);
