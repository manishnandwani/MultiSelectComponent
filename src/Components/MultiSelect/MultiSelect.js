import { useEffect, useRef, useState } from "react";
import styles from "./MultiSelect.module.css";
import ListMenu from "../ListMenu/ListMenu";
import { users } from "../../utils/constants";
import SelectedList from "../SelectedList/SelectedList";
import { getSelectedItems } from "../../utils/selectFunctions";

const MultiSelect = ({ search, filterSort }) => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [options, setOptions] = useState(users.sort(filterSort));
  const [padding, setPadding] = useState(0);

  const selectedListRef = useRef(null);

  const handleClick = (e) => {
    setOpenDropDown(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    let _padding = parseInt(selectedListRef.current?.offsetHeight);
    setPadding(_padding || 10);
  }, [selectedItems]);

  const handleSelectInput = (e) => {
    e.stopPropagation();
    setOpenDropDown(true);
  };

  const handleSelectItem = (e, value) => {
    e.stopPropagation();
    const { _selectedItems } = getSelectedItems(users, value, selectedItems);
    setSelectedItems(_selectedItems);
  };

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    if (searchValue === "") {
      setOptions(users);
    } else {
      const _options = users.filter((data) => {
        if (data.name.toLowerCase().includes(searchValue)) {
          return data;
        }
      });
      setOptions(_options);
    }
  };

  return (
    <div className={styles.contianer}>
      <input
        type="text"
        placeholder={selectedItems.length === 0 && "Please select"}
        className={styles.selectInput}
        onClick={handleSelectInput}
        style={{
          paddingTop: `${padding}px`,
          cursor: `${!search && "pointer"}`
        }}
        onChange={handleSearch}
        readOnly={!search && "readonly"}
      />
      <SelectedList
        selectedListRef={selectedListRef}
        handleSelectInput={handleSelectInput}
        selectedItems={selectedItems}
        handleSelectItem={handleSelectItem}
      />
      {openDropDown && (
        <ListMenu options={options} handleSelectItem={handleSelectItem} />
      )}
    </div>
  );
};

export default MultiSelect;
