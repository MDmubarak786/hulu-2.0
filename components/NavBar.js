import requests from '../utills/request'
import { useRouter } from 'next/router'

function NavBar() {
  const router = useRouter()
  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-20 text-xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title }]) => (
          <h2
            key={key}
            role="button"
            onClick={() => router.push(`/?genre=${key}`)}
            className="last:pr-24 cursor-pointer transition duration-100 transform hover:text-white hover:scale-125 active:text-red-500"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
    </nav>
  )
}

export default NavBar
