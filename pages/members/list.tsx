import {
  Avatar,
  Button,
  Container,
  Divider,
  Grid,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Typography,
} from '@mui/material'
import React, { ReactElement } from 'react'
import Layout from '../../components/Layout'

const MemberView = () => {
  return (
    <Grid item xs={2} my={2} sx={{ display: 'flex', flexFlow: 'column' }}>
      <Avatar
        alt="name"
        src="https://picsum.photos/200"
        sx={{ width: 100, height: 100, m: 'auto' }}
      />
      <Button sx={{ m: 'auto' }}>田中裕貴</Button>
    </Grid>
  )
}

const Page = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} sx={{ m: 3 }}>
            <Typography variant="h5">メンバー一覧</Typography>
          </Grid>
          <Grid item xs={12}>
            <p>検索、絞り込み</p>
          </Grid>
          <Grid item xs={3}>
            <Paper sx={{ background: 'none', boxShadow: 'none' }}>
              <MenuList dense>
                <Typography>入部年度</Typography>
                <MenuItem>
                  <ListItemText inset>2016</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemText inset>2017</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemText inset>2018</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemText inset>2019</ListItemText>
                </MenuItem>
              </MenuList>
            </Paper>
          </Grid>
          <Grid container item xs={9}>
            <MemberView />
            <MemberView />
            <MemberView />
            <MemberView />
            <MemberView />
            <MemberView />
            <MemberView />
            <MemberView />
            <MemberView />
            <MemberView />
            <MemberView />
          </Grid>
          <Grid item xs={12}>
            <p>サイドバーで入学年度を絞る</p>
            <p></p>
            <p>名前</p>
            <p>入学年度</p>
            <p>パート</p>
            <p>自己紹介</p>
            <p>絞り込み</p>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Page
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
