import { useContext } from 'react'
import { AppContext } from '@/context/appContext'
import './Nav.scss'
import NavButton from '../NavButton'

const Nav = (props) => {
  const { className } = props
  const { getNavButtons } = useContext(AppContext)
  const buttons = getNavButtons()
  const isHasButtons = buttons?.length > 0 && Array.isArray(buttons)
  const navClassName = ['nav', className].filter(Boolean).join(' ')

  return (
    <nav className={navClassName}>
      {isHasButtons ? buttons.map((btn) => <NavButton key={btn.label} btn={btn}></NavButton>) : ''}
    </nav>
  )
}

export default Nav
