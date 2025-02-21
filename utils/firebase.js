const admin = require('firebase-admin');
const serviceAccount = require('../serviceAccountKey.json');  // Ruta correcta si el archivo está en la raíz



admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "firebase-adminsdk-fbsvc@bodega-kouture.iam.gserviceaccount.com" // Cambia esto por tu URL de Firebase
});

const db = admin.firestore();

module.exports = { admin, db };
