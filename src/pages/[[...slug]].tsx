import { GetServerSideProps } from "next";
import Head from "next/head";
import { Footer, FooterProps } from "../components/Footer";
import { ToDoList } from "../components/todo-list/ToDoList";

export interface PageProps {
  footer: FooterProps;
}

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  return {
    props: {
      footer: {
        renderDate: new Date().toTimeString(),
      },
    },
  };
};

export default function Home({ footer }: PageProps) {
  return (
    <>
      <Head>
        <title>Next.js To Do App</title>
        <meta
          name='description'
          content='A to do app'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>

      <main className='flex flex-col justify-between items-center h-screen'>
        <ToDoList />
        <Footer {...footer} />
      </main>
    </>
  );
}
