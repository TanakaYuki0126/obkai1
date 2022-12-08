import React, { ReactElement } from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'

const Page = () => {
  return (
    <>
      <p>タイムライン</p>
      <p>イベント、思い出</p>
      <p>postに飛ぶ</p>
      <p>横に時間軸</p>
      <p>部のイベント</p>
      <p>はやった音楽</p>
    </>
  )
}

export default Page
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
