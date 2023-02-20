import "./ShowMovies.css"

const ShowMovies = ({ data }) => {
    return (
        <div className="showMovies">
            {
                data.map((movie) => {
                    return (
                        <div className="showMovies-card" key={movie.movie_name}>
                            <img src={movie.thumbnail_url} className="showMovies-image" />
                            <div className="showMovies-container">
                                <div className="showMovies-header-container">
                                    <h3 className="showMovies-title">{movie.movie_name}</h3>
                                    <h5 className="showMovies-runtime">{movie.running_time}</h5>
                                    <p className="showMovies-rating">{movie.imdb_rating}/10</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ShowMovies;