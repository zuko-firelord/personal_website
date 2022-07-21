import './home.css';
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';
import VoxelDog from "../model/voxel-dog";


function Home() {
  return (
    <div id='home' className='container home-container'>
      <VoxelDog/>

      <a href='#footer' className='scroll-down'>
        <hr />
        <h5>scroll down</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>

      <h2>
        <span>About Me</span> <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis id
          quos deserunt, maxime sint sunt tempore quidem ad praesentium itaque,
          aspernatur, magnam culpa iste adipisci?
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;