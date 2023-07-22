import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Books = ({ videos }) => {
  console.log(videos);

  return (
    <>
      <h1>More Books...</h1>
      <div className='row'>
        {videos &&
          videos.map((video, index) => (
            <div key={index} className='col-2 '>
              {video.volumeInfo.imageLinks?.thumbnail && (
                <img
                  src={video.volumeInfo.imageLinks.thumbnail}
                  alt={video.volumeInfo.description}
                />
              )}
            </div>
          ))}
      </div>
    </>
  );
};

export default Books;
