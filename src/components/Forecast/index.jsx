import React from 'react';
import WeatherCard from '../WeatherCard';
import CityButton from '../CityButton'
import Row from 'react-bootstrap/Row';

const cities = [{ name: "Montreal", lon: -73.561668, lat: 45.508888 }, { name: "Tokyo", lon: 139.692, lat: 35.6894 }, { name: "San Francisco", lon: -122.487701, lat: 37.763027 },  { name: "Libreville", lon: 9.45417, lat: 0.39 }];

const Forecast = ({latitude, longitude, onclick}) => {
  const [data, setData] = React.useState({ city: {}, list: [] });
  React.useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=df33af2aa13ea2e6d90055236e92eeed&units=metric`
    )
    .then((response) => response.json())
      .then((response) => {
      let forecastFive = [], i;
      for (i = 0; i < 40; i += 8) { forecastFive.push(response.list[i]) };
      setData({ city: response.city, list: forecastFive });
    })
  }, [longitude, latitude]);
  const dayList = data.list.map(element => <WeatherCard day={element} key={element.dt} />);
  const cityList = cities.map(city => <CityButton name={city.name} lon={city.lon} lat={city.lat} onclick={onclick} key={city.name}/>)
  return (
    <div>
      <h1 className="pt-5"><strong>Welcome to myWeather</strong></h1>
      <h2 className="pt-3"><strong>Weather for {data.city.name} ({data.city.country})</strong></h2>
      <Row className="pt-3 justify-content-center">{dayList}</Row>
      <div className="pt-4">{cityList}</div>
    </div>
  );
};


export default Forecast;


