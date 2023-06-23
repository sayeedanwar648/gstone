const { createObjectCsvWriter } = require('csv-writer');
const fs = require('fs');
const path = require("path");
const UserModel = require("../models/user.model");

const exportCSV = async (req, res) => {

     try {
          const users = await UserModel.find();
          const csvWriter = createObjectCsvWriter({
               path: 'user.csv',
               header: [
                    { id: 'id', title: 'Id' },
                    { id: 'name', title: 'Name' },
                    { id: 'email', title: 'Email' },
                    { id: 'gender', title: 'Gender' },
                    { id: 'status', title: 'Status' },
                   
               ],
          });

          csvWriter.writeRecords(users)
               .then(() => {
               
                    const filePath = path.join(__dirname, '../', 'user.csv');
                    const csvData = fs.readFileSync(filePath, 'utf8');
                    res.setHeader('Content-Type', 'text/csv');
                    res.setHeader('Content-Disposition', 'attachment; filename=user.csv');
                    res.send(csvData);
                    fs.unlinkSync(filePath)
               })
               .catch((error) => {
                    console.error(' Unable to write', error);
                    res.status(500).json({ error: 'Unable to export' });
               });
     } catch (error) {
          console.log('error:', error)
          res.status(500).send({ message: error.message })
     }


};

module.exports = { exportCSV }