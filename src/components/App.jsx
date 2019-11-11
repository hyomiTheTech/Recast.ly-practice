import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';
import Search from './Search.js';

class App extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
    this.videoClickHandler = this.videoClickHandler.bind(this);
    this.searchInputHandler = this.searchInputHandler.bind(this);
  }

  componentDidMount() {
    this.searchInputHandler('yerin baek');
  }

  searchInputHandler(query) {
    var options = {
      key: this.props.API_KEY,
      query: query,
      max: 10
    };

    this.props.searchYouTube(options, (videos) => {
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      });
    });
  }

  videoClickHandler(e) {
    this.setState({
      currentVideo: e
    });
  }

  render () {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search searchInputHandler={this.searchInputHandler}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.currentVideo}/></div>
          </div>
          <div className="col-md-5">
            <div className="video-list"><VideoList videos={this.state.videos} videoClickHandler={this.videoClickHandler}/></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
