import Form from "./Form";

function Content() {
  return (
    <div className="content">
      <h2>How To Use This App</h2>
      <p>The app is quite simple really. Follow the instructions below:</p>
      <ol>
        <li>Input a start and end value. These need to be integers.</li>
        <li>Click 'Go' and let the app work its magic.</li>
      </ol>
      <h2>Expected Behaviour</h2>
      <ul>
        <li>
          A range of values should be returned to the DOM using your inputs as
          the start and end of the array.
        </li>
        <li>Multiples of 15 should be replaced by the word 'fizzbuzz'.</li>
        <li>Multiples of 5 should be replaced by the word 'buzz'.</li>
        <li>Multiples of 3 should be replaced by the word 'fizz'.</li>
      </ul>
      <p>
        If you input bad data, the form should return an error letting you know
        that it hasn't worked.
      </p>

      <Form />
    </div>
  );
}

export default Content;
