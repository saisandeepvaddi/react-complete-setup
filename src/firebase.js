import firebase from "firebase";

const config = {
  // firebase app config
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const database = firebase.database();

export default firebase;
