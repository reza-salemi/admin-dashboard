import { useEffect, useRef, useState } from "react";
import USFlagImage from "@assets/images/us.png";
import FAFlagImage from "@assets/images/fa.png";
import { languageSelectorStrings } from "./stings";

const LanguageSelector = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { fa, en } = languageSelectorStrings;

  useEffect(() => {
    const checkClickOutside = (event: MouseEvent) => {
      if (
        isDropdownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", checkClickOutside);

    return () => {
      document.removeEventListener("mousedown", checkClickOutside);
    };
  }, [isDropdownOpen]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="dropdown">
      <a className="nav-flag dropdown-toggle" onClick={toggleDropdown}>
        <img src={USFlagImage} alt="US Flag" />
      </a>
      <div
        ref={dropdownRef}
        className={`dropdown-menu dropdown-menu-end ${
          isDropdownOpen && "show"
        }`}
        style={{ textAlign: "right" }}
      >
        <a className="dropdown-item fw-bolder">
          <img className="ms-2" src={FAFlagImage} alt="FA Flag" width="20px" />
          <span className="align-middle">{fa}</span>
        </a>
        <a className="dropdown-item fw-bolder">
          <img className="ms-2" src={USFlagImage} alt="US Flag" width="20px" />
          <span className="align-middle">{en}</span>
        </a>
      </div>
    </div>
  );
};

export default LanguageSelector;
