import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getMangaFullById } from '../../api/axiosClient'

const Manga = () => {
  const [mangaInfo, setMangaInfo] = useState({})
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams()


  const fetchManga = async () => {
    try {
      const res = await getMangaFullById(params.id)
      console.log(res.data.data)
      return res.data.data
    } catch (error) {
      return Promise.reject(new Error('Error manga info'))
    }
  }

  useEffect(() => {
    setIsLoading(true)
    fetchManga()
      .then(setMangaInfo)
    setIsLoading(false)
  }, []);

  return (
    <div className='relative flex justify-center w-4/5 h-full manga-container bg-slate-500'>
      {isLoading ? 'Loading spinner' : (
        <div className="main-content">
          {/* <img src={mangaInfo?.images.jpg.large_image_url} alt={`${mangaInfo.title}`} /> */}
          <div className='flex'>
            <span>{mangaInfo.title}</span>
            <span>{`[Rank: ${mangaInfo.rank}] `}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Manga