import React, { Component } from 'react';
import { getMovies } from '../../services/fakeMovieService'

class Movies extends Component {
    state = { movies:getMovies() }
    buttonDeleteHandler = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id)
        this.setState({ movies })
    }
    render() { 
        const { length : count} = this.state.movies
        if (count === 0) {
            return <p>There are no Movies in Database!</p>
        }
        return ( <React.Fragment>
            <p>There are {count} Movies in Database!</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.movies.map(m => (
                    <tr key={m._id}>
                        <td>{m.title}</td>
                        <td>{m.genre.name}</td>
                        <td>{m.numberInStock}</td>
                        <td>{m.dailyRentalRate}</td>
                        <td><button onClick={() => this.buttonDeleteHandler(m)} className="btn btn-danger btn-sm">Delete</button></td>
                    </tr>))}
                </tbody>
            </table>
        </React.Fragment> );
    }
}
 
export default Movies;