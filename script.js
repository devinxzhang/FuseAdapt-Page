'use strict';
const selectorButtons = document.querySelectorAll('[data-backbone]');
selectorButtons.forEach(button => button.addEventListener('click', () => {
  selectorButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  document.querySelectorAll('[data-row]').forEach(row => {
    row.classList.toggle('muted-row', button.dataset.backbone !== 'all' && row.dataset.row !== button.dataset.backbone);
  });
}));
const copyButton = document.getElementById('copy-bib');
copyButton.addEventListener('click', async () => {
  const text = document.getElementById('bibtex').textContent;
  const status = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText(text);
    status.textContent = 'BibTeX copied to clipboard.';
    copyButton.textContent = 'Copied';
    setTimeout(() => { copyButton.textContent = 'Copy BibTeX'; }, 2200);
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(document.getElementById('bibtex'));
    selection.removeAllRanges(); selection.addRange(range);
    status.textContent = 'Citation selected. Use your browser’s Copy command to copy it.';
  }
});
