function onScroll() {
  if (window.scrollY > 50) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }

  // window.scrollTo(0, document.body.scrollHeight)
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}
