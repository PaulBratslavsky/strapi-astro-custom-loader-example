import { useState } from 'react'


const LikeButton = ({ children }: { children: React.ReactNode }) => {
  const [liked, setLiked] = useState(false)

  const handleLike = () => {
    setLiked(!liked)
  }

  return (
    <button
      onClick={handleLike}
      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors duration-200 ${
        liked ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'
      }`}
    >
      {children}
      <span>{liked ? 'Liked' : 'Like'}</span>
    </button>
  )
}

export default LikeButton