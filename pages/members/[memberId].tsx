import { useRouter } from 'next/router'
import { ReactElement } from 'react'
import Header from '../../components/Header'
import Layout from '../../components/Layout'

const Page = () => {
  const router = useRouter()
  const { memberId } = router.query
  return (
    <>
      <p>Member: {memberId}</p>
    </>
  )
}

export default Page

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
