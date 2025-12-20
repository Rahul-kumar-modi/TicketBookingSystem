import React, { useState } from 'react'
import { dummyTrailers } from '../assets/assets'
import BlueCircle from './BlueCircle'
import Plyr from "plyr-react"
import "plyr-react/plyr.css" 


const TrailersSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0])

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">
      <p className="text-gray-300 font-medium text-lg max-w-[960px] mx-auto">Trailers</p>

     <div className="relative mt-6 flex justify-center">
  {/* Wrapper controls size and aspect ratio */}
  <div className="w-[480px] sm:w-[640px] md:w-[800px] lg:w-[960px] aspect-video rounded-xl overflow-hidden shadow-lg">
    <Plyr
      source={{
        type: "video",
        sources: [{ src: currentTrailer.videoUrl, provider: "youtube" }],
      }}
    />
  </div>
</div>

      <div className="grid grid-cols-4 gap-4 mt-8 max-w-3xl mx-auto">
        {dummyTrailers.map((trailer) => (
          <div
            key={trailer.image}
            className="relative cursor-pointer hover:-translate-y-1 transition duration-300"
            onClick={() => setCurrentTrailer(trailer)}
          >
            <img
              src={trailer.image}
              alt="trailer"
              className="rounded-lg w-full h-full object-cover brightness-75"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrailersSection