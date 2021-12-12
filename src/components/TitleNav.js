import fullLogo from '../images/logo_full.png';
import logo from '../images/logo.png';
import {Link} from 'react-scroll';

const TitleNav = ({background}) => {
  return (
    <div id={`${background ? 'title-nav-2' : 'title-nav-1'}`} >
      {background ? <img alt='Logo and Icon' id='full-logo' src={fullLogo} /> : <img alt='Icon' style={{paddingRight: 11 + '%'}} id='full-logo' src={logo} />}
      <div style={{display: 'flex', flexDirection: 'row', gap: 50}} >
        <Link to='history-title' smooth={true} duration={950} style={{color: `${background ? '#3d4a64' : 'white'}`}} className='title-nav-text'>01. HISTORY</Link>
        <Link to='climb-head' smooth={true} duration={950}  style={{color: `${background ? '#3d4a64' : 'white'}`}} className='title-nav-text'>02. TEAM</Link>
      </div>
    </div>
  )
}

export default TitleNav;