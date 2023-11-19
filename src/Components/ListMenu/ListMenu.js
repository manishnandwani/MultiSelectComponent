import { useState } from "react";
import styles from "./ListMenu.module.css";

const ListMenu = ({ options, handleSelectItem }) => {
  const [showSubList, setShowSubList] = useState(false);
  return (
    <ul>
      {options.length === 0 ? (
        <p>No Results found</p>
      ) : (
        options.map((option) => (
          <>
            <li
              onClick={(e) => {
                handleSelectItem(e, option.name);
                setShowSubList(!showSubList);
              }}
              className={option.isSelected ? styles.selected : ""}
              key={option.name}
            >
              {option.name}
            </li>
          </>
        ))
      )}
    </ul>
  );
};

export default ListMenu;
