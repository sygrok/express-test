import "./App.css";
import ExcelTest from "./components/ExcelTest";
import SignalTest from "./components/SignalTest";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <Users />
      <SignalTest />
      <ExcelTest />
    </div>
  );
}

export default App;
