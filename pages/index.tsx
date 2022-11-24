import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <header>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/users">User</Link></li>
            {/* <li><a href="/users">User</a></li> */}
          </ul>
      </header>
      <h1>Welcome</h1>
    </>
  )
}
