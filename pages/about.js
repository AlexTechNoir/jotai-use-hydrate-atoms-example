import Link from 'next/link'

export default function About() {
  return (
    <main style={{ padding: '1em', fontFamily: 'Roboto, sans-serif', width: '1000px', lineHeight: 1.5 }}>
      <div>This is about page</div>
      <Link href="/" style={{ textDecoration: 'underline' }}>Go to main page</Link>
    </main>
  )
}