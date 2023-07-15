const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/tabaski2K23', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
});

  

// const mongoConn = {
//     connectionString: "mongodb://localhost:27017",
//     dbName: "tabaski2K23",
//     collectionName: "selfies",
// }
// console.log("Connexion à MongoDB...");
// MongoClient.connect(mongoConn.connectionString, (err, client) => {
//     if (err) {
//         console.error("Erreur lors de la connexion à MongoDB :", err);
//     }

//     console.log("Connexion à MongoDB établie.");
// })


// // Configuration de l'API Twitter
// const twitterConn = {
//     consumer_key: "rEF8w4qLNcY7QC0JJKdShJGQl",
//     consumer_secret: "jQEejFrHAL76Av6NATmGcLI8QGBFP0yFNvWhKJle48xvPZzr9W",
//     access_token: "1624146828185767957-2IcDc1oLm5TpIt6iGsEapgPQIzgexm",
//     access_token_secret: "iE90OFwDq4vPe1aM3wvZcbHbA4i5EPlNJQAdbxzOiopzI",
// }
