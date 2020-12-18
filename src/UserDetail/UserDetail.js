import React, { useState, useEffect } from 'react';
import axios from 'axios';

const getDetails = () => {
  return axios
    .get('https://randomuser.me/api')
    .then((response) => {
      return JSON.stringify(response);
    })
    .catch((err) => {
      return err;
    });
};

const UserDetail = () => {
  const [userDetailsJSON, setUserDetailsJSON] = useState('');
  useEffect(() => {
    getDetails().then((randomData) => {
      setUserDetailsJSON(randomData || 'No data found');
    });
  }, []);

  return (
      <pre>{userDetailsJSON}</pre>
  );
};
export default UserDetail;
