/**
 * CTA banner block: a highlighted call-to-action strip.
 * Authored as a one-cell block containing a heading, a short paragraph and a link.
 * @param {Element} block The block element
 */
export default function decorate(block) {
  const content = block.querySelector(':scope > div > div');
  if (!content) return;
  content.classList.add('cta-banner-content');

  // style the link as a button, even if it was not authored bold/italic
  const link = content.querySelector('a');
  if (link) {
    link.classList.add('button', 'primary');
    const wrapper = link.closest('p');
    if (wrapper) wrapper.classList.add('button-wrapper');
  }
}
