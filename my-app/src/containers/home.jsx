import React from 'react'
import { Header } from '../components/header'
import { Inspiration } from '../components/inspiration'
import { Reviews } from '../components/reviews'

export const Home = ({children}) => {
  return (
    <div>
      <Header/>
      <Inspiration/>
      <Reviews/>
    </div>
  )
}
