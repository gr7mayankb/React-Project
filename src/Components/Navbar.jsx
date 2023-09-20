import { Link } from "react-router-dom";
import Logo from "../Images/leverage-logo.png";

const Navbar = ({ logo }) => {
  return (
    <div className="bg-[#1c437e] flex justify-between items-center p-4">
      <div className="flex items-center gap-3">
        <img src={Logo} className="h-[40px]" alt="" />
        <div className="text-white">TasksBoard</div>
        <div className="ml-4">
          <ul className="flex gap-2 text-white underline">
            <Link to="/">TaskBoard</Link>
            <Link to="/calc">Calculator</Link>
            <Link to="/weather">Weather App</Link>
          </ul>
        </div>
      </div>

      <div>
        <img
          className="h-[50px] rounded-full "
          src="https://fastly.picsum.photos/id/1072/200/200.jpg?hmac=jar1_w-0fdzV_d70mmk9VzkBQA9B_oSZuZs21we31ZE"
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
