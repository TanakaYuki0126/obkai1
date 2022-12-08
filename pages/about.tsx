import React, { ReactElement } from 'react'
import Layout from '../components/Layout'

const Page = () => {
  return <div>Page</div>
}

export default Page
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
