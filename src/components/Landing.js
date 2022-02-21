import Header from "./Header";
import Robot from "../assets/img/robot.png";
import ViewServices from "./ViewServices";
import {
  eclipse1,
  eclipse2,
  eclipse3,
  eclipse4,
  eclipse5,
  eclipse6,
  eclipse7,
} from "../assets/images";

export default function Landing() {
  return (
    <div className="App bg-black px-6 md:px-20 pb-20">
      <Header />
      <div className="md:flex items-center">
        <img className="eclipse-7" src={eclipse7} alt="" />
        <img className="eclipse-6" src={eclipse6} alt="" />
        <div>
          <div className="flex">
            <p
              className="text-white text-3xl font-bold"
              style={{ color: "#9BA4ED" }}
            >
              Explore
            </p>
            &nbsp;
            <span className="text-white text-3xl font-bold">
              the fascinating
            </span>
          </div>
          <span className="text-white text-3xl font-bold">world of VR</span>
          <p className="text-white py-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus
            ac ipsum sed rhoncus. Nam euismod auctor ipsum. Etiam interdum nulla
            neque, eu elementum arcu fermentum vel.
          </p>
          <button className="text-white border rounded px-4">
            <p>Sign up</p>
          </button>
        </div>
        <div>
          <img className="eclipse-3" src={eclipse3} alt="" />
          <img className="eclipse-1" src={eclipse1} alt="" />
          <img className="eclipse-2" src={eclipse2} alt="" />
          <img className="hero-img" src={Robot} alt="" />
          <img className="eclipse-4" src={eclipse4} alt="" />
          <img className="eclipse-5" src={eclipse5} alt="" />
        </div>
      </div>
      <ViewServices />
    </div>
  );
}
