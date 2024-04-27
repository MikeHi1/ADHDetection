import React, { useState, useEffect } from "react";
import Modal from "../ModalComponent";

export default function Test2() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXXXXXXXXXXYZ";
  const [state, setState] = useState(0);
  const [letter, setLetter] = useState("");

  const [showModal, setShowModal] = useState(false);

  function getLetter() {
    let letter = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    setLetter(letter);
  }

  function randomInterval() {
    let min = 2,
      max = 5;
    let rand = Math.floor(Math.random() * (max - min + 1) + min);
    getLetter();
    setTimeout(randomInterval, rand * 1000);
  }

  useEffect(() => {
    randomInterval();
  }, []);

  return (
    <div className="flex place-content-center items-center min-h-screen bg-black">
      <h1 className="text-white text-9xl">{letter}</h1>
      <Modal showModal={showModal} />
      <button onClick={()=> setShowModal(!showModal)} className="text-white"> Toggle Modal </button>
    </div>
  );
}
