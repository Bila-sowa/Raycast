import { useEffect, useState } from 'react'
import './BurgerMenu.scss'

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeMenu()
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className="burger-menu">
      <button
        className="burger-menu-button"
        type="button"
        aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsOpen((prev) => !prev)}>
        <div className="burger-menu-button-wrapper">
          {isOpen ? (
            <svg
              aria-hidden="true"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 3L15 15M15 3L3 15"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.75 0.75H16.7484M0.75 7.7508H16.7484M0.75 14.7516H16.7484"
                strokeWidth="1.5"
                strokeLinecap="round"
                stroke="white"
              />
            </svg>
          )}
        </div>
      </button>
      <nav className={`${isOpen ? '' : 'hidden'} burger-menu-content`}>
        {/*#TODO; add nav buttons */}
      </nav>
    </div>
  )
}

export default BurgerMenu
