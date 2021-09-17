import React from "react";
import "./css/Dropdown.css";
import { FaAngleDown } from "react-icons/fa";

function Dropdown() {
  return (
    <div class="container">
      <div class="tutorial">
        <ul>
          <li>
            Services {<FaAngleDown />}
            <ul>
              <li>Graphic Design</li>
              <li>Website Design </li>
              <li>Python Programming</li>
              <li>PHP Programming</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
