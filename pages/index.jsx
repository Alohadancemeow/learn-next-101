import Link from 'next/link'
import Layout from '@/components/Layout'

export default function Home() {
  return (
    <Layout>
      <h1>Home Page</h1>
      <Link href="/about">Go to about</Link>
    </Layout>
  )
}
