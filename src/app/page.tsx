import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/components/Header/page'
import SideBar from '@/components/SideBar/page'

export default function Home() {
  return (
    <div>
      <Header />
      <SideBar />
    </div>
  )
}
