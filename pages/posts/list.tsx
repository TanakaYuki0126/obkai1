import React, { ReactElement } from 'react'
import Layout from '../../components/Layout'

const Page = () => {
  return (
    <>
      <p>タイムライン</p>
      <p>新規投稿が上にくる</p>
      <p>投稿者</p>
      <p>登校日</p>
      <p>お気に入り</p>
      <p>コメント作成</p>
      <p>ツイート作成</p>
      <p>絞り込み</p>
      <p>カテゴリ(member, band, post, history)</p>
      <p>タグ</p>
    </>
  )
}

export default Page
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
