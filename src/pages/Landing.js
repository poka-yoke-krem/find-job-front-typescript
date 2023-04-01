import { Link } from "react-router-dom";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";

import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Traking</span> app
          </h1>
          <p>
            I'm baby asymmetrical pickled typewriter bodega boys quinoa coloring
            book actually marfa forage. Next level live-edge edison bulb tilde,
            fit pok pok gluten-free DIY. Next level palo santo vaporware
            schlitz, venmo vice YOLO vinyl snackwave crucifix readymade paleo.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
