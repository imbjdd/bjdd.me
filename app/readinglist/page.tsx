import Image from 'next/image'
import Link from 'next/link'
import {readFileSync} from 'fs'
import { parse, stringify } from 'yaml'

interface Map {
  [key: string]: any
}

interface Book {
  title: string,
  author: string,
  status: string,
  yearRead: number,
  id: string
}

async function getData() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')

  const file = readFileSync(process.cwd() + '/data.yml', 'utf8')
  const repo: any = parse(file)

  const to_read = []
  const years: Array<number> = []

  const read: Map = {}

  // have to read books
  for (const key of Object.keys(repo)) {
    if(repo[key].status === 'to read') {
      const new_value = {
        id: key,
        ...repo[key]
      }
      to_read.push(new_value)
    }
  }

  // have read years
  for (const key of Object.keys(repo)) {
    if(!years.includes(repo[key].yearRead)) years.push(repo[key].yearRead)
  }

  for (const i in years) {
    read[years[i].toString()] = []
  }

  for (const key of Object.keys(repo)) {
    if(repo[key].status === 'read') {
      const new_value = {
        id: key,
        ...repo[key]
      }
      read[repo[key].yearRead].push(new_value)
    }
  }

  return {
    read: read,
    years: years.sort().reverse(),
    to_read: to_read
  }
}

export default async function Readinglist() {

const oui = await getData()
const data: Map = oui.read 
const years = oui.years
const to_read = oui.to_read

return (
<>
<section className="header top">
  <nav>
      <Link href="/">
      <div className="logo">
          <p>Salim</p>
      </div>
      </Link>
      <div className="links">
          <p><Link href="/about">About</Link></p>
          <p><Link href="/now">Now</Link></p>
          <p><Link href="/readinglist">Reading List</Link></p>
      </div>
  </nav>
    <h1>/Reading_List</h1>
</section>


<div className="main top readinglist">
<h2>Books I want to read</h2>
<ul className="border-black">
{to_read.map((book: Book) => (
<li key={book.id}><i>{book.title}</i>, {book.author}</li>
))}
</ul>

<h2>Books I&apos;ve read</h2>

{years.map((year:number) => (
<>
<h3>{year}</h3>
<ul className="border-black">
{data[year.toString()].map((book: Book) => (
<li key={book.id}><i>{book.title}</i>, {book.author}</li>
))}
</ul>
</>
))}
</div>
</>
)}