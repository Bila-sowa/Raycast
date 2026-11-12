import './NavButton.scss'

const NavButton = (props) => {
  const { btn } = props

  return (
    <div className="nav-button">
      <a href={btn.href}>{btn.label}</a>
      {btn?.badge ? (
        <div className="nav-button-badge">
          <span>{btn.badge}</span>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default NavButton
