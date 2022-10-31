import Head from 'next/head'
import { Footer } from '../components/Footer'
import { ToDoList } from '../components/todo-list/ToDoList'

const peopleApi = '/api/swapi';

export async function getServerSideProps() {
  const res = await fetch("https://nextjs-todos-dhart.netlify.app/api/swapi");
  const data = await res.json();
  const person = data.name;
  
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
    <>
      <Head>
        <title>Next.js To Do App</title>
        <meta name="description" content="A to do app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <ToDoList />
      </main>
 <Footer renderDate={renderDate} person={person} />
    </>
  )
}
