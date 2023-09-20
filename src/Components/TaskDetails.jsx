import { RxCross2 } from "react-icons/rx";
import { ImBin2 } from "react-icons/im";
import { useEffect, useRef, useState } from "react";

const TaskDetails = ({ setisopen, data, setdata, list, task, index }) => {
  const [details, setdetails] = useState(task.details);
  const [name, setname] = useState(task.name);
  const [date, setdate] = useState(task.date);

  const handleupdate = () => {
    const newdata = { ...data };
    newdata.lists.forEach((l, i) => {
      if (l.name === list.name) {
        l.tasks.forEach((t, i) => {
          if (t.name === task.name && i === index) {
            t.name = name;
            t.details = details;
            t.date = date;
          }
        });
      }
    });

    setdata(newdata);
    setisopen(false);
  };

  const handledelete = (list, task, index) => {
    const newdata = { ...data };
    newdata.lists.forEach((l, i) => {
      if (l.name === list.name) {
        l.tasks = l.tasks.filter((t, i) => {
          return i !== index;
        });
      }
    });

    setdata(newdata);
    setisopen(false);
  };

  function formatDate(currdate) {
    const date = new Date(currdate);
    const day = date.getDate();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
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

  const modalRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!modalRef.current.contains(e.target)) {
        setisopen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="absolute top-0 left-0 bg-[#1c437e5c] h-screen w-screen flex justify-center items-center">
      <div
        ref={modalRef}
        className="w-1/2  bg-white p-8 flex flex-col justify-between gap-4"
      >
        <div className="flex justify-between">
          <div onClick={() => handledelete(list, task, index)}>
            <ImBin2 />
          </div>
          <div onClick={() => setisopen((prev) => !prev)}>
            <RxCross2 />
          </div>
        </div>

        {/* <div className="flex flex-col gap-2"> */}
        {/* <div className="text-black px-2">Hello</div> */}
        <input
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <textarea
          name=""
          id=""
          placeholder="Add details"
          className="bg-blue-50 h-[100px] w-full p-2"
          value={details}
          onChange={(e) => setdetails(e.target.value)}
        ></textarea>
        {!date ? (
          <div onClick={() => setdate(new Date())}>Add date</div>
        ) : (
          formatDate(date)
        )}
        <div>Move to Another list</div>

        <div className="flex justify-end">
          <button onClick={handleupdate} className="p-2 bg-blue-500 text-white">
            Update
          </button>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default TaskDetails;
