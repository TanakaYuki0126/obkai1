import React from 'react'

import Head from 'next/head'
import Header from './Header'
const Layout = ({ children, ...props }) => {
  return (
    <>
      <Head>
        <title>大阪大学軽音楽部ROCK OBサイト</title>
      </Head>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
