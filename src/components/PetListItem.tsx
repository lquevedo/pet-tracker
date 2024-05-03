import { useState } from "react";

// Firebase
import { doc, updateDoc } from "@firebase/firestore";
import { db } from "../firebase";

type Props = {
  data: {
    name: string;
    morningFeed: boolean;
    eveningFeed: boolean;
    treat: boolean;
    id: string;
  };
};

const PetListItem = ({ data }: Props) => {
  const [hasBeenMorningFed, setHasBeenMorningFed] = useState(data.morningFeed);
  const [hasBeenEveningFed, setHasBeenEveningFed] = useState(data.eveningFeed);
  const [hasHadTreat, setHasHadTreat] = useState(data.treat);

  const updateMorningFed = async (value: boolean) => {
    setHasBeenMorningFed(value);
    const petsRef = doc(db, "pets", data.id);

    await updateDoc(petsRef, {
      morningFeed: value,
    });
  };

  const updateEveningFed = async (value: boolean) => {
    setHasBeenEveningFed(value);
    const petsRef = doc(db, "pets", data.id);

    await updateDoc(petsRef, {
      eveningFeed: value,
    });
  };

  const updateTreat = async (value: boolean) => {
    setHasHadTreat(value);
    const petsRef = doc(db, "pets", data.id);

    await updateDoc(petsRef, {
      treat: value,
    });
  };

  return (
    <div className="collapse bg-base-200">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">{data.name}</div>
      <div className="collapse-content">
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Morning</span>
            <input
              type="checkbox"
              className="checkbox"
              checked={hasBeenMorningFed}
              onChange={() => updateMorningFed(!hasBeenMorningFed)}
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Evening</span>
            <input
              type="checkbox"
              className="checkbox"
              checked={hasBeenEveningFed}
              onChange={() => updateEveningFed(!hasBeenEveningFed)}
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Dental</span>
            <input
              type="checkbox"
              className="checkbox"
              checked={hasHadTreat}
              onChange={() => updateTreat(!hasHadTreat)}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default PetListItem;
