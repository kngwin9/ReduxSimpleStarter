import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Youtube API Key
const API_KEY = "AIzaSyAe-u8ixNnyeY8jY0lchpkBAfnCKslzMkc";

// Create a new component. This component should produce some html.
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            videos:[],
            selectedVideo: null
        };

        // Refactored the Youtube search in to its own method
        this.videoSearch('surfboards');

    }

    videoSearch(term){
        YTSearch ({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
            // this.setState ({ videos: videos})
        });
    }

    render() {

        //  Using Lodash
        //  Created a function, passed it to debounce, debounce then takes the inner function and returns a new function that can only be called once every 300 milliseconds.
        const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);

        return (
        <div>
            <SearchBar onSearchTermChange={ term => this.videoSearch(term)}/>
            <VideoDetail video={ this.state.selectedVideo }/>
            <VideoList
                onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                videos={ this.state.videos }/>
        </div>
        );
    }
}

// Take this component's generated HTML and put it on the page in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));