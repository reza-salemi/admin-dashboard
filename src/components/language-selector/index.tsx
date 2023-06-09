import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import USFlagImage from "@assets/images/us.png";
import FAFlagImage from "@assets/images/fa.png";
import { useAppContext } from "contexts/app";

const LanguageSelector = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const {
    changeLanguage,
    state: { language },
  } = useAppContext();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

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
        <img
          src={language === "fa" ? FAFlagImage : USFlagImage}
          alt={language === "fa" ? "IR Flag" : "US FLAG"}
        />
      </a>
      <div
        ref={dropdownRef}
        className={`dropdown-menu dropdown-menu-end ${
          isDropdownOpen && "show"
        }`}
        style={{ textAlign: language === "fa" ? "right" : "left" }}
      >
        <a
          className="dropdown-item fw-bolder d-flex align-items-center gap-2"
          onClick={() => changeLanguage("fa")}
        >
          <img className="ms-2" src={FAFlagImage} alt="FA Flag" width="20px" />
          <span className="align-middle">{t("language.fa")}</span>
        </a>
        <a
          className="dropdown-item fw-bolder d-flex align-items-center gap-2"
          onClick={() => changeLanguage("en")}
        >
          <img className="ms-2" src={USFlagImage} alt="US Flag" width="20px" />
          <span className="align-middle">{t("language.en")}</span>
        </a>
      </div>
    </div>
  );
};

export default LanguageSelector;
