import Image from 'next/image'
import { ThumbUpIcon } from '@heroicons/react/outline'
import { forwardRef } from 'react'
const Thumbnail = forwardRef(({ item }, ref) => {
  const base_url = 'https://image.tmdb.org/t/p/original'
  return (
    <div
      ref={ref}
      className="group cursor-pointer p-2 transistion-all duration-200 ease-in transform sm:hover:scale-105 hover:z-40"
    >
      <Image
        layout="responsive"
        src={`${base_url}${item.poster_path}`}
        height={1080}
        width={1920}
        objectFit="contain"
      />
      <div className="p-2">
        <p className="truncate max-w-md">{item.overview}</p>
        <h2 className="mt-1 text-2xl text-white transistion-all duration-100 ease-in-out group-hover:font-bold truncate max-w-md">
          {item.title || item.original_name}
        </h2>

        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {item.media_type && `${item.media_type} •`}
          {''}
          {item.release_date && `${item.release_date} •`}
          {''}
          <ThumbUpIcon className="h-8 mx-2" />
          {item.vote_count}
        </p>
      </div>
    </div>
  )
})

export default Thumbnail
