import * as React from "react";
import AlbumCard from "../../components/album-card/album-card";
import { useQuery } from "@tanstack/react-query";

export default function FetchCards(props) {
  const section = props.section;
  let url;
  let specialCount;
  switch (section) {
    case "Character":
      url = "https://swapi.info/api/people";
      specialCount = 20;
      break;
    case "Film":
      url = "https://swapi.info/api/films";
      specialCount = 6;
      break;
    case "Starship":
      url = "https://swapi.info/api/starships";
      specialCount = 10;
      break;
    default:
      url = "https://swapi.info/api/people";
  }
  const { status, data, error } = useQuery({
    queryKey: [section],
    queryFn: () => fetch(url).then((res) => res.json()),
  });
  if (status === "pending") {
    return <p>Loading...</p>;
  }

  if (status === "error") {
    return <p>{"Error loading characters"}</p>;
  }

  if (section === "Film") {
    data.sort((a, b) => a.episode_id - b.episode_id);
  }
  return data.map((object, i) => {
    let id;
    let title;
    if (section === "Character" || section === "Starship") {
      id = object.url.split("/")[5];
      title = object.name;
    }
    if (section === "Film") {
      id = object.url.split("/")[5];
      title = object.title;
    }
    return (
      <AlbumCard
        key={id}
        id={id}
        section={section}
        title={title}
        type={i <= specialCount ? "Especial" : "Common"}
      />
    );
  });
}
