import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
const APIKey = 'AIzaSyBSRMoi4_1RfGXt1bVQXfxHqYXSz4HdrE4';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('Mountain Biking');
  }

  videoSearch(term) {
    YTSearch({ key: APIKey, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      //this.setState({videos: videos});
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;

//Questions
//1. Why not always create a class component insead of functional components?
//2. Why two css files? Index.css and App.css..
//3. How does npm start server on port 3000?
//4. Recommend any software for conceptualizing components/apps? Instead of Word.
