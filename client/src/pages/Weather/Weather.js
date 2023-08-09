import "./Weather.css";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import axios from "axios"

export default function Weather() {

  const [selectedDate, setSelectedDate] = useState('');
  const [reversedDate, setReversedDate] = useState('');
  const [photoOTD, setPhotoOTD] = useState('')

  const handleDateChange = (event) => {
    const newDate = event.target.value
    setSelectedDate(newDate);

    const reversed = newDate.split('-').reverse().join('-');
    setReversedDate(reversed);
  };


  async function getPhoto(event){
    try {
      event.preventDefault();
      console.log(reversedDate)
      const API = `https://api.nasa.gov/planetary/apod?date=2023-08-08&api_key=${process.env.REACT_APP_API_KEY}`
      console.log(API)
      const res = await axios.get(API)
      setPhotoOTD(res.data.hdurl);
      console.log(res.data.hdurl)
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
          <input type="date" value={selectedDate} name="chooseADate" onChange={handleDateChange}/>
          <button type="submit">Submit</button>
        </form>
        {photoOTD && <img src={photoOTD} alt="NASA photo of the day" />}
      </div>
      </main>
    </>
  );
}
