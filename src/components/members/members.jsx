import "./members.css";

const Members = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">PROJECTS</h1>
      <div className="member member-1">
        <div className="member-img bgimg1"></div>
        <div className="member-info">
          <h1 className="name">BlockVoice  </h1>
          <h3 className="position">TECH STACK : Polygon, TheGraph, Solidity, Ipfs, React, Ethersjs, Infura, Hardhat </h3>
          <h4 className="about">
          BlockVoice is a question and answer website for professional and enthusiast programmers built on top of Polygon network and The Graph, that allows users to create questions, add comments, and answer them, without worrying about their privacy.
          </h4>
          <a href="https://block-voice.vercel.app/" target="_blank" className="contact-member">
            <span>Project Link</span>
          </a>
          <a href="https://github.com/TedwaSachin123/BlockVoice" target="_blank" className="contact-member git">
            <span>Github &#123; &#125;</span>
          </a>
        </div>
      </div>

      <div className="member member-2">
        <div className="member-img bgimg2"></div>
        <div className="member-info">
          <h1 className="name">DeFi Quant (AAVE)</h1>
          <h3 className="position">TECH STACK : Solidity, Brownie, Aave, Python, Ganache-cli</h3>
          <h4 className="about">
            Build arbitrage script in python to put down collateral, Borrow, and repay a loan from Aave! Use this to short assets and accrue interest.
          </h4>
          <a href="https://github.com/TedwaSachin123/DeFi-Quant-aave-" target="_blank" className="contact-member">
            <span>Github &#123; &#125;</span>
          </a>
        </div>
      </div>

      <div className="member member-4">
        <div className="member-img bgimg4"></div>
        <div className="member-info">
          <h1 className="name">3D Metaverse </h1>
          <h3 className="position">TECH STACK : React, Solidity, Ethersjs, Infura, Hardhat, Threejs Fiber, Drei</h3>
          <h4 className="about">
            3D Metaverse build on top of blockchain in a web browser using Three.js cross-browser JavaScript library.
          </h4>
          <a href="https://web3-metaverse-three-fiber.vercel.app/" target="_blank" className="contact-member">
            <span>Project Link</span>
          </a>
          <a href="https://github.com/TedwaSachin123/web3_metaverse_threeFiber" target="_blank" className="contact-member git">
            <span>Github &#123; &#125;</span>
          </a>
        </div>
      </div>

      <div className="member member-3">
        <div className="member-img bgimg3"></div>
        <div className="member-info">
          <h1 className="name">ToDo Dapp</h1>
          <h3 className="position">TECH STACK : React, Solidity, Ethersjs, Hardhat</h3>
          <h4 className="about">
          ToDo Dapp is a Full Stack Decentralized application that performs task management with Kanban-style Board on Ethereum blockchain.
          </h4>
          <a href="https://dapp-jira.netlify.app/" target="_blank" className="contact-member">
            <span>Project Link</span>
          </a>
          <a href="https://github.com/TedwaSachin123/TODO_DAPP" target="_blank" className="contact-member git">
            <span>Github &#123; &#125;</span>
          </a>
        </div>
      </div>

      {/* <div className="member member-5">
        <div className="member-img bgimg5"></div>
        <div className="member-info">
          <h1 className="name">Portfolio Website</h1>
          <h3 className="position">TECH STACK : React, Threejs, Chakra UI, Framer Motion</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="https://web3-metaverse-three-fiber.vercel.app/" target="_blank" className="contact-member">
            <span>Project Link</span>
          </a>
        </div>
      </div> */}

      <div className="member member-6">
        <div className="member-img bgimg6"></div>
        <div className="member-info">
          <h1 className="name">BitcoinTodayPrice</h1>
          <h3 className="position">TECH STACK : AWS, React, MongoDB</h3>
          <h4 className="about">
          Design & develop a user-friendly Cryptocurrency website that Focuses on creating information articles, news, and take seminars at college campus to spread knowledge about Crypto, Blockchain & helping folks to get started with it.
          </h4>
          <a href="/" target="_blank" className="contact-member">
            <span>Project Link</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Members;
