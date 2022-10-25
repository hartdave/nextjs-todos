import { NextApiRequest, NextApiResponse } from 'next'

interface Person {
    name: string;
}
interface Swapi {
    results: Array<Person>
}

export default function (req: NextApiRequest, res: NextApiResponse) {
    const response = fetch('https://swapi.dev/api/people/');
    const data: Swapi = res.json();
    const random = Math.floor(Math.random()*(json.results.length - 1));
    const person: Person = json.results[random];
    res.status(200).json(person);
}


  