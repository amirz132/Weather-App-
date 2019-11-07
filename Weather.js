import React from "react";

class Weather extends React.Component {
  render() {
    return <div>
    {this.props.temperature}
    {this.props.country}
    {this.props.temperature}
    {this.props.description}
    {this.props.description}
    </div>;
  }
}

export default Weather;
