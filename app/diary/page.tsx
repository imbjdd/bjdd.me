import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { readdirSync, readFileSync } from 'fs'
import { parse, stringify } from 'yaml'

async function getData() {
    const n: number = readdirSync(process.cwd() + '/diary').filter(element => element.split('.')[element.split('.').length-1] === 'md').length

    const files = []

    for(let i = 1; i <= n; i++) {
        const file = readFileSync(process.cwd() + '/diary/' + i + '.md', 'utf8')
        const title = file.split('\n')[0].split('#')[1].trim()
        files.push([i.toString(), title, file])
    }
    return files.sort((a,b) => parseInt(a[0]) <= parseInt(b[0]) ? -1 : 1).reverse()
}

export default async function Diary() {

const data = await getData()

return (
<>
<section className="header pouet">
    <Navbar />
    <h1 className="font-black">/Diary</h1>
</section>


<div className="main top readinglist">

<ul className="border-black">
{data.map((article) => (
<Link key={article[0]} href={"/diary/"+article[0]}><li>-{article[0]}- {article[1]}</li></Link>
))}
</ul>
</div>
</>
)}