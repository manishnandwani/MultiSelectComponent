export const getSelectedItems = (users, value, selectedItems) => {
  let _selectedItems = selectedItems;
  for (let user of users) {
    if (user.name === value) {
      if (user.isSelected) {
        user.isSelected = false;
        _selectedItems = selectedItems.filter((data) => data !== value);
        break;
      } else {
        user.isSelected = true;
        _selectedItems = [...selectedItems, value];
        break;
      }
    }
  }
  return { _selectedItems };
};
