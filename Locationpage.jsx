import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LocationPage = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios
      .get('/api/locations')
      .then((response) => setLocations(response.data))
      .catch((error) => console.error('Error fetching locations:', error));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Explore Our Locations</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {locations.map((location) => (
          <div
            key={location._id}
            style={{
              margin: '10px',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              width: '300px',
              textAlign: 'center',
            }}
          >
            <img
              src={location.images[0] || 'placeholder.jpg'}
              alt={location.name}
              style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
            />
            <h2>{location.name}</h2>
            <p>{location.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationPage;
