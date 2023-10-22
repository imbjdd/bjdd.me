import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
return (
<main className="top min-h-screen h-fit lg:h-screen overflow-hidden">
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
  <div className="hero">
    <div className="content">
      <div className="picture">
        <img src="/picture.jpg" />
      </div>
      <div className="main-c">
        <div className="flex items-center">
          <h1>Hey, I&apos;m Salim</h1>
          <img src="/wave.png"/>
        </div>
        <svg viewBox="0 0 649 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 39.6811C48.4614 27.0813 94.1849 17.1364 142.974 12.328C208.508 5.86927 275.499 0.0713277 341.606 2.6104C402.332 4.94283 460.453 18.869 520.404 25.4647C563.33 30.1874 604.945 35.4464 647 44" stroke="#FCE305" stroke-width="3" stroke-linecap="round"/>
        </svg>
        <p>🇫🇷 French web3 enthusiast with interest in Mathematics and CS. <br/>
          I’m currently a student at Sorbonne université. You can connect with me on <a target="_blank" href="https://www.linkedin.com/in/salim-boujaddi">Linkedin</a> and chat with me on Discord.<br/><br/>Looking for a start-up idea.<br/><br/></p>
      </div>
    </div>
  </div>
</main>
  )
  }