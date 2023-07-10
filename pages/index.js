import Link from 'next/link'

export default function Home() {

  return (
    <main style={{ padding: '1em', fontFamily: 'Roboto, sans-serif', width: '1000px', lineHeight: 1.5 }}>
      <div>This is main page</div>
      <Link href="/about" style={{ textDecoration: 'underline' }}>Go to about page</Link>
    </main>
  )
}
