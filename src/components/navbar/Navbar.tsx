import './navbar-styles.css'
import Logo from '../../assets/icons/logo.svg'

const NavBar = () => {
  return (
    <div className="container">
      <img className='image' alt={Logo} src={Logo} height={40} width={40} />
      <label className='label'>Jira Software</label>
    </div>
  );
};
export default NavBar;