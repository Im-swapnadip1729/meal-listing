import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <a href="/" className="navbar__brand">
          <span className="navbar__icon" aria-hidden="true">🍳</span>
          <span className="navbar__name">Recipe Haven</span>
        </a>
        <span className="navbar__tagline">Fresh ideas for every craving</span>
      </div>
    </nav>
  )
}
