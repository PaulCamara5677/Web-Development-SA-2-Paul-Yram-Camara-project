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
aximport React from 'react';

const HomePage = () => (
  <div style={{ textAlign: 'center', padding: '20px' }}>
    <h1>Welcome to Our Tourism Website</h1>
    <p>Discover breathtaking destinations and plan your next adventure!</p>
  </div>
);

export default HomePage;