import React, { useState, useEffect } from "react";
import axios from "axios";

const IP = () => {
    const [ipData, setIpData] = useState(null);

    useEffect(() => {
        axios
            .get("https://ipapi.co/json/") // ipapi.co endpoint
            .then((response) => {
                setIpData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching IP data:", error);
            });
    }, []);

    return (
        <div>
            <h2>IP Geolocation</h2>
            {ipData ? (
                <div>
                    <p><strong>IP:</strong> {ipData.ip}</p>
                    <p><strong>Location:</strong> {ipData.city}, {ipData.region}, {ipData.country_name}</p>
                    <p><strong>Organization:</strong> {ipData.org}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default IP;
