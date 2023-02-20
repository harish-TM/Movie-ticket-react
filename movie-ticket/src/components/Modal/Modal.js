import { useState } from 'react';
import './Modal.css'
import axios from 'axios';

const Modal = ({ data, closeModal }) => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [bookingDone, setBookingDone] = useState(false);
    const toggleSeat = (ind) => {
        if (!selectedSeats.includes(ind)) {
            setSelectedSeats([...selectedSeats, ind]);
        }
        else {
            setSelectedSeats([
                ...selectedSeats.slice(0, selectedSeats.indexOf(ind)),
                ...selectedSeats.slice(selectedSeats.indexOf(ind) + 1, selectedSeats.length)
            ])
        }
    }

    const bookTicket = () => {
        axios.post('https://zincubate.in/api/MovieTicketChecker?action=bookSeats', {
            ...data,
            "booked_seats": selectedSeats
        })
            .then(function (response) {
                console.log('saved booking');
                console.log(response.data);
                setBookingDone(true);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (

        <div className="modal">
            <div className="modal-container">
                <div className="modal-body">
                    {!bookingDone ? (<div><h2 className='modal-header'>Select Seats for</h2>
                        <h3 className='modal-movie'>{data.movie_name}</h3>
                        <h3 className='modal-time'>Time : {data.show_time}</h3>
                        <div className='modal-seats-holder'>
                            {
                                new Array(100).fill().map((_, i) => <span key={i} onClick={() => toggleSeat(i + 1)} className={'modal-seat' + (selectedSeats.includes(i + 1) ? ' selected' : '')}>{i + 1}</span>)
                            }
                        </div>
                        <button className="modal-button" onClick={bookTicket}>Book Ticket</button>
                        </div>) : (<div>
                            <h2 className='modal-header' style={{marginTop:'40px'}}>Booking done successfully !!</h2>
                        </div>)}
                </div>
                <span className="modal-close" onClick={closeModal}> X </span>
            </div>
        </div>
    )
}

export default Modal;