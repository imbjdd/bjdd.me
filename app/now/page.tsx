import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function Now() {


return (
<>
<section className="pouet">
<Navbar />
<h1 className="font-black">/Now</h1>
</section>

<div className="main top">
<h2 className="font-bold">
    What I&apos;m doing now
</h2>
<p>I live in Paris 75005, France.</p>

<h3 className="font-medium">Work</h3>
<p>I&apos;m working on my start-up and learning React Native.</p>

<h3>Study</h3>
<p>I study mathematics and CS.</p>

<h3>Reading</h3>
<p>I am reading <u>Histoire de France</u> written by Jacques Bainville.</p>


<p>Inspired by <a href="https://nownownow.com/">Nownownow</a>.</p>
</div>
</>
)}