import Image from 'next/image'
import Link from 'next/link'

export default function About() {


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
    <h1>/About</h1>
</section>

<div className="main top">
    <h2>Contact information</h2>
    <p>Email : hello11111111111at11111111bjdd.me (without character 1)</p>
    <h3>PGP KEY</h3>
    <div className="code">
    <div id="pgp-key"><pre>-----BEGIN PGP PUBLIC KEY BLOCK-----

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
I6gUYmSCHpfDaQ86KGFAb4ydiJV1eA==
=GUIP

-----END PGP PUBLIC KEY BLOCK-----</pre></div>
    </div>
</div>
</>
)}