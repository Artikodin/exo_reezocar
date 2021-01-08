import Head from "next/head";

const Header = () => (
  <Head>
    <link
      rel="preload"
      href="/fonts/montserrat/Montserrat-Regular.ttf"
      as="font"
      crossOrigin=""
    />
    <link
      rel="preload"
      href="/fonts/montserrat/Montserrat-Medium.ttf"
      as="font"
      crossOrigin=""
    />
    <link
      rel="preload"
      href="/fonts/montserrat/Montserrat-SemiBold.ttf"
      as="font"
      crossOrigin=""
    />
    <link
      rel="preload"
      href="/fonts/montserrat/Montserrat-Bold.ttf"
      as="font"
      crossOrigin=""
    />
    <link
      rel="preload"
      href="/fonts/montserrat/Montserrat-ExtraBold.ttf"
      as="font"
      crossOrigin=""
    />
  </Head>
);

export default Header;
