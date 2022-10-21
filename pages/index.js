import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js To Do App</title>
        <meta name="description" content="A to do app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='container'>
        <h1 className="text-3xl font-bold">
          Welcome to the to do app
        </h1>
        <form className='todo-form'>
          <input type="text" className="todo-input" placeholder='Add a to do item' />
          <button type="submit" className='add-button'>Add</button>
        </form>
        <div className='todo-items'>
          <h2 className="text-2xl font-bold">To Do:</h2>
          <ul>
            <li className='item' uid='9999999999999'>
              Test item
              <div className='item-button-group'>
              <button className="edit-button">Edit</button> | <button className='delete-button'>Delete</button>
              </div>
            </li>
          </ul>
        </div>
        </div>
      </main>

      <footer className='footer-container'>
        <div className='people-footer'>
          People API results will go here
        </div>
        <div className='universal-footer'>
          Powered by Next.js
        </div>
      </footer>
    </div>
  )
}
