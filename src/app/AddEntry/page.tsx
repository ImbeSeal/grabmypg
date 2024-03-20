"use client";
import { useState } from "react";
import { db, storage } from "../../firebase";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";

export default function AddEntry() {
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const { title, addrShort, addrFull } = newPG;
    const pg = {
      title,
      addrShort,
      addrFull,
    };
    try {
      const docRef = await addDoc(collection(db, "PG"), pg);
    } catch (e) {
      console.error("error adding doc: ", e);
    }

    setNewPG({
      title: "",
      addrShort: "",
      addrFull: "",
    });
  };

  const [newPG, setNewPG] = useState({
    title: "",
    addrShort: "",
    addrFull: "",
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setNewPG({ ...newPG, [name]: value });
  };

  return (
    <div>
      <h1 className="text-4xl">Add a new PG!</h1>
      <div>
        <form onSubmit={onSubmitHandler}>
          <div>
            <label>Name of PG</label>
            <input
              required
              name="title"
              type="text"
              placeholder="Enter name of the PG"
              value={newPG.title}
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label>Address-short</label>
            <input
              required
              name="addrShort"
              type="text"
              placeholder="Short address of the PG"
              maxLength={20}
              value={newPG.addrShort}
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label>Address-full</label>
            <input
              required
              name="addrFull"
              type="text"
              placeholder="Enter Full address"
              value={newPG.addrFull}
              onChange={onChangeHandler}
            />
          </div>
          <button>Done</button>
        </form>
      </div>
    </div>
  );
}
