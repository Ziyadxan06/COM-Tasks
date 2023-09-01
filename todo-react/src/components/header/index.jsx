import logo from '../../assets/logo.svg';
import profileBtn from '../../assets/Profile Button.svg';
import mainImg from '../../assets/Main.svg'

export const Header = () => {
  return <header>
    <div className="navbar">
      <nav>
        <div className='logo-container'>
          <img src={logo} alt="" />
          <a href="#" className="logo"><b>fast</b>home</a>
        </div>

        <ul className="nav-links">
          <li className="nav-link-item">For Sale</li>
          <li className="nav-link-item">For Rent</li>
          <li className="nav-link-item">Daily Rental</li>
          <li className="nav-link-item">Projects</li>
        </ul>
      </nav>

      <div className="profile">
        <a href="#">Advertise</a>
        <img src={profileBtn} alt="" />
      </div>
    </div>
    {/* big image after navbar */}
    <img className='mainImg' src={mainImg} alt="" />
  </header>
}

