import Glasses from "../assets/img/glasses.png";
import Resolution from "../assets/img/resolution.png";
import Game from "../assets/img/game.png";
import Finance from "../assets/img/finance.png";

export default function ViewServices() {
  return (
    <>
      <div className="services-bg hidden md:flex justify-center space-x-10 p-5 rounded-3xl">
        <div className="service-bg flex flex-col items-center">
          <img className="service-img" src={Glasses} alt="" />
          <p className="text-white text-center">
            Experience the world through VR glasses
          </p>
        </div>
        <div className="service-bg flex flex-col space-y-100 items-center">
          <img className="service-img" src={Resolution} alt="" />
          <p className="text-white text-center">
            View all your surrounding with 360
          </p>
        </div>
        <div className="service-bg flex flex-col space-y-100 items-center">
          <img className="service-img" src={Game} alt="" />
          <p className="text-white text-center">Incredible gaming experience</p>
        </div>
        <div className="service-bg flex flex-col space-y-100 items-center">
          <img className="service-img" src={Finance} alt="" />
          <p className="text-white text-center">
            Making meetings and tours easier
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 services-bg md:hidden rounded-3xl">
        <div className="service-bg flex flex-col items-center">
          <img className="service-img" src={Glasses} alt="" />
          <p className="text-white text-center">
            Experience the world through VR glasses
          </p>
        </div>
        <div className="service-bg flex flex-col space-y-100 items-center">
          <img className="service-img" src={Resolution} alt="" />
          <p className="text-white text-center">
            View all your surrounding with 360
          </p>
        </div>
        <div className="service-bg flex flex-col space-y-100 items-center">
          <img className="service-img" src={Game} alt="" />
          <p className="text-white text-center">Incredible gaming experience</p>
        </div>
        <div className="service-bg flex flex-col space-y-100 items-center">
          <img className="service-img" src={Finance} alt="" />
          <p className="text-white text-center">
            Making meetings and tours easier
          </p>
        </div>
      </div>
    </>
  );
}
