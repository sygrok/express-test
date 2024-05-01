import React from "react";
import axios from "axios";

const SignalTest = () => {
  const sendSignal = async () => {
    let data = "test";
    const response = await axios.post(`/api/test`, { data });
    if (response.data.success) {
      console.log(response.data.success);
      console.log(response.data.msg);
    }
  };

  return (
    <>
      <button onClick={sendSignal}>send signal</button>
    </>
  );
};

export default SignalTest;
