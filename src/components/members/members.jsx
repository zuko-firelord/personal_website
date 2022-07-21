import "./members.css";

const Members = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">PROJECTS</h1>
      <div className="member member-1">
        <div className="member-img bgimg1"></div>
        <div className="member-info">
          <h1 className="name">3D Metaverse  </h1>
          <h3 className="position">TECH STACK : React, Solidity, Ethersjs, Infura, Hardhat, Threejs Fiber, Drei</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="https://web3-metaverse-three-fiber.vercel.app/" target="_blank" className="contact-member">
            <span>Project Link</span>
          </a>
          {/* <a href="https://web3-metaverse-three-fiber.vercel.app/" target="_blank" className="contact-member git">
            <span>Project Link</span>
          </a> */}
        </div>
      </div>

      <div className="member member-2">
        <div className="member-img bgimg2"></div>
        <div className="member-info">
          <h1 className="name">CChrys</h1>
          <h3 className="position">Another Leader</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="https://web3-metaverse-three-fiber.vercel.app/" target="_blank" className="contact-member">
            <span>Project Link</span>
          </a>
        </div>
      </div>

      <div className="member member-3">
        <div className="member-img bgimg3"></div>
        <div className="member-info">
          <h1 className="name">CCChrys</h1>
          <h3 className="position">Another Leader Again</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="https://web3-metaverse-three-fiber.vercel.app/" target="_blank" className="contact-member">
            <span>Project Link</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Members;
