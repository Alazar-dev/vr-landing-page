import Glasses from "../assets/img/glasses.png";
import Resolution from "../assets/img/resolution.png";
import Game from "../assets/img/game.png";
import Finance from "../assets/img/finance.png";

export default function ViewServices() {
  return (
    <div className="flex justify-center space-x-10">
      <div className="flex flex-col space-y-100 items-center">
        <img className="service-img" src={Glasses} alt="" />
        <p className="text-white">Experience the world through VR glasses</p>
      </div>
      <div className="flex flex-col space-y-100 items-center w-22">
        <img className="service-img" src={Resolution} alt="" />
        <p className="text-white">View all your surrounding with 360</p>
      </div>
      <div className="flex flex-col space-y-100 items-center w-22">
        <img className="service-img" src={Game} alt="" />
        <p className="text-white">Incredible gaming experience</p>
      </div>
      <div className="flex flex-col space-y-100 items-center w-22">
        <img className="service-img" src={Finance} alt="" />
        <p className="text-white">Making meetings and tours easier</p>
      </div>
    </div>
  );
}
