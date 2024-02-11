import Navbar from '@/components/Navbar'
import Image from 'next/image'
export default function Home() {
return (
<main className="pouet min-h-screen h-fit lg:h-screen overflow-hidden">
  <Navbar />
  <div className="hero">
    <div className="content vertical-align">
      <div className='picture'>
        <Image alt="Picture of me" src="/picture.jpg" width={200} height={200} />
      </div>
      <div className="main-c">
        <div className="flex items-center">
          <h1 className="font-black" style={{
            margin: 0
          }}>Salim Boujaddi</h1>
        </div>
        <p>Student based in France with interest in Mathematics and CS. <br/>
          I’m currently a student at Sorbonne université. You can connect with me on <a target="_blank" href="https://www.linkedin.com/in/salim-boujaddi">Linkedin</a>.<br/><br/>Open to all opportunities.</p>
      </div>
    </div>
  </div>
</main>
  )
  }