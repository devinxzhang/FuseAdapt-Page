'use strict';
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
