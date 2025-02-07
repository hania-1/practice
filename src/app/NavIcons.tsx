import React from "react";
import { FaHome, FaShoppingBag, FaInfo } from "react-icons/fa";
import { GiPapers } from "react-icons/gi";
import { IoMdContacts } from "react-icons/io";

interface Props {
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

const NavIcons: React.FC<Props> = ({ setCurrentPage }) => {
  return (
    <div className="flex flex-col items-center space-y-6">
      <button onClick={() => setCurrentPage("home")} className="cursor-pointer">
        <FaHome size={24} />
      </button>
      <button onClick={() => setCurrentPage("shop")} className="cursor-pointer">
        <FaShoppingBag size={24} />
      </button>
      <button onClick={() => setCurrentPage("About")} className="cursor-pointer">
        <FaInfo size={24} />
      </button>
      <button onClick={() => setCurrentPage("Blog")} className="cursor-pointer">
        <GiPapers size={24} />
      </button>
      <button onClick={() => setCurrentPage("Contact")} className="cursor-pointer">
        <IoMdContacts size={24} />
      </button>
    </div>
  );
};

export default NavIcons;
