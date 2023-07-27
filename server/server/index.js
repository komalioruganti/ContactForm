const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const {PORT} = 8080;

//connect mongodb
mongoose.connect("mongodb+srv://komali:GSjnsSSHHldsgZj8@cluster0.pz9lfdp.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Error connecting to MongoDB:', error));


const dataSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    contact_number: String,
    college_name: String,
    course: String,
    passing_year: Number,
});
const DataModel = mongoose.model('DataModel', dataSchema);

app.post("/addUserData",(req,res)=>{
    const { name, email, contact_number, college_name, course,passing_year} = req.body;

    const newData = new DataModel({
        name,
        email,
        contact_number,
        college_name,
        course,
        passing_year,
      });

      newData.save()
    .then(savedData => {
      console.log('Data saved:', savedData);
      res.status(200).json({ message: 'Data added successfully.' });
    })
    .catch(error => {
      console.error('Error saving data:', error);
      res.status(500).json({ error: 'Failed to add data to the database.' });
    });

})

app.get("/",(req,res)=>{
    res.send("Hi");

})



app.listen(8080,()=>console.log(`Running on ${8080}`));