import './App.css';
import Forecast from './components/Forecast';
import React from 'react';

function App() {
  const [coords, setCoords] = React.useState({ longitude: 0, latitude: 0 });
  React.useEffect(() => navigator.geolocation.getCurrentPosition((position) => {
    setCoords({longitude: position.coords.longitude, latitude: position.coords.latitude})
  }), []);
  const handleChangeCoords = (newLon, newLat) => {
    setCoords({ longitude: newLon, latitude: newLat });
  };

  return (
    <div className="App">
      {(coords.latitude === 0 && coords.longitude === 0) ? <p>Please accept geolocation.</p> : <Forecast latitude={coords.latitude} longitude={coords.longitude} onclick={ handleChangeCoords }/>}
    </div>
  );
}

export default App;
