import Image from 'next/image'
import Link from 'next/link'

export default function Now() {


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
    <h1>/Now</h1>
</section>

<div className="main top">
<h2>
    What I&apos;m doing now
</h2>
<p>I live in Paris 75005, France.</p>

<h3>Work</h3>
<p>I&apos;m working on my start-up and learning React Native.</p>

<h3>Study</h3>
<p>I study mathematics and CS.</p>

<h3>Reading</h3>
<p>I am reading <u>Histoire de France</u> written by Jacques Bainville.</p>


<p>Inspired by <a href="https://nownownow.com/">Nownownow</a>.</p>
</div>
</>
)}