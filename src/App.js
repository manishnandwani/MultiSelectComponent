import MultiSelect from "./Components/MultiSelect/MultiSelect";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Multiselect react component</h1>
      <MultiSelect
        search
        filterSort={(optionA, optionB) =>
          (optionA?.name ?? "")
            .toLowerCase()
            .localeCompare((optionB?.name ?? "").toLowerCase())
        }
      />
    </div>
  );
}
