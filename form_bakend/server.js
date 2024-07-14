const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

mongoose
  .connect(
    "mongodb+srv://Ashok:web3572%40..@clientform.fzpqfe7.mongodb.net/Webortex",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;
const DataSchema = new Schema({
  CompanyName: String,
  Name: String,
  Email: String,
  Mobile: Number,
  Time: String,
  ProjectName: String,
  Description: String,
});

const Data = mongoose.model("ClientForm", DataSchema);

// POST route to create new data
app.post("/data", async (req, res) => {
  const newData = new Data(req.body);
  try {
    const savedData = await newData.save();
    res.status(201).json(savedData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// app.post('/formsubmit', async (req, res) => {
//     const { CompanyName, ClientName, Email } = req.body;
//     const collection = 'ClientForm';
//     try {
//        collection.create({ CompanyName:CompanyName, ClientName:ClientName, Email:Email })
//        .then(()=> console.log("Submitted")).catch(err=>console.log(err))

//     } catch (error) {
//         console.error('Error adding item to cart in server:', error);
//         res.status(500).json('Error adding item to cart');
//     }
// });

app.listen(3001, () => {
  console.log("server is running");
});
