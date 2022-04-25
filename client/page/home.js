import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getImgUrl } from '../store/index'

export default function Home(props) {
  // const [imageUrl, setImageUrl] = useState()
  // useEffect(() => {
  //   const fn = async () => {
  //     const { message } = await fetch('https://dog.ceo/api/breeds/image/random', { mode: 'cors' }).then(res => res.json())
  //     setImageUrl(message)
  //   }
  //   fn()
  // }, [])


  return (
    <div
      className='home'
      onClick={() => {
        console.log('this is log')
      }}>
      this is React App render in server
      {/* <img src={imageUrl} alt="scc"></img> */}
      <Link to='/login'>go</Link>
    </div>
  )
}

export async function getInitialProps(store){
  store.dispatch(getImgUrl)
  // const { message } = await fetch('https://dog.ceo/api/breeds/image/random', { mode: 'cors' }).then(res => res.json())
  // return {
  //   props: message
  // }
}