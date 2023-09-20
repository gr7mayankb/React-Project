import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsCheckLg } from 'react-icons/bs';


const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [checkbox, setcheckbox] = useState(false);

  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(email, password, checkbox);

    let data = JSON.parse(localStorage.getItem("leverage"));

    console.log(data);
    if (
      data.user.email == email.toLocaleLowerCase() &&
      data.user.password == password
    ) {
      data.islogged = true;
      if (checkbox) {
        data.isremember = true;
      }

      localStorage.setItem("leverage", data);

      navigate("/");
    } else {
      alert("Invalid Crendential");
    }
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-12 bg-[#1c437e] text-white">
      <div className="text-[1.5rem] md:text-[3vw] font-bold">Log in!</div>
      <div className="w-[80%] md:w-1/2 lg:w-1/3">
        <form
          className="flex flex-col justify-center items-center gap-6 "
          onSubmit={handlesubmit}
        >
          <div className="relative w-full">
            <input
              type="email"
              id="email"
              className="p-4 w-full bg-transparent border-white border-[1px] before:content-['EmailAddress'] before:absolute before:top-0"
              placeholder="Enter Email"
              onChange={(e) => setemail(e.target.value)}
              value={email}
            />
            
          </div>
          <div className="relative w-full">
            <input
              type="password"
              className="p-4 w-full bg-transparent border-white border-[1px] "
              placeholder="Enter Password"
              id="password"
              onChange={(e) => setpassword(e.target.value)}
              value={password}
            />
            
          </div>
          <div className="w-full mb-2 text-sm  flex justify-between items-center">
            <label className="flex gap-1 items-center">
              <div className="relative">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className=" h-[20px] w-[20px] appearance-none border-[1px]"
                  onChange={(e) => setcheckbox(!checkbox)}
                  value={checkbox}
                />
                <div className="absolute top-0 left-0 text-[20px]">
                { checkbox && <BsCheckLg /> }
                </div>
              </div>
              Remember me
            </label>
            <div>Forget Password?</div>
          </div>
          <button
            type="submit"
            className="bg-white text-black font-bold w-1/2 py-3"
          >
            Log in
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default Login;
