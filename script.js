function toggle(el) {
  const nextUl = el.nextElementSibling;
  if (nextUl && nextUl.tagName === 'UL') {
    nextUl.style.display = nextUl.style.display === 'block' ? 'none' : 'block';
  }
}
