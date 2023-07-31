const mongoose = require("mongoose");
// Middleware
const db = 'mongodb+srv://social-app-media:social-app-media@cluster0.tn7y3du.mongodb.net/SocialMediaApp?retryWrites=true&w=majority'
// Connect to MongoDB using the connection string
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(`Connection successful`);
}).catch((e) => {
  console.log(`No connection: ${e}`);
});

// mongodb://localhost:27017

//mongodb+srv://social-app-media:social-app-media@cluster0.tn7y3du.mongodb.net/

//mongodb+srv://socialmedia:socialmedia@cluster0.nsffmg4.mongodb.net/SocialMediaApp?retryWrites=true&w=majority