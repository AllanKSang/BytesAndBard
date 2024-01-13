/*import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAutJ3HZb4Gos7kH9sbRL3bleIVi2-PtM",
  authDomain: "bytesandbard.firebaseapp.com",
  projectId: "bytesandbard",
  storageBucket: "bytesandbard.appspot.com",
  messagingSenderId: "837327932662",
  appId: "1:837327932662:web:b85b9f0e474e6dcfddf0d7",
  measurementId: "G-RQ06B1DX24",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app); // Initialize Firestore separately

const PoemsDB = () => {
  const [poems, setPoems] = useState([]);
  const [newPoem, setNewPoem] = useState("");

  useEffect(() => {
    // Fetch poems from Firestore on component mount
    const fetchPoems = async () => {
      try {
        const poemsCollection = await getDocs(collection(firestore, "poems"));
        const poemsData = poemsCollection.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPoems(poemsData);
      } catch (error) {
        console.error("Error fetching poems: ", error);
      }
    };

    fetchPoems();
  }, [firestore]); // Dependency array now includes firestore

  const savePoem = async () => {
    try {
      // Check if Firestore is properly initialized
      if (firestore) {
        // Add the new poem to Firestore
        await addDoc(collection(firestore, "poems"), { content: newPoem });

        // Fetch and update the poem list
        const updatedPoems = await getDocs(collection(firestore, "poems"));
        const updatedPoemsData = updatedPoems.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPoems(updatedPoemsData);

        // Clear the input field
        setNewPoem("");
      } else {
        console.error("Firestore is not properly initialized.");
      }
    } catch (error) {
      console.error("Error saving poem: ", error);
    }
  };

  return (
    <div>
      <h1>Your Poem Blog</h1>
      <textarea
        rows="4"
        cols="50"
        placeholder="Type your poem here..."
        value={newPoem}
        onChange={(e) => setNewPoem(e.target.value)}
      />
      <button onClick={savePoem}>Save Poem</button>

      <div>
        <h2>Published Poems</h2>
        <ul>
          {poems.map((poem) => (
            <li key={poem.id}>{poem.content}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PoemsDB;
*/

/* global getAnalytics */

/*import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAutJ3HZb4Gos7kH9sbRL3bleIVi2-PtM",
  authDomain: "bytesandbard.firebaseapp.com",
  projectId: "bytesandbard",
  storageBucket: "bytesandbard.appspot.com",
  messagingSenderId: "837327932662",
  appId: "1:837327932662:web:b85b9f0e474e6dcfddf0d7",
  measurementId: "G-RQ06B1DX24",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app); // Inform ESLint that getAnalytics is defined globally

const PoemsDB = () => {
  const [poems, setPoems] = useState([]);
  const [newPoem, setNewPoem] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(app.firestore(), "poems"),
      (snapshot) => {
        const poemsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPoems(poemsData);
      }
    );

    return () => unsubscribe(); // Unsubscribe when component unmounts
  }, []);

  const savePoem = async () => {
    try {
      // Add the new poem to Firestore
      await addDoc(collection(app.firestore(), "poems"), { content: newPoem });

      // Clear the input field
      setNewPoem("");
    } catch (error) {
      console.error("Error saving poem: ", error);
    }
  };

  return (
    <div>
      <h1>Your Poem Blog</h1>
      <textarea
        rows="4"
        cols="50"
        placeholder="Type your poem here..."
        value={newPoem}
        onChange={(e) => setNewPoem(e.target.value)}
      />
      <button onClick={savePoem}>Save Poem</button>

      <div>
        <h2>Published Poems</h2>
        <ul>
          {poems.map((poem) => (
            <li key={poem.id}>{poem.content}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PoemsDB;
*/

import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAutJ3HZb4Gos7kH9sbRL3bleIVi2-PtM",
  authDomain: "bytesandbard.firebaseapp.com",
  projectId: "bytesandbard",
  storageBucket: "bytesandbard.appspot.com",
  messagingSenderId: "837327932662",
  appId: "1:837327932662:web:b85b9f0e474e6dcfddf0d7",
  measurementId: "G-RQ06B1DX24",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app); // Inform ESLint that getAnalytics is defined globally
const firestore = getFirestore(app); // Initialize Firestore separately

const PoemsDB = () => {
  const [poems, setPoems] = useState([]);
  const [newPoem, setNewPoem] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(firestore, "poems"),
      (snapshot) => {
        const poemsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPoems(poemsData);
      }
    );

    return () => unsubscribe(); // Unsubscribe when component unmounts
  }, [firestore]);

  const savePoem = async () => {
    try {
      // Add the new poem to Firestore
      await addDoc(collection(firestore, "poems"), { content: newPoem });

      // Clear the input field
      setNewPoem("");
    } catch (error) {
      console.error("Error saving poem: ", error);
    }
  };

  return (
    <div>
      <h1>Poems</h1>
      <textarea
        rows="4"
        cols="50"
        placeholder="Type your poem here..."
        value={newPoem}
        onChange={(e) => setNewPoem(e.target.value)}
      />
      <button onClick={savePoem}>Save</button>

      <div>
        <h2>Published Poems</h2>
        <ul>
          {poems.map((poem) => (
            <li key={poem.id}>{poem.content}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PoemsDB;
