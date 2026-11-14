/**
 * Feature list block: a responsive grid of features.
 * Each authored row has two cells: an icon or emoji, and a heading plus short text.
 * @param {Element} block The block element
 */
export default function decorate(block) {
  const ul = document.createElement('ul');

  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    const [iconCell, textCell] = row.children;

    if (iconCell) {
      iconCell.className = 'feature-list-icon';
      li.append(iconCell);
    }
    if (textCell) {
      textCell.className = 'feature-list-text';
      li.append(textCell);
    }
    ul.append(li);
  });

  block.replaceChildren(ul);
}
