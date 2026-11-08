import './Nav.scss'

const Nav = (props) => {
  const { buttons } = props
  const isHasButtons = buttons?.length > 0 && Array.isArray(buttons)

  return (
    <nav>
      {isHasButtons
        ? buttons.map((btn) => (
            <div>
              <a href={btn.href}>{btn.label}</a>
              {btn?.badge ? (
                <div className="badge">
                  <span>{btn.badge}</span>
                </div>
              ) : (
                ''
              )}
            </div>
          ))
        : ''}
    </nav>
  )
}

export default Nav
