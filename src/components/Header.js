import Paragraph from "./Paragraph";

function Header() {
  return (
    <header className="header">
      <h1>Fizz Buzz Technical Assessment</h1>
      <Paragraph
        role="complementary"
        content="This is a basic application that I've built as part of a technical
        assessment for Equal Experts. I hope you like it!"
      />
    </header>
  );
}

export default Header;
