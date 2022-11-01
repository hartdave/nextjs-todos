export function Footer ({renderDate, person}: PageProps) {
    return (
    <>
    <footer className='flex flex-col items-center'>
        <div className='text-lg m-1'>
            Person: {person}
        </div>
        <div className="text-sm m-1">
            Rendered at: {renderDate}
        </div>
        <div className='text-xs m-1'>
            Powered by <a href="https://nextjs.org/" className="text-blue-600 underline hover:text-red-500">Next.js</a>
        </div>
    </footer>
    </>
  );
}
