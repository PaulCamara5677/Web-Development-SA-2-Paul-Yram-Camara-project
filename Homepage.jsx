import React from 'react';

const HomePage = () => (
<div>
<h1>Welcome to Our Tourism Website</h1>
<p>Discover your next adventure with us!</p>
</div>
);

export default LocationPage;


HomePage.jsx
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
{locations.map((location) => (
<div key={location.id} style={{ margin: '20px', textAlign: 'center' }}>
<img src={location.images[0]} alt={location.name} style={{ width: '200px', height: '150px' }} />
<h2>{location.name}</h2>
<p>{location.description}</p>
</div>
))}
</div>
</div>
);
};

export default LocationPage;
