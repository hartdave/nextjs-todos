
export function Footer ({renderDate, person}: PageProps) {


    return (
    <>
    <footer className='footer-container'>
        <div className='people-footer'>
            Person:<br /> 
            {person}
        </div>
        <div className="date-footer">
            Rendered at: {renderDate}
        </div>
        <div className='universal-footer'>
            Powered by <a href="https://nextjs.org/">Next.js</a>
        </div>
    </footer>
    </>
  );
}
