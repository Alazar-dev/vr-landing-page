import Header from "./Header";
import Robot from "../assets/img/robot.png";
import ViewServices from "./ViewServices";

export default function Landing() {
  return (
    <div>
      <Header />
      <div className="flex items-center">
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
              the fascinating world of VR
            </span>
          </div>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus
            ac ipsum sed rhoncus. Nam euismod auctor ipsum. Etiam interdum nulla
            neque, eu elementum arcu fermentum vel.
          </p>
          <button className="text-white border rounded px-4">
            <p>Sign up</p>
          </button>
        </div>
        <div>
          <img src={Robot} alt="" />
        </div>
      </div>
      <ViewServices />
    </div>
  );
}
