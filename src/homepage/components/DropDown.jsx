import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

function DropDown({ options = [], placeholder = "Select Option", onSelect }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(placeholder);

  const handleSelect = (item) => {
    setSelected(item);
    setOpen(false);
    if (onSelect) onSelect(item);
  };

  return (
    
    <div className="relative w-[100%] text-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center border border-white py-2 px-3 rounded-md bg-transparent hover:backdrop-blur-sm transition"
      >
        {selected}
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute left-0 mt-1 w-full bg-black/40 border sm:text-xs border-slate-100 backdrop-blur-sm shadow-lg rounded-md p-1 z-20">
          {options.map((item, index) => (
            <div
              key={index}
              className="px-3 py-2 hover:italic rounded cursor-pointer transition"
              onClick={() => handleSelect(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropDown;
