import React, { ReactElement } from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import {
  Avatar,
  Box,
  Container,
  Grid,
  List,
  Paper,
  Stack,
  Typography,
} from '@mui/material'

const Page = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Stack spacing={2} mt={3}>
          <Paper>
            <Grid container>
              <Grid
                item
                p={2}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
                xs={8}
                container
              >
                <Grid item xs={4}>
                  <Avatar
                    alt="Profile"
                    sx={{ width: 150, height: 150, m: 2 }}
                    src="https://picsum.photos/200"
                  />
                </Grid>
                <Grid item xs={4} sx={{ my: 'auto' }}>
                  <Typography variant="h5">田中裕貴</Typography>
                  <Typography variant="body1">入部: 2016年</Typography>
                  <Typography variant="body1">ギター/ボーカル</Typography>
                  <Typography variant="body1">部長</Typography>
                </Grid>
                <Grid item xs={4} sx={{ my: 'auto' }}>
                  <Typography variant="body2">
                    2018年度軽音ROCK部長をしてました。
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
          <Paper sx={{ p: 1 }}>
            <Typography>所属バンド</Typography>
            <Stack direction="row" spacing={2} sx={{ overflow: 'scroll' }}>
              <Paper sx={{ width: 200 }}>バンド1</Paper>
              <Paper sx={{ width: 200 }}>バンド1</Paper>
            </Stack>
          </Paper>
          <Paper>投稿</Paper>
          <Paper>お気に入り</Paper>
        </Stack>
        <Grid>
          <p>所属バンド</p>
          <p>役職</p>
          <p>投稿</p>
          <p>お気に入り</p>
          <p>設定</p>
        </Grid>
      </Container>
    </>
  )
}

export default Page
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
