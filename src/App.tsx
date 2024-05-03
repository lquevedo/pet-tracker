import { useEffect, useState } from "react";

// Components
import PetListItem from "./components/PetListItem";

// Firebase
import { collection, onSnapshot } from "@firebase/firestore";
import { db } from "./firebase";

import "./App.css";

type Pets = {
  name: string;
  morningFeed: boolean;
  eveningFeed: boolean;
  treat: boolean;
  id: string;
};

function App() {
  const [pets, setPets] = useState<Pets[] | []>([]);

  const petsRef = collection(db, "pets");

  useEffect(() => {
    const unsubscribe = onSnapshot(petsRef, (snapshot) => {
      const petsDatabase = snapshot.docs.map((doc) => {
        const data = doc.data();

        return {
          name: data?.name,
          morningFeed: data?.morningFeed,
          eveningFeed: data?.eveningFeed,
          treat: data?.treat,
          id: doc?.id,
        };
      });

      setPets(petsDatabase);
    });

    return () => unsubscribe();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="text-center p-4">
      <h1 className="text-3xl font-bold underline mb-4">Pet Tracker</h1>
      <div className="pet-list flex flex-col gap-y-4">
        {pets.map((pet) => {
          return <PetListItem data={pet} />;
        })}
      </div>
    </div>
  );
}

export default App;
