import Logo from '../Logo'
import Nav from '../Nav'
import BurgerMenu from '../BurgerMenu'
import './Header.scss'
import navButtons from '../../constants/navButtons'

const Header = () => {
  return (
    <header>
      <Logo></Logo>
      <Nav buttons={navButtons}></Nav>
      <BurgerMenu></BurgerMenu>
    </header>
  )
}

export default Header
