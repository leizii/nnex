
import Head from 'next/head'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import SearchBar from '../components/SearchBar'
import ContentList from '../components/ContentList'
import Modal from '../components/Modal'

export default function Home() {
  return (
    <div>
      <Head>
        <title>首页 - 探索GPTs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <HeroSection />
      <SearchBar />
      <ContentList />
      <Modal />
    </div>
  )
}
