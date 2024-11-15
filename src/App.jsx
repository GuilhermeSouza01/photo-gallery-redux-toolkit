import "./App.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "./galleryState";
import "@fontsource/oswald";

function App() {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.gallery.photos);

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);
  console.log(photos);

  return (
    <div className="App">
      <h1>Photo Gallery</h1>
      <p>This is photo gallery made using redux toolkit and thunk.</p>
      <hr />
      <div className="gallery">
        {photos.map((photo) => (
          <img
            key={photo.id}
            src={photo.download_url}
            alt={photo.author}
            width="400"
            height="400"
          />
        ))}
      </div>
      <button onClick={() => dispatch(getPhotos())}>Load More</button>
    </div>
  );
}

export default App;
