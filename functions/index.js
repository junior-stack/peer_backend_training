const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const admin = require("firebase-admin");
admin.initializeApp();

exports.getAllColors = functions.https.onCall((data, context) => {
  return admin
      .firestore()
      .collection("userColor")
      .get()
      .then((snapshots) => {
        console.log("snapshots", snapshots);
        return snapshots.docs.map((doc) => doc.data());
      });
});

exports.updateColor = functions.https.onCall((data, context) => {
  return admin
      .firestore()
      .collection("userColor")
      .doc(data.uid)
      .update({color: data.color})
      .then((res) => {
        return {message: "success", write: res};
      });
});

exports.uploadPicture = functions.https.onCall((data, context) => {
  return admin
      .firestore()
      .collection("userProfile")
      .doc(data.uid)
      .set({url: data.url})
      .then((res) => {
        return {message: "success", write: res};
      });
});
