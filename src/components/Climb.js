import climb from '../images/climb.png';
import fullLogo from '../images/logo_full.png';
import mount1 from '../images/Mountain2.png';
import mount2 from '../images/Mountain3.png';
import {useState} from 'react';

const Climb = () => {

  //Hook
  const [mount, setMount] = useState(true);

  const setMount1 = () => {
    setMount(true);
  }

  const setMount2 = () => {
    setMount(false);
  }

  return (
    <>
      <div style={{display: 'flex'}}>
        <img id='climb-head' alt='climb header' src={climb} />
      </div>
      <section id='mount-nav-cont'>
        <div style={{display: 'flex', gap: 30}}>
          <div onClick={setMount1} style={{color: `${mount ? '#404f6c' :'lightgrey'}`, textDecoration: `${mount ? 'underline' : ''}`}} className='mount-nav-item'>
            <div style={{backgroundColor: `${mount ? 'lightgrey' : ''}`}} className='mount-select'>
              MOUNTAIN 1
            </div>
          </div>
          <div onClick={setMount2} style={{color: `${mount ? 'lightgrey' :'#404f6c'}`, textDecoration: `${mount ? '' : 'underline'}`}} className='mount-nav-item'>
            <div style={{backgroundColor: `${mount ? '' : 'lightgrey'}`}} className='mount-select'>
              MOUNTAIN 2
            </div>
          </div>
        </div>
      </section>
      <section id='climb-bg' >
        <div id='carousel'>
          <img style={{opacity: `${mount ? 100 + '%' : 0 + '%'}`, marginLeft: `${mount ? '' : 5}`}} className='mount-image' alt='mountain 1' src={mount1} />
          <img style={{opacity: `${mount ? 0 + '%': 100 + '%'}`, marginRight: `${mount ? '' : 25 + '%'}`}} className='mount-image' alt='mountain 2' src={mount2} />
        </div>
      </section>
      <div id='footer' >
        <img id='footer-logo' alt='Full Logo Los Angeles Mountains' src={fullLogo} />
        <div id='footer-text'>COPYRIGHT 2016. ALL RIGHTS RESERVED</div>
      </div>
    </>
  )
}

export default Climb;