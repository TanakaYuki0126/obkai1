import { useRouter } from 'next/router'
import { ReactElement } from 'react'
import Header from '../../components/Header'
import Layout from '../../components/Layout'

const Page = () => {
  const router = useRouter()
  const { bandId } = router.query
  return (
    <>
      <p>Band: {bandId}</p>
      <p>バンド名</p>
      <p>元ネタ</p>
      <p>出演ライブ</p>
      <p>メンバー</p>
      <p>活動年度</p>
      <p>写真</p>
      <p>エピソード</p>
      <p>コメント</p>
    </>
  )
}

export default Page

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
