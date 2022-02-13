import type { NextPage } from 'next'
import Head from 'next/head'
import QrCodeChallenge from '../app/components/templates/qr_code_challenge/qr_code_challenge'
import { MainStyle } from './style'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>QR code component challenge</title>
        <meta name="description" content="Frontend Mentor" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <MainStyle>
        <QrCodeChallenge
          imageSrc="/image-qr-code.png"
          titleCardText='Improve your front-end skills by building projects'
          subTitleCardText='Scan the QR code to visit Frontend Mentor and take your coding skills to the next level'
        />
      </MainStyle>
    </>
  )
}

export default Home
