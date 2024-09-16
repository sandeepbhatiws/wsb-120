import React from 'react'
import { Link } from 'react-router-dom'

export default function Blog({blog}) {
  return (
    <>
        <div class="relative flex flex-col rounded-3xl bg-white p-2 shadow-md shadow-black/5 ring-1 ring-black/5">
            <img alt="A crossed out European emblem" src="https://cdn.sanity.io/images/ssqh4ksj/production/c734dd394de943820a25b4b96eace0855ab44749-2016x1344.png?w=1170&amp;h=780&amp;auto=format"
            class="aspect-[3/2] w-full rounded-2xl object-cover"/>
            <div class="flex flex-1 flex-col p-8">
                <div class="text-sm/5 text-gray-700">
                    Thursday, August 29, 2024
                </div>
                <div class="mt-2 text-base/7 font-medium">
                    <Link data-headlessui-state="" to={`/blog-details/${blog.id}/${blog.title}`}>
                        <span class="absolute inset-0">
                        </span>
                        {blog.title}
                    </Link>
                </div>
                <div class="mt-2 flex-1 text-sm/6 text-gray-500">
                    {/* {blog.body} */}
                </div>
                <div class="mt-6 flex items-center gap-3">
                    <img alt="" src="https://cdn.sanity.io/images/ssqh4ksj/production/cd1ee59e9e4c2ff30c303de6c7d1066c057419d5-7952x5304.jpg?rect=2370,0,5304,5304&amp;w=64&amp;h=64&amp;auto=format"
                    class="aspect-square size-6 rounded-full object-cover"/>
                    <div class="text-sm/5 text-gray-700">
                        Marcus Eldridge
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
