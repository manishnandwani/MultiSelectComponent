import styles from "./SelectedList.module.css";
import SelectedItem from "../SelectedItem/SelectedItem";

const SelectedList = ({
  selectedListRef,
  selectedItems,
  handleSelectItem,
  handleSelectInput
}) => {
  return (
    <div
      ref={selectedListRef}
      className={styles.selectedList}
      onClick={handleSelectInput}
    >
      {selectedItems.length > 0 &&
        selectedItems.map((selectedItem, index) => (
          <SelectedItem
            data={selectedItem}
            handleSelectItem={handleSelectItem}
            key={index}
          />
        ))}
    </div>
  );
};

export default SelectedList;
