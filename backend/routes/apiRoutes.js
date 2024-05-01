const express = require("express");
const fs = require("fs");
const router = express.Router();
const ExcelJS = require("exceljs");
const path = require("path");

router.post("/test", async (req, res) => {
  console.log(req.body.data);
  const msg = `${req.body.data} @@@@@@ FROM BACKED`;
  console.log(msg);
  res.json({ success: true, msg });
});

router.post("/readExcel", async (req, res) => {
  try {
    const filePath = path.join(__dirname, "../../files/food-list.xlsx");
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);

    const worksheet = workbook.getWorksheet(1);

    const data = [];
    worksheet.eachRow({ includeEmpty: true }, (row, rowNumber) => {
      if (rowNumber > 1) {
        const rowData = {};
        row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
          rowData[worksheet.getRow(1).getCell(colNumber).value] = cell.value;
        });
        data.push(rowData);
      }
    });
    console.log(data);
    res.json({ success: true, data });
  } catch (error) {
    console.error("Error reading Excel file:", error);
    res.status(500).json({ success: false, error: "Error reading Excel file" });
  }
});

module.exports = router;
