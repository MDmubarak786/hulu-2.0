import Thumbnail from './Thumbnail'
import FlipMove from 'react-flip-move'
function Results({ results }) {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-row flex-wrap justify-center">
      {results.map((item) => (
        <Thumbnail item={item} key={item.id} />
      ))}
    </FlipMove>
  )
}

export default Results
