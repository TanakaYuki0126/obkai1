import React, { ReactElement } from 'react'
import Header from '../components/Header'
import { CssBaseline } from '@mui/material'
import Layout from '../components/Layout'
const Page = () => {
  return (
    <>
      <div>Page</div>
      {/* <CssBaseline />
      <SampleComponent /> */}
    </>
  )
}

export default Page

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
