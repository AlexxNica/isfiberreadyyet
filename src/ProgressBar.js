import React from 'react';

class ProgressBar extends React.Component {

  shouldComponentUpdate() {
    return false;
  }

  render() {
    let props = this.props;
    let data = props.data;
    return (
      <div className="ProgressBar">
        <div style={{width: data.percent + "%"}}>
          {`${data.passing} of ${data.total} unit tests passing`}
        </div>
      </div>
    );
  }
}

export default ProgressBar;
