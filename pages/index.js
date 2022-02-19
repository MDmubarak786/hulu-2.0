import Head from 'next/head'
import dynamic from 'next/dynamic'
import requests from '../utills/request'

const Header = dynamic(() => import('../components/Header'))
const NavBar = dynamic(() => import('../components/NavBar'))
const Results = dynamic(() => import('../components/Results'))

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
      </Head>

      <Header />
      <NavBar />
      <Results results={results} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`,
  ).then((res) => res.json())

  return {
    props: {
      results: request.results,
    },
  }
}
