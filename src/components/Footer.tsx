import { useState, useEffect } from "react";
import type { SwapiApiResponse } from "../types/main";

export interface FooterProps {
  renderDate: string;
}

async function getPersonName() {
  try {
    const res = await fetch("/api/swapi");
    const data = (await res.json()) as SwapiApiResponse;
    return data.name;
  } catch (e) {
    console.error(e);
  }
}

let footerRendered = false;

export function Footer({ renderDate }: FooterProps) {
  const [name, setName] = useState<string>();

  useEffect(() => {
    if (!footerRendered) {
      footerRendered = true;
      getPersonName().then((name) => name && setName(name));
    }
  }, []);

  return (
    <footer className='flex flex-col items-center'>
      <div className='text-lg m-1'>Person: {name}</div>
      <div className='text-sm m-1'>Rendered at: {renderDate}</div>
      <div className='text-xs m-1'>
        Powered by{" "}
        <a
          href='https://nextjs.org/'
          className='text-blue-600 underline hover:text-red-500'
        >
          Next.js
        </a>
      </div>
    </footer>
  );
}
