import React, { useState, useEffect } from 'react';

const ConsumerApi = () => {
  const fetch = require('node-fetch');

  const url = 'https://api.themoviedb.org/3/discover/movie';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTNlYTcyYjM5NDBiMjAyNjY4NzQ0Mjg2ZjM3MzkyNSIsInN1YiI6IjY0YzNkMzMzNDMyNTBmMDBhZWUwMzhjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MwPlVIQxa4mtknu3iexfhZizl652FYhfG3HyAmbxSD0'
    }
  };

  fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));

  return (
    <div className='CosumerApi'>
      <a>{{ fetch }}</a>
    </div>
  );
};

export default ConsumerApi;