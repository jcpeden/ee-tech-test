import Form from "./Form";
import Paragraph from "./Paragraph";

function Content() {
  return (
    <div className="content">
      <h3>How To Use</h3>
      <ol>
        <li>Input a start and end value. These need to be integers.</li>
        <li>Click 'Go' and let the app work its magic.</li>
      </ol>
      <Form title="Fizz Buzz Application" />
    </div>
  );
}

export default Content;
