import Head from 'next/head'
import { Footer } from '../components/Footer'
import { ToDoList } from '../components/ToDoList'

const swapiEndPoint = 'https://swapi.dev/api/people/';

export async function getServerSideProps() {
  const res = await fetch(swapiEndPoint);
  const data = await res.json();
  const random = Math.floor(Math.random()*data.results.length)-1;
  const personData = data.results[random];
  const person = personData.name.toString();
  return {
    props: {
      renderDate: new Date().toTimeString(),
      person,
    }, 
  }
}

export interface PageProps {
  renderDate: string,
  person: string,
}

export default function Home({ renderDate, person }: PageProps) {
  return (
    <div>
      <Head>
        <title>Next.js To Do App</title>
        <meta name="description" content="A to do app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ToDoList />
      </main>

 <Footer renderDate={renderDate} person={person} />
    </div>
  )
}
