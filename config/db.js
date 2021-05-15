// const mongoose = require("mongoose");

// mongoose
//   .connect(
//    process.env.MONGODB_URI || `mongodb+srv://${process.env.DB_USER_PASS}@cluster0.kz7ea.mongodb.net/atypikhouse`,
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//       useFindAndModify: false,
//     }
//   )
//   .then(() => console.log("MongoDB connecté"))
//   .catch((err) => console.log("Erreur de connexion à MongoDB", err));


const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER_PASS}.mongodb.net/atypikhouse?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB connecté"))
  .catch((err) => console.log("Erreur de connexion à MongoDB", err));