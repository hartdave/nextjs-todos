import * as React from 'react';
import { useEffect, useState } from 'react';
import { PageProps } from '../pages/[[...slug]]';


    

export function Footer ({renderDate}: PageProps) {


    return (
    <>
    <footer className='footer-container'>
        <div className='people-footer'>
            Person:
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
