import React from 'react'

function HeaderItem({ title, Icon }) {
  return (
    // group is called grouping the div elements together
    <div className="flex flex-col items-center w-12 group cursor-pointer sm:w-20 hover:text-white">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="opacity-0 tracking-widest group-hover:opacity-100">
        {title}
      </p>
    </div>
  )
}
export default HeaderItem
