import Head from 'next/head'

export const Header = () => {
const site_title = "Anthony Chen - WIP"

  return(
    <Head>
      <title>{site_title}</title>
      <link rel="icon" href="/sweat_smile.ico"/>
      <meta name="description" content="Generated by create next app" />
    </Head>
  );
};