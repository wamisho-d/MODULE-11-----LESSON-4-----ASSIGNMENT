import React from "react";
import { useParams } from "react-router-dom";

const characterData = {
  1: { name: "Spider-Man", description: "A web-slinging hero from Queens." },
  2: { name: "Iron Man", description: "A genius billionaire with a suit of armor." },
  3: { name: "Thor", description: "The God of Thunder from Asgard." },
};

const CharacterDetails = () => {
  const { id } = useParams();
  const character = characterData[id];

  if (!character) {
    return <p>Character not found.</p>;
  }

  return (
    <div>
      <h2>{character.name}</h2>
      <p>{character.description}</p>
    </div>
  );
};

export default CharacterDetails;
