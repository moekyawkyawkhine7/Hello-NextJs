import React from 'react'
import { useRouter } from 'next/router'

// [...name] => catch all routes in a particular directory
// [[..name]] => if you don't want to create index file, because you don't want to duplicate the same code. You can use it.
// if will work all routes, but root is catch-all-route
// you can use this flow if you want to create one file for dynamic routings or many routings.

const CatchAllRoute = () => {
  const router= useRouter();
  console.log("router", router.query)
  return (
    <div>CatchAllRoute</div>
  )
}

export default CatchAllRoute