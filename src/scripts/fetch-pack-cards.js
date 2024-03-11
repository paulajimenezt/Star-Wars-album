const uuid = require("uuid");

export default async function fetchPackCards(variation) {
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

  const fetchData = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  };

  try {
    const [filmData, characterData, starshipData] = await Promise.all([
      fetchData("https://swapi.info/api/films"),
      fetchData("https://swapi.info/api/people"),
      fetchData("https://swapi.info/api/starships"),
    ]);

    const getRandomObjects = (array, count, section, specialCount) => {
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
    };

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

    return packCards.map((object) => {
      let title;
      const id = object.url.split("/")[5];
      if (object.section === "Character" || object.section === "Starship") {
        title = object.name;
      }
      if (object.section === "Film") {
        title = object.title;
      }
      return {
        key: id + uuid.v4(),
        id: id,
        section: object.section,
        title: title,
        type: object.type,
        fromPack: true,
      };
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
