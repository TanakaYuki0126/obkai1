import { useRouter } from 'next/router'
import { ReactElement } from 'react'
import Layout from '../../components/Layout'

const Page = () => {
  const router = useRouter()
  const { postId } = router.query
  return (
    <>
      <p>Post: {postId}</p>
    </>
  )
}

export default Page

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
