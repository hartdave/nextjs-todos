import { NextApiRequest, NextApiResponse } from 'next'

interface Person {
    name: string;
}
interface Swapi {
    results: Array<Person>
}




  