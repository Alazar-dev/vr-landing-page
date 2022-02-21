import Logo from "../assets/img/logo.png";

export default function Header() {
  return (
    <div className="flex space-x-14 md:space-x-36 w-full py-5">
      <img src={Logo} alt="" />
      <ul className="flex space-x-6 md:space-x-20">
        <li className="text-white text-xs cursor-pointer">Home</li>
        <li className="text-white text-xs cursor-pointer">Services</li>
        <li className="text-white text-xs cursor-pointer">About us</li>
        <li className="text-white text-xs cursor-pointer">Contact us</li>
      </ul>
      <button className="text-white border rounded px-4">
        <p className="text-xs">Sign up</p>
      </button>
    </div>
  );
}
