import React from "react";
import "./Weather.css";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import axios from "axios"

export default function Weather() {

  const [photoOTD, setPhotoOTD] = useState([])
  const [search, setSearch] = useState("")

  function searchFunction(event){
    setSearch(event.target.value)
  }

  async function getPhoto(event){
    try {
      event.preventDefault();
      const API = `https://api.nasa.gov/planetary/apod?date=${search}api_key=${process.env.REACT_APP_API_KEY}`
      console.log(API)
      const res = await axios.get(API)
      setPhotoOTD(res.data.photos);
      console.log(res.data.photos[0].img_src)
    } catch (error) {
      console.log(error)
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
      <h1>weatherView</h1>
      <div className="photoOTDForm">
        <form onSubmit={getPhoto}>
          <label htmlFor="chooseADate">Choose a date:</label>
          <input type="date" id="chooseADate" name="chooseADate" onChange={searchFunction()}/>
          <button type="submit">Submit</button>
        </form>

      </div>
      </main>
    </>
  );
}
