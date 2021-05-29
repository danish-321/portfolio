import React from 'react'

const Image = ({logoUrl, logo}) => {
  return (
    <div>
    <div className="bg-gray-800 hover:bg-gray-700 duration-150 cursor-pointer rounded-xl m-5  w-48   py-6 flex flex-col items-center justify-center">
      <div className="w-32 h-32 mb-5 bg-contain bg-no-repeat bg-center	" style={{backgroundImage: `url(${process.env.PUBLIC_URL + logoUrl})`}}>
      </div>
      <div className="font-thin text-white text-xl">{logo}</div>
    </div>
  </div>
    )
}

export default Image
