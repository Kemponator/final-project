import "./Weather.css";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [selectedDate, setSelectedDate] = useState("");
  const [reversedDate, setReversedDate] = useState("");
  const [photoOTD, setPhotoOTD] = useState({});

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setSelectedDate(newDate);
    const parts = newDate.split("");
    console.log(parts);
    const reversedParts = `${parts[0]}${parts[1]}${parts[2]}${parts[3]}${parts[4]}${parts[5]}${parts[6]}${parts[7]}${parts[8]}${parts[9]}`;
    console.log(reversedParts);
    setReversedDate(reversedParts);
  };

  async function getPhoto(event) {
    try {
      event.preventDefault();
      console.log(reversedDate);
      const API = `https://api.nasa.gov/planetary/apod?date=${reversedDate}&api_key=${process.env.REACT_APP_API_KEY}`;
      console.log(API);
      const res = await axios.get(API);
      setPhotoOTD(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getRandomPhoto() {
    try {
      const API = `https://api.nasa.gov/planetary/apod?count=1&api_key=${process.env.REACT_APP_API_KEY}`;
      console.log(API);
      const res = await axios.get(API);
      setPhotoOTD(res.data[0]);
      console.log(res.data[0]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Helmet>
        <title>Mars Weather</title>
        <meta name="description" content="It's pretty fucking cold" />
        <link rel="canonical" href="/" />
      </Helmet>
      <main>
        {console.log(photoOTD)}
        <h2>Image of the Day</h2>
        {console.log(photoOTD)}
        <div className="">
          <form className="form" onSubmit={getPhoto}>
            <label className="formLabel" htmlFor="chooseADate">
              Choose a date:
            </label>
            <input
              className="formInput"
              type="date"
              value={selectedDate}
              name="chooseADate"
              onChange={handleDateChange}
            />
            <button className="loginBtn" type="submit">
              Submit
            </button>
          </form>
          <div className="randomPhotoButton">
            <button className="loginBtn" onClick={getRandomPhoto}>Get a Random Photo!</button>
          </div>
          {<h2>{photoOTD.title}</h2>}
          {photoOTD.explanation && (
            <p className="photoOTDText">{`"${photoOTD.explanation}"`} </p>
          )}
          {photoOTD.hdurl && (
            <img className="photoOTD" src={photoOTD.hdurl} alt="NASA" />
          )}
        </div>
      </main>
    </>
  );
}
