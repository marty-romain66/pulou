import React from 'react'

export default function Index() {
  return (
    <><div>
      <h1 className='mt-3 heading2  title  mx-auto text-6xl lg:text-9xl sm:mt-4'>Les Aventures de Pulou</h1>
    </div>
      <video className="h-full w-full rounded-lg" controls>
      <source src="https://res.cloudinary.com/dcl00yipc/video/upload/v1689975757/pulou2_xxdroq.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video></>
  )
}
