import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (options, callback) => {
  // TODO
  $.get('https://www.googleapis.com/youtube/v3/search', {
    key: options.key,
    q: options.query,
    maxResults: options.max || 5,
    videoEmbeddable: true,
    type: 'video',
    part: 'snippet'
  })
    .done((obj) => {
      if (callback) {
        callback(obj.items);
      }
    })
    .fail(({responseJSON}) =>{
      responseJSON.error.errors.forEach((err) => console.error(err));
    });
};

export default searchYouTube;
