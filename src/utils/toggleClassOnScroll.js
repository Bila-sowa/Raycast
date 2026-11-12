const toggleClassOnScroll = (setIsSticky, offset = 0) => {
  function handleScroll() {
    setIsSticky(window.scrollY >= offset)
  }

  window.addEventListener('scroll', handleScroll, { passive: true })

  handleScroll()

  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
}

export default toggleClassOnScroll
