import { useEffect } from 'react';
import './ShowTheatre.css';
import React from 'react';

function ShowTheatre({ data }) {

  useEffect(() => {
    console.log(data)
  }, [])
  return (
    <div className="ShowTheatre">
      {data.theatre.map((item, index) => (
        <div className="theatre" key={item.theatre_name}>{item.theatre_name}</div>
      ))}
    </div>
  );
}

export default React.memo(ShowTheatre);
