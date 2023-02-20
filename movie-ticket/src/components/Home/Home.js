import './Home.css';
import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import ShowTheatre from '../ShowTheatre/ShowTheatre';
import ShowMovies from '../ShowMovies/ShowMovies';
import Navbar from '../Navbar/Navbar'
function Home() {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        axios.post('https://zincubate.in/api/MovieTicketChecker?action=getAllDetails', {
            "user_mail_id": "test@gmail.com"
        })
            .then(function (response) {
                console.log('Made data call');
                console.log(response.data);
                setData(response.data);
                setIsLoading(true);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    return (
        <div className="Home">
            <Navbar/>
            {isLoading && <ShowMovies data={data.movies} />}
            {isLoading && <ShowTheatre data={data} />}
        </div>
    );
}

export default React.memo(Home);
