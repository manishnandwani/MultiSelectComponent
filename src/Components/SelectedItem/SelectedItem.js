import styles from "./SelectedItem.module.css";

const SelectedItem = ({ data, handleSelectItem }) => {
  return (
    <div className={styles.selectedItem}>
      <span>{data}</span>
      <span className={styles.cross} onClick={(e) => handleSelectItem(e, data)}>
        {" "}
        x
      </span>
    </div>
  );
};

export default SelectedItem;
