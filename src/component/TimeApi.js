import {useEffect, useState} from "react";
import axios from "axios";
import "./style.css";
const TimeApi=()=>{

    const [time, setTime] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://worldtimeapi.org/api/timezone/Europe/Kyiv");
                const dateTime = response.data.datetime;
                const formattedTime = new Date(dateTime).toLocaleTimeString('en-US', { hour12: false });
                setTime(formattedTime);
            } catch (error) {
                console.error('Error fetching time:', error);
            }
        };

        fetchData();

        const intervalId = setInterval(fetchData, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h1>Час з API Київ - {time}</h1>
        </div>
    );
}

export default TimeApi;