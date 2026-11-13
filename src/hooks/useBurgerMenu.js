import { useCallback, useState } from 'react'

const useBurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = useCallback(() => setIsOpen(false), [])

  const handleEscape = useCallback(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeMenu()
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [closeMenu])

  return {
    isOpen,
    setIsOpen,
    handleEscape,
  }
}

export default useBurgerMenu
