import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '../components/Footer'
import { ToDoList } from '../components/ToDoList'

export async function getServerSideProps() {
  return {
    props: {
      renderDate: new Date().toTimeString(),
    }, 
  }
}

export interface PageProps {
  renderDate: string;
}

export default function Home({ renderDate }: PageProps) {
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

 <Footer renderDate={renderDate} />
    </div>
  )
}
