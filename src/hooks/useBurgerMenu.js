import { useState } from 'react'

const useBurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  const handleEscape = () => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeMenu()
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }

  return {
    isOpen,
    setIsOpen,
    handleEscape,
  }
}

export default useBurgerMenu
