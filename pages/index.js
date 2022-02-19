import Head from 'next/head'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Results from '../components/Results'
import requests from '../utills/request'

export default function Home({ results }) {
  console.log('results', results)
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
