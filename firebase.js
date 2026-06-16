import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAKUJyfsvSvYm-Alvv8xjF39mf9fH_GR40",
  authDomain: "townhallstrategy.firebaseapp.com",
  databaseURL: "https://townhallstrategy-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "townhallstrategy",
  storageBucket: "townhallstrategy.firebasestorage.app",
  messagingSenderId: "922581580105",
  appId: "1:922581580105:web:56a85984338c470fb88298"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
