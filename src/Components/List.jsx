import { SlOptionsVertical } from "react-icons/sl";
import { FaPlus } from "react-icons/fa";
import TaskDetails from "./TaskDetails";
import { useEffect, useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";
import { ImBin2 } from "react-icons/im";

const List = ({ list, data, setdata, handlechangedetails }) => {
  const [name, setname] = useState("");

  const [completed, setcompleted] = useState(0);

  useEffect(() => {
    let num = 0;
    list.tasks.forEach((task, i) => {
      if (task.iscompleted) {
        num++;
      }
    });
    setcompleted(num);
  }, [data]);

  
  const handleAddtask = () => {
    if (name) {
      const newdata = { ...data };
      newdata.lists.forEach((l, i) => {
        if (l.name === list.name) {
          l.tasks.push({ name: name, iscompleted: false });
        }
      });

      setdata(newdata);
      setname("");
    }
  };

  const handlechecked = (task, index) => {
    const newdata = { ...data };
    newdata.lists.forEach((l, i) => {
      if (l.name === list.name) {
        l.tasks.forEach((t, i) => {
          if (t.name === task.name && i === index) {
            t.iscompleted = true;
          }
        });
      }
    });

    setdata(newdata);
  };

  function formatDate(currdate) {
    let date = new Date(currdate)
    const day = date.getDate();
    const monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
  
    // Determine the day suffix
    let daySuffix = "th";
    if (day === 1 || day === 21 || day === 31) {
      daySuffix = "st";
    } else if (day === 2 || day === 22) {
      daySuffix = "nd";
    } else if (day === 3 || day === 23) {
      daySuffix = "rd";
    }
  
    // Format the date in "day month, year" format
    const formattedDate = `${day}${daySuffix} ${month}, ${year}`;
    return formattedDate;
  }

  return (
    <div className="w-full h-fit border-2 border-blue-500 p-4 text-blue-700 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div>{list.name}</div>
        <SlOptionsVertical />
      </div>
      {/* <div className="flex gap-4 items-center">
        <div className="bg-[#1c437e] p-2 rounded-full text-white font-bold">
          <FaPlus />
        </div>
        <div>Add a task</div>
      </div> */}
      <div className="flex items-center justify-between gap-2 w-full">
        {/* <div>Add a task</div> */}
        <input
          value={name}
          onChange={(e) => setname(e.target.value)}
          type="text"
          placeholder="New task"
          className="p-2 w-full"
        />
        <div
          onClick={handleAddtask}
          className="bg-[#1c437e] p-2 rounded-full text-white font-bold w-fit"
        >
          <FaPlus />
        </div>
      </div>
      {list.tasks.map((task, i) => {
        return (
          !task.iscompleted && (
            <div className="flex justify-between">
              <div className="flex gap-4 ">
                <div
                  onClick={() => handlechecked(task, i)}
                  className=" p-2 w-fit h-fit border-[1px] border-[#1c437e] rounded-full text-white font-bold"
                >
                  <FaPlus />
                </div>
                <div className="flex flex-col justify-center gap-2">
                  <div>{task.name}</div>
                  <div className="text-xs">{task.details}</div>
                  { task.date && <div className="text-[0.6rem]">{formatDate(task.date)}</div> }
                </div>
              </div>
              <div className="flex gap-1 items-center h-[30px]">
                <div onClick={() => handlechangedetails(list, task, i)}>
                  <MdModeEdit />
                </div>
                
              </div>
            </div>
          )
        );
      })}

      { completed>0 && <div className="text-green-600">Completed ({completed})</div> }

      {list.tasks.map((task, i) => {
        // setcompleted(completed+1);
        return (
          task.iscompleted && (
            <div className="flex justify-between  text-green-600 ">
              <div className="flex gap-4">
                <div
                  onClick={() => handlechecked(task, i)}
                  className="h-fit w-fit border-[1px] border-green-600 rounded-full text-[30px] font-bold "
                >
                  <BsCheckLg />
                </div>
                <div className="flex flex-col gap-2">
                  <div>{task.name}</div>
                  <div className="text-xs">{task.details}</div>
                  { task.date && <div className="text-[0.6rem]">{formatDate(task.date)}</div> }
                </div>
              </div>
              <div className="flex gap-1 items-center h-[30px]">
                <div onClick={() => handlechangedetails(list, task, i)}>
                  <MdModeEdit />
                </div>

              </div>
            </div>
          )
        );
      })}
    </div>
  );
};

export default List;
