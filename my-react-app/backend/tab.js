const mongoose = require('mongoose');
const Table = require('./models/table1.model');

mongoose.connect('mongodb+srv://minip8681:kle123@cluster0.qbrivbz.mongodb.net/kletech_database?retryWrites=true&w=majority');

const tableData = [
  {
    title: "Programming",
    description: "Embark on a journey into the exciting world of coding and software development...",
    image: "prog.jpeg"
  },
  {
    title: "Clubs",
    description: "Immerse yourself in the vibrant world of clubs where diversity meets shared interests...",
    image: "club.jpeg"
  },
  {
    title:"Literature",
    description:"Immerse yourself in the enchanting realm of words and stories within our Literature...",
    image:"lit.jpeg"
  },
  {
    title:"Association",
    description:"Welcome to a dynamic community where individuals come together to form a vibrant association...",
    image:"assoc.png"
  }
];

Table.create(tableData)
  .then(tables => {
    console.log('Tables created successfully');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Some error occurred while creating tables', err);
    mongoose.connection.close();
  });