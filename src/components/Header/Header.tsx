
import './header.scss'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
  <div className="container">
    <h3 className='navbar-brand'>LUMEN</h3>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link" href="#">project</a>
        <a className="nav-link" href="#">services</a>
        <a className="nav-link" href="#">about</a>
        <a className="nav-link" href="#">contact</a>
        <button type="button" className="btn">book a call</button>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Header
