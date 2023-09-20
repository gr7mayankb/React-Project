import { FaPlus } from "react-icons/fa";
import { useState } from "react";

const AddList = ({ setisaddlist, data, setdata }) => {
  const [name, setname] = useState("");

  const handleListAdd = () => {
    if (name) {
      setdata({ ...data, lists: [...data.lists, { name: name, tasks: [] }] });
      setisaddlist(false);
    }
  };

  return (
    <div className="absolute top-0 left-0 bg-[#1c437e5c] h-screen w-screen flex justify-center items-center">
      <div className="w-1/2 bg-white p-8 flex flex-col gap-6">
        {/* <div className="flex justify-end">
         
          <div onClick={()=> setisaddlist((prev)=> !prev)}>
            <RxCross2 />
          </div>
        </div> */}

        <div className="flex items-center justify-between gap-2 w-full">
          <input
            type="text"
            onChange={(e) => setname(e.target.value)}
            placeholder="New task"
            className="p-2 w-full"
            value={name}
          />
          <div
            onClick={handleListAdd}
            className="bg-[#1c437e] p-2 rounded-full text-white font-bold w-fit"
          >
            <FaPlus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddList;
