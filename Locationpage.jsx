import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LocationPage = () => {
const [locations, setLocations] = useState([]);

useEffect(() => {
axios.get('http://localhost:5000/locations')
.then(response => setLocations(response.data))
.catch(error => console.error(error));
}, []);

return (
<div>
<h1>Our Locations</h1>
<div style={{ display: 'flex', flexWrap: 'wrap' }}>
{locations.map((location)
