import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchInfo } from './weatherSlice';
export default function Weather() {
    const [place, setPlace] = useState("Haldwani");
    const weatherResponse = useSelector((state) => {
        // Check if state.weather.response.list[0] exists, if not return an empty array
        return state.weather.response.list ?  state.weather.response.list[0] : []; 
    });
    
    const dispatch = useDispatch();
    const handleChanges = (event) => {
        let placeforWeather = event.target.value;
        setPlace(placeforWeather);
    }
    useEffect(() => {
        console.log("weatherResponse updated:", weatherResponse);
    }, [weatherResponse]);
      
    return (
        <>
            <main style={{ marginTop: "-10rem" }}>
                <h1>
                    Weather App
                </h1>
                <section>
                    <input type="text" onChange={handleChanges} placeholder='Enter the city name' />
                    <br />
                    <br />
                    <button onClick={() => { dispatch(fetchInfo(place)) }}>Search City</button>
                </section>
                <section>
                    {
                        ! weatherResponse.wind?
                        <div>Seach for city and places</div> 
                        :
                        <div>Temp : {weatherResponse.wind?.deg}</div>

                    }
                </section>
            </main>
        </>
    )
}
 