import Logo from "../assets/img/logo.png";

export default function Header() {
  return (
    <div className="flex space-x-96 w-full py-5">
      <img src={Logo} alt="" />
      <ul className="flex space-x-36">
        <li className="text-white">Home</li>
        <li className="text-white">Services</li>
        <li className="text-white">About us</li>
        <li className="text-white">Contact us</li>
      </ul>
      <button className="text-white border rounded px-4">
        <p>Sign up</p>
      </button>
    </div>
  );
}
