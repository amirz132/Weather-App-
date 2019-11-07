import React from "react";

import Title from "./Components/Title";
import Form from "./Components/Form";
import Weather from "./Components/Weather";

const API_KEY = "5943167eed68dd9c0647ada363945974";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${API_KEY}$`
    );
    const data = await api_call.json();
    console.log(data);
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidty,
      description: data.weather[0].description,
      error: ""
    });
  };

  render() {
    return (
      <div>
        <Title />
        <Form getWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidty}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
