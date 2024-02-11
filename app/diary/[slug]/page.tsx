import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { readdirSync, readFileSync } from 'fs'
import { Marked } from '@ts-stack/markdown'

async function getData(slug:string) {
  const n: number = readdirSync(process.cwd() + '/diary').filter(element => element.split('.')[element.split('.').length-1] === 'md').length

  const list_n = Array.from({length: n}, (_, i) => i + 1)
  if(!list_n.includes(parseInt(slug))) return ['0', 'Not found OwO', '']

  const file:string = readFileSync(process.cwd() + '/diary/' + slug + '.md', 'utf8')
  const title:string = file.split('\n')[0].split('#')[1].trim()

  return [slug, title, file.split('\n').slice(1).join('\n')]
}

export default async function DiaryPage({
  params: { slug },
}: {
  params: { slug: string }
}) {

const data: Array<string> = await getData(slug)

return (
<>
<section className="header pouet">
    <Navbar />
    <h1 className="font-black">/Diary_{data[0]} - {data[1]}</h1>
</section>


<div className="main top readinglist">
<article className="prose lg:prose-md">
<div className="text-container" dangerouslySetInnerHTML={{ __html: Marked.parse(data[2]) }} />
</article>
</div>
</>
)}