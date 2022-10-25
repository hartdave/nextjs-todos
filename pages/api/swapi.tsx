import type { NextApiHandler } from "next"

interface Person {
    name: string;
}
interface Swapi {
    results: Array<Person>
}

const handler: NextApiHandler = (req, res) => {
    const response = fetch('https://swapi.dev/api/people/');
    const data: Swapi = response.json();
    const random = Math.floor(Math.random()*(json.results.length - 1));
    const person: Person = json.results[random];
    res.status(200).json(person);
}

export default handler
  