import styles from '../styles/page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <p>Hello World</p>
      <Link href={"/profile"}>Only Profile Page</Link>
      <Link href={"/profile/Tyson"}>Tyson</Link>
      <Link href={"/coins"}>Coins</Link>
    </main>
  )
}
