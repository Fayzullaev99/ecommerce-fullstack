import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import Header from '@/components/header'
import Footer from '@/components/footer'
import axios from 'axios'
import { useSession, signIn, signOut } from "next-auth/react"
export default function Home({country}) {
  const { data: session } = useSession()
  return (
    <>
      <div>
        <Header country={country} />
        <Footer country={country} />
      </div>
    </>
  )
}
 export async function getServerSideProps() {
  // let data = await axios.get(`https://api.ipregistry.co/?key=v5ipy1cj7j03tid2`)
  //   .then((res)=>{
  //     return res.data.location.country
  //   })
  //   .catch((error)=>{
  //     console.log(error);
  //   })
    return {
      props:{
        // country:{name:data.name,flag:data.flag.emojitwo}
        country:{name:"Uzbekistan",flag:"https://media.istockphoto.com/id/1401168860/vector/round-icon-with-flag-of-uzbekistan-glass-light-ball-sticker-sphere-uzbek-national-symbol.jpg?s=612x612&w=0&k=20&c=FSuTzkfA4wNyfwrNvd9XoBkHg29ObuqYcJT74axAWto="}
      }
    }
 }