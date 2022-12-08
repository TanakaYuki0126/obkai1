import Search from '@mui/icons-material/Search'
import SwapVert from '@mui/icons-material/SwapVert'
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  ListSubheader,
  Typography,
} from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
const bandsData = [
  {
    id: 1,
    name: '檸檬の爆弾',
    origin: 'The SALOVERS',
    uniteYear: '2016',
    img: 'https://picsum.photos/200',
  },
  {
    id: 2,
    name: 'the panda apart',
    origin: 'the band apart',
    uniteYear: '2016',
    img: 'https://picsum.photos/200',
  },
  {
    id: 3,
    name: 'ひよこ地獄',
    origin: 'きのこ帝国',
    uniteYear: '2016',
    img: 'https://picsum.photos/200',
  },
  {
    id: 4,
    name: 'kageokuri',
    origin: 'BURGER NUDS',
    uniteYear: '2016',
    img: 'https://picsum.photos/200',
  },
]
const BandCard = (props) => {
  const { band } = props
  return (
    <>
      <Card>
        <CardActionArea href={`/bands/${band.id}`}>
          <CardMedia
            component="img"
            height="140"
            image={band.img}
            alt={band.name}
          />
          <CardContent sx={{ p: 1 }}>
            <Typography variant="h6">{band.name}</Typography>
            <Typography variant="body1">{band.origin}</Typography>
            <Typography variant="body2">{band.uniteYear}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}
const Page = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} mt={3} mb={2}>
            <Typography variant="h4">歴代バンド</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            my={2}
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Box>
              <Button variant="text">All</Button>
              <Button variant="text">ア</Button>
              <Button variant="text">カ</Button>
              <Button variant="text">サ</Button>
              <Button variant="text">タ</Button>
              <Button variant="text">ナ</Button>
              <Button variant="text">ハ</Button>
              <Button variant="text">マ</Button>
              <Button variant="text">ヤ</Button>
              <Button variant="text">ラ</Button>
              <Button variant="text">ワ</Button>
            </Box>
            <Box>
              <IconButton
                sx={{
                  mx: 1,
                  backgroundColor: '#fff',
                  border: 'solid 0.5px gray',
                }}
              >
                <Search />
              </IconButton>
              <IconButton>
                <SwapVert />
              </IconButton>
            </Box>
          </Grid>
          {bandsData.map((band, index) => (
            <>
              <Grid item xs={3} p={1}>
                <BandCard band={band} key={index} />
              </Grid>
            </>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Page
Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
