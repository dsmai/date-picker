import { useEffect, useState } from "react";
import "./date.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DateDisplay from "./DateDisplay";
import DateReset from "./DateReset";

const DateBox = () => {
  const today = new Date().toISOString().slice(0, 10);
  const initNoteState = {
    // this is an object as initial state
    author: "Bi",
    content: "",
  };

  const [date, setDate] = useState(today); //useState
  const [number, setNumber] = useState(0); //useState
  const [note, setNote] = useState(initNoteState);
  // luu roi, nhung phai chuyen qua DateDisplay using props

  useEffect(() => {
    console.log("rendered");
  }, [date]);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.valueAsNumber);
  };

  const handleReset = () => {
    setDate(today);
    setNumber(0);
    setNote(initNoteState);
  };

  const handleNoteChange = (e) => {
    setNote({
      author: "Bi",
      content: e.target.value,
    });
  };

  const handleChange = (e) => {
    // object destructuring
    const { name, value } = e.target;
    setNote((prevNote) => {
      // return a new object
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <input
        type="date"
        className="date-input"
        value={date}
        onChange={handleDateChange}
      />
      <input
        type="number"
        className="number-input"
        value={number}
        onChange={handleNumberChange}
      />
      <input
        type="text"
        className="text-input"
        value={note.content}
        placeholder="Take a note..."
        onChange={handleNoteChange}
      />
      <button className="data-reset" onClick={handleReset}>
        Reset all
      </button>

      <DateDisplay date={date} numberSelected={number} note={note} />
      <section className="cart"></section>
    </>
  );
};

export default DateBox;
