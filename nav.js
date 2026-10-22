// Phone menu: the toggle button shows and hides the nav links below 760px.
(function () {
  var nav = document.querySelector('.nav');
  var btn = nav && nav.querySelector('.nav-toggle');
  var list = document.getElementById('nav-links');
  if (!btn || !list) return;

  function setOpen(open) {
    nav.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  btn.addEventListener('click', function () {
    setOpen(btn.getAttribute('aria-expanded') !== 'true');
  });

  // Close after choosing a link (matters for same-page links like #highlights)
  list.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      setOpen(false);
      btn.focus();
    }
  });

  // Reset when the screen grows past the phone breakpoint
  var wide = window.matchMedia('(min-width: 761px)');
  var onChange = function (e) { if (e.matches) setOpen(false); };
  if (wide.addEventListener) wide.addEventListener('change', onChange);
  else if (wide.addListener) wide.addListener(onChange);
})();
