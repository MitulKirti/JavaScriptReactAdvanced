import React, { useState, useEffect } from "react";
import axios from "axios";
import "../index.scss";

const getDetails = () => {
  return axios
    .get("https://randomuser.me/api")
    .then((response) => {
      return JSON.stringify(response);
    })
    .catch((err) => {
      return err;
    });
};

const UserDetail = () => {
  const [userDetailsJSON, setUserDetailsJSON] = useState("");
  useEffect(() => {
    getDetails().then((randomData) => {
      setUserDetailsJSON(randomData || "No data found");
    });
  }, []);

  return (
    <>
      <p className="title-name">
        Calling an API to display random data on the UI.
      </p><br/>
      {userDetailsJSON}
    </>
  );
};
export default UserDetail;
