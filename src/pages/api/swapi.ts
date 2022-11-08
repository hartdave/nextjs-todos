import type { NextApiHandler } from "next";
import type { SwapiApiResponse, SwapiPerson } from "../../types/main";

const swapiEndPoint = "https://swapi.dev/api/people/";

interface SwapiPeopleResponse {
  results: Array<SwapiPerson>;
}

const handler: NextApiHandler<SwapiApiResponse> = async (_, res) => {
  try {
    const result = await fetch(swapiEndPoint);
    const data = (await result.json()) as SwapiPeopleResponse;

    const random = Math.floor(Math.random() * data.results.length) - 1;
    const personData = data.results[random];

    if (!personData?.name) throw new Error("missing person name");

    res.status(200).json(personData);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "server error" });
  }
};

export default handler;
