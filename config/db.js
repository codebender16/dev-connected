const mongoose = require ('mongoose');
const config = require('config');
const db = config.get("mongoURI"); // URI obtained from mongodb site 

// what is the purpose of the config folder. why this is not like rails where we can just create our schema and migrate? is there a migration folder? how do we update the schema?
// when would we use mongoose? i know it is like rails model sql functions. 

const connectDB = async () => {
  try {
    // mongo client constructor
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
      
    console.log('MongoDB connected...')
  } catch(err) {
    console.log(err.message);
    // Exit process with failure
    process.exit(1)
  }
}

module.exports = connectDB;

