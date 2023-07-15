// // Importation des modules nécessaires
// const Twit = require("twit");
// const MongoClient = require("mongodb").MongoClient;

// // Configuration de l'API Twitter
// const twitterConfig = {
//   consumer_key: "rEF8w4qLNcY7QC0JJKdShJGQl",
//   consumer_secret: "jQEejFrHAL76Av6NATmGcLI8QGBFP0yFNvWhKJle48xvPZzr9W",
//   access_token: "1624146828185767957-2IcDc1oLm5TpIt6iGsEapgPQIzgexm",
//   access_token_secret: "iE90OFwDq4vPe1aM3wvZcbHbA4i5EPlNJQAdbxzOiopzI",
// };

// // Configuration de la base de données MongoDB
// const mongoConfig = {
//   connectionString: "mongodb://127.0.0.1:27017",
//   dbName: "tabaski2K23",
//   collectionName: "selfies",
// };

// // Création d'une instance de l'API Twitter
// // const twitterClient = new Twit(twitterConfig);

// // Connexion à la base de données MongoDB
// MongoClient.connect(mongoConfig.connectionString, (err, client) => {
//   console.log("Connexion à MongoDB...");
//   if (err) {
//     console.error("Erreur lors de la connexion à MongoDB :", err);
//     return;
//   }

//   console.log("Connexion à MongoDB établie.");

//   const db = client.db(mongoConfig.dbName);
//   const collection = db.collection(mongoConfig.collectionName);

// //   // Récupération des tweets avec les hashtags spécifiés
//   const stream = twitterClient.stream("statuses/filter", {
//     track: ["#sunuselfietabaski2023", "#tabaski2023"],
//   });

//   stream.on("tweet", (tweet) => {
//     // Vérification que le tweet contient une image
//     if (tweet.entities.media && tweet.entities.media.length > 0) {
//       const image = tweet.entities.media[0].media_url_https;
//     //   const tags = getTagsFromTweet(tweet); // Fonction pour extraire les tags à partir du tweet

//       // Insertion de l'image avec les tags dans la base de données
//       collection.insertOne({ image }, (err, result) => {
//         if (err) {
//           console.error(
//             "Erreur lors de l'insertion dans la base de données :",
//             err
//           );
//         } else {
//           console.log("Image enregistrée avec succès :", image);
//         }
//       });
//     }
//   });

//   stream.on("error", (err) => {
//     console.error("Erreur lors de la récupération des tweets :", err);
//   });
// });

// // Fonction pour extraire les tags à partir du tweet
// // function getTagsFromTweet(tweet) {
// //   // Implémentez votre logique pour extraire les tags du tweet
// //   // Par exemple, vous pouvez utiliser des expressions régulières ou d'autres méthodes de traitement de texte
// //   // Retournez les tags sous forme d'array ou d'une chaîne de caractères
// //   return [];
// // }

// console.log("Lancement de l'application...");