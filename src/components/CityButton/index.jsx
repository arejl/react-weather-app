import React from 'react';

const CityButton = ({ onclick, name, lon, lat }) => {
  return (
    <button className="btn btn-primary mx-3" onClick={() => { onclick(lon, lat) }}>{name}</button>
  );
};

export default CityButton;