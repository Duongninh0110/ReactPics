import React from 'react';
// import axios from 'axios';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

class App extends React.Component {

    state = { images: []};

    onSearchSubmit = async (term) => {
        // const response = await axios.get('https://api.unsplash.com/search/photos', {
        //     params: { query: term},
        //     headers: {
        //         Authorization: 
        //         'Client-ID ce79047931a5b361c568e2edc5a38b9add86ce780fa8e718cd8ca21f1005dedd'
        //     }
        // });
        
        // .then(response => {
        //     console.log(response.data.results);
        // });

        const response = await unsplash.get('/search/photos', {
            params: { query: term},
        });

        this.setState({ images: response.data.results})
    }

    render() {
        return (
        <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit}/>
            <ImageList images={this.state.images}/>
        </div>
        );
    }
}


export default App;