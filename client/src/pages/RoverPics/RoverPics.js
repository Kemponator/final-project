import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import "./RoverPics.css";

export default function RoverPics() {
  const [roverPhoto, setRoverPhoto] = useState([]);
  const [search, setSearch] = useState({
    soldate: 0,
    chooseacamera: "",
  });
  // console.log(process.env.REACT_APP_NAME)
  function searchFunction(event) {
    setSearch({ ...search, [event.target.name]: event.target.value });
  }

  async function getPhoto(event) {
    try {
      event.preventDefault();
      const API = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${search.soldate}&camera=${search.chooseacamera}&api_key=${process.env.REACT_APP_API_KEY}`;
      console.log(API);
      const res = await axios.get(API);
      setRoverPhoto(res.data.photos);
      console.log(res.data.photos[0].img_src);
    } catch (error) {
      console.log(error);
    }
    console.log(search.soldate, search.chooseacamera);
  }
  return (
    <>
      <Helmet>
        <title>Mars Rover Pictures</title>
        <meta
          name="description"
          content="This page hads lots of nice pictures of Mars"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <main>
        <h2>Images from Mars</h2>
        <p className="disclaimer">
          Please note - not all days/cameras have images. Please try another
          date/camera if nothing is returned! Sol date refers to the amount of
          days the rover has been on Mars. E.g. Sol 15 is the 15th day on Mars.
        </p>
        <div className="roverSearchForm">
          <form className="form" onSubmit={getPhoto}>
            <label className="label1" htmlFor="soldate">
              Choose a Sol Date:
            </label>
            <input
              className="input1"
              type="number"
              id="soldate"
              name="soldate"
              onChange={searchFunction}
            />
            <label className="label2" htmlFor="cameraOption">
              Choose a camera:
            </label>
            <select
              className="input2"
              id="cameraOption"
              name="chooseacamera"
              onChange={searchFunction}
            >
              <option value={false}>Please Select a camera</option>
              <option value="FHAZ">Front Hazard Avoidance Camera</option>
              <option value="RHAZ">Rear Hazard Avoidance Camera</option>
              <option value="Mast Camera">Mast Camera</option>
              <option value="Chemistry and Camera Complex">
                Chemistry and Camera Complex
              </option>
              <option value="Mars Hand Lens Imager">
                Mars Hand Lens Imager
              </option>
              <option value="Mars Descent Imager">Mars Descent Imager</option>
            </select>
            <button className="loginBtn" type="submit">
              Search
            </button>
          </form>

          {/* {roverPhoto&&<img src={roverPhoto} alt="photo of mars taken by curiosity rover"/>} */}
          <div className="imageContainer">
            {roverPhoto &&
              roverPhoto.map((photo) => {
                return (
                  <img
                    className="roverImage"
                    key={photo.id}
                    src={photo.img_src}
                    alt="results"
                  />
                );
              })}
          </div>
        </div>
      </main>
    </>
  );
}
