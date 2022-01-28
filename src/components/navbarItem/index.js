import './index.css'

const NavbarItem = props => {
  const {timeInSeconds, score} = props

  return (
    <nav className="nav-container">
      <ul className="unordered-list-items">
        <li className="nav-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="website-logo-icon"
          />
        </li>
        <li className="nav-items">
          <p className="score">
            Score:<span className="value">{score}</span>
          </p>
          <div className="timer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              className="clock"
              alt="timer"
            />
            <p className="value">{`${timeInSeconds} sec`}</p>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default NavbarItem
