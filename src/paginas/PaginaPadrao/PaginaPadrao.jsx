import React from 'react'
import Banner from '../Banner/Banner'
import { Outlet } from 'react-router-dom'

const PaginaPadrao = () => {
  return (
    <main>
        <Banner></Banner>
        <Outlet></Outlet>
    </main>
  )
}

export default PaginaPadrao