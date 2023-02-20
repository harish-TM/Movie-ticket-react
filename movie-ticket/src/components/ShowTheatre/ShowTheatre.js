import { useEffect, useMemo, useState } from 'react';
import './ShowTheatre.css';
import React from 'react';
import Modal from '../Modal/Modal';
function ShowTheatre({ data }) {

  useEffect(() => {
    console.log(data)
  }, [])

  const [modalData, setModalData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const date = useMemo(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = dd + '/' + mm + '/' + yyyy;
    return formattedToday;
  }, [])

  const openModal = (time, movie, theatre) => {
    let obj = {
      'show_time': time,
      'movie_name': movie,
      'theatre_name': theatre,
      "date": date,
      "user_mail_id": "test@gmail.com"
    }
    console.log(JSON.stringify(obj))
    setModalData(obj);
    setShowModal(true);
  }

  const closeModal = ()=> {
    setShowModal(false);
  }
  return (
    <div className="showTheatre">
      <h1 className='showTheatre-heading'>Theatres nearby ...</h1>
      {data.theatre.map((theatre) => (
        <div className="showTheatre-container" key={theatre.theatre_name}>
          {/* <img className="showTheatre-image" src= {theatre.thumbnail_url}/> */}
          <div className="showTheatre-text-container">
            <h2 className="showTheatre-text-heading">{theatre.theatre_name}</h2>
            <h3 className="showTheatre-address">Address : {theatre.address}</h3>
            <p className="showTheatre-rating">Rating: {theatre.customer_rating}/5</p>
            <div className='showTheatre-book-holder'>
              <div className='showTheatre-card'>
                <h3 className='showTheatre-card-title'>{theatre.show1_movie}</h3>
                <h5 className='showTheatre-card-time'>Time: {theatre.show1_time}</h5>
                <button className='showTheatre-card-button' onClick={() => openModal(theatre.show1_time, theatre.show1_movie, theatre.theatre_name)}>Book Now</button>
              </div>
              <div className='showTheatre-card'>
                <h3 className='showTheatre-card-title'>{theatre.show2_movie}</h3>
                <h5 className='showTheatre-card-time'>Time: {theatre.show2_time}</h5>
                <button className='showTheatre-card-button' onClick={() => openModal(theatre.show2_time, theatre.show2_movie, theatre.theatre_name)}>Book Now</button>
              </div>
              <div className='showTheatre-card'>
                <h3 className='showTheatre-card-title'>{theatre.show3_movie}</h3>
                <h5 className='showTheatre-card-time'>Time: {theatre.show3_time}</h5>
                <button className='showTheatre-card-button' onClick={() => openModal(theatre.show3_time, theatre.show3_movie, theatre.theatre_name)}>Book Now</button>
              </div>
              <div className='showTheatre-card'>
                <h3 className='showTheatre-card-title'>{theatre.show4_movie}</h3>
                <h5 className='showTheatre-card-time'>Time: {theatre.show4_time}</h5>
                <button className='showTheatre-card-button' onClick={() => openModal(theatre.show4_time, theatre.show4_movie, theatre.theatre_name)}>Book Now</button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {
        showModal && <Modal data={modalData} closeModal={closeModal}/>
      }
    </div>
  );
}

export default React.memo(ShowTheatre);
