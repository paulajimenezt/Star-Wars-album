import * as React from "react";
import AlbumCard from "../album-card/album-card";
import { useQuery } from "@tanstack/react-query";

function getRandomObjects(array, count, section, specialCount) {
  const randomObjects = [];
  if (!array) return console.log("No data");
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * array.length);
    randomObjects.push({
      ...array[randomIndex],
      section: section,
      type: randomIndex <= specialCount[section] ? "Especial" : "Common",
    });
  }
  return randomObjects;
}

export default function FetchPackCards(props) {
  const variation = props.variation;

  const specialCount = { Film: 6, Character: 20, Starship: 10 };
  let packCards = [];
  let cardCount;

  switch (variation) {
    case "Light":
      cardCount = { Film: 1, Character: 3, Starship: 1 };
      break;
    case "Dark":
      cardCount = { Film: 0, Character: 3, Starship: 2 };
      break;
    default:
      cardCount = { Film: 0, Character: 3, Starship: 2 };
  }

  const {
    status: filmStatus,
    data: filmData,
    error: filmError,
  } = useQuery({
    queryKey: ["FilmPack"],
    queryFn: () =>
      fetch("https://swapi.info/api/films").then((res) => res.json()),
  });

  const {
    status: characterStatus,
    data: characterData,
    error: characterError,
  } = useQuery({
    queryKey: ["CharacterPack"],
    queryFn: () =>
      fetch("https://swapi.info/api/people").then((res) => res.json()),
  });

  const {
    status: starshipStatus,
    data: starshipData,
    error: starshipError,
  } = useQuery({
    queryKey: ["StarshipPack"],
    queryFn: () =>
      fetch("https://swapi.info/api/starships").then((res) => res.json()),
  });

  if (
    filmStatus === "pending" ||
    characterStatus === "pending" ||
    starshipStatus === "pending"
  ) {
    return <p>Loading...</p>;
  }

  if (filmError || characterError || starshipError) {
    return (
      <p>
        {"Error loading characters:" +
          filmError +
          characterError +
          starshipError}
      </p>
    );
  }

  if (filmData && characterData && starshipData) {
    packCards = packCards.concat(
      getRandomObjects(filmData, cardCount["Film"], "Film", specialCount)
    );
    packCards = packCards.concat(
      getRandomObjects(
        characterData,
        cardCount["Character"],
        "Character",
        specialCount
      )
    );
    packCards = packCards.concat(
      getRandomObjects(
        starshipData,
        cardCount["Starship"],
        "Starship",
        specialCount
      )
    );
  }

  return packCards.map((object, i) => {
    let title;
    const id = object.url.split("/")[5];
    if (object.section === "Character" || object.section === "Starship") {
      title = object.name;
    }
    if (object.section === "Film") {
      title = object.title;
    }
    return (
      <AlbumCard
        key={id}
        id={id}
        section={object.section}
        title={title}
        type={object.type}
        fromPack={true}
      />
    );
  });
}
