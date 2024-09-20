import React from 'react'

export default function Breadcum({title}) {
  return (
    <div className="p-5 bg-gray-700 lg:flex lg:items-center lg:justify-between">
      <div className="flex-1 min-w-0">
        <h2 className="font-bold leading-7 text-white sm:truncate sm:text-2xl sm:tracking-tight">
          {title}
        </h2>
      </div>
    </div>
  )
}
