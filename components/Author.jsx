import React from 'react'

const Author = ({ author }) => {
  return (
    <div className="mt-10 mb-8 p-10 relative rounded-lg bg-white bg-opacity-50">
        <div className="absolute left-8 right-0 top-15">
            <img 
                alt={author.name}
                height="100px"
                width="100px"
                className="align-middle rounded-full"
                src={author.photo.url}
            />
        </div>
        <h3 className="text-gray-600 my-4 ml-32 text-xl font-bold">{author.name}</h3>
        <p className="text-gray-700 ml-32 text-lg">{author.bio}</p>
    </div>
  )
}

export default Author