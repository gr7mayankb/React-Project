import { useEffect, useState } from "react";
import List from "../Components/List";
import Navbar from "../Components/Navbar";
import TaskDetails from "../Components/TaskDetails";
import { FaPlus } from "react-icons/fa";
import AddList from "../Components/AddList";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let leverage = JSON.parse(localStorage.getItem("leverage"));

  const [data, setdata] = useState(leverage);
  
  
  
  const [changelist, setchangelist] = useState(null);
  const [changetask, setchangetask] = useState(null);
  const [changeindex, setchangeindex] = useState(null);
  const handlechangedetails = (list, task, i) => {
    
    setchangelist(list);
    setchangeindex(i);
    setchangetask(task);
    setisopen(true);
      
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (!data) {
      navigate("/login");
    }

    localStorage.setItem("leverage", JSON.stringify(data));
  }, [data]);

  const [isopen, setisopen] = useState(false);
  const [isaddlist, setisaddlist] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-4 gap-4 p-6">
        {data?.lists.map((list, i) => {
          return (
            <List
              key={i}
              list={list}
              data={data}
              setdata={setdata}
              handlechangedetails={handlechangedetails}
            />
          );
        })}
      </div>

      <div
        onClick={() => setisaddlist(true)}
        className="fixed bottom-[5%] right-[5%] bg-[#1c437e] p-3 rounded-full text-white text-[1.5rem] font-bold"
      >
        <FaPlus />
      </div>

      {isaddlist && (
        <AddList setisaddlist={setisaddlist} data={data} setdata={setdata} />
      )}
      {isopen && <TaskDetails setisopen={setisopen} data={data} setdata={setdata} list={changelist} task={changetask} index={changeindex}/>}
    </div>
  );
};

export default Home;
