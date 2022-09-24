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
        I am Sachin Tedwa, an undergraduate at Symbiosis Pune, full-stack Blockchain developer, Trader, a keen reader and a fan of personal growth.<br/>
        Since 2017 I have been exploring and experimenting with blockchain technologies. I am fascinated by the ability to deploy permissionless, immutable code across a decentralised p2p network.
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;
