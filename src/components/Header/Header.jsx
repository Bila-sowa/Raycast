import { useEffect, useState } from 'react'
import Logo from '../Logo'
import BurgerMenu from '../BurgerMenu'
import toggleClassOnScroll from '@/utils/toggleClassOnScroll'
import './Header.scss'

const Header = () => {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    return toggleClassOnScroll(setIsSticky, 10)
  }, [])

  const headerClassName = ['header', isSticky && 'is-sticky'].filter(Boolean).join(' ')

  return (
    <header className={headerClassName}>
      <Logo></Logo>
      <BurgerMenu></BurgerMenu>
    </header>
  )
}

export default Header
