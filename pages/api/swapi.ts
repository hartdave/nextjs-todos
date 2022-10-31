
export default async function handler(req, res) {
    const swapiEndPoint = 'https://swapi.dev/api/people/';
    const result = await fetch(swapiEndPoint);
    const data = await result.json();
    const random =  Math.floor(Math.random()*data.results.length)-1;
    const personData = data.results[random];
    try {
    res.status(200).json(personData);
    } catch (e) {
        console.error(e)
    }
}

