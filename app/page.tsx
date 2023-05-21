import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <p>Hello World</p>
      <Link href={"/profile"}>Profile</Link>
      <Link href={"/profile/Tyson"}>Tyson</Link>
    </main>
  )
}
