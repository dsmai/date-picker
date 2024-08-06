import moment from "moment";
import "./date.css";

const DateDisplay = (props) => {
  // use object destructuring
  const { date, numberSelected, note } = props;
  const incrementDate = (inputDateString, daysToAdd = 0) => {
    // need to do several things here
    // - parse date to new Date()
    const rawDate = new Date(inputDateString);
    // - increment the date on the rawDate object
    rawDate.setDate(rawDate.getDate() + daysToAdd);
    // - extract year, month, day
    const year = rawDate.getFullYear();
    const month = rawDate.getUTCMonth() + 1; // add 1 because Jan is 0
    const day = rawDate.getUTCDate();
    return `${year}-${month}-${day}`;
    // - modify year, month, day as required
    // - combine year, month, day and return processed string
  };

  return (
    <div className="date-display">
      <section>Today is: {moment(date).format("LL")}</section>
      <section>
        {numberSelected} days from today is:{" "}
        {moment(incrementDate(date, numberSelected)).format("LL")}
      </section>
      <section>
        On {moment(date).format("LL")}, {note.author} wrote: {note.content}
      </section>
    </div>
  );
};

export default DateDisplay;
