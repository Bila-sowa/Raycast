import Logo from '../Logo'
import BurgerMenu from '../BurgerMenu'
import './Header.scss'

const Header = () => {
  return (
    <header className="header">
      <Logo></Logo>
      <BurgerMenu></BurgerMenu>
    </header>
  )
}

export default Header
