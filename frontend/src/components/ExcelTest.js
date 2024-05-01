import axios from "axios";
import React, { useState } from "react";

const ExcelTest = () => {
  const [state, setState] = useState({
    excelData: [],
  });

  const readExcel = async () => {
    const response = await axios.post("/api/readExcel");
    if (response.data.success) {
      console.log("reading excel is successful");
      setState((prev) => ({ ...prev, excelData: response.data.data }));
    }
  };

  const populateData = () => {
    let temp = [];
    const data = state.excelData;
    for (let i = 0; i < data.length; i++) {
      temp.push(
        <tr key={Math.random()}>
          <td>{data[i].ID}</td>
          <td>{data[i].FOOD}</td>
          <td>{data[i].DRINK}</td>
        </tr>
      );
    }
    return temp;
  };

  return (
    <>
      <button onClick={readExcel}>Read excel </button>
      <hr />

      <table style={{ margin: "auto" }}>
        <tr>
          <th>ID</th>
          <th>FOOD</th>
          <th>DRINK</th>
        </tr>
        {populateData()}
      </table>
    </>
  );
};

export default ExcelTest;
