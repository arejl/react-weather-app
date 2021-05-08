import React from 'react';
import { weekDay } from "../../tools";
import Card from 'react-bootstrap/Card';

const WeatherCard = ({day}) => {
  return (
      <Card style={{ width: '12rem' }} className="mx-3">
        <Card.Img variant="top" src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} />
        <Card.Body>
          <Card.Title><strong>{weekDay(day.dt_txt)}</strong></Card.Title>
          <Card.Text>
            <span>{day.weather[0].description}</span><br/>
            <span>Temp.: {day.main.temp_min}°</span>            
          </Card.Text>
        </Card.Body>
      </Card>
  )
}

export default WeatherCard;