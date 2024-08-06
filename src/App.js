import "./App.css";
import DateBox from "./components/DateBox";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="date-box">
        <DateBox />
      </div>
    </div>
  );
}

export default App;
