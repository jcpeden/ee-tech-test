import React from "react";

class Paragraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return this.props.hide ? null : (
      <p
        role={this.props.role ? this.props.role : ""}
        className={this.props.isError ? "error" : null}
        dangerouslySetInnerHTML={{ __html: this.props.content }}
      />
    );
  }
}

export default Paragraph;
