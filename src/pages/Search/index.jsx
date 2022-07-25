import { withErrorBoundary } from 'react-error-boundary'
import { useEffect, useState } from 'react'
import { searchManga } from '../../api/axiosClient'
import ErrorFallback from '../../components/error'

const Search = () => {
  const [mangaInfo, setMangaInfo] = useState({})
  // const [Filter, setFilter] = useState(initialState)

  const getMangaByName = async () => {
    const res = await searchManga('naruto')
    console.log(mangaInfo)
    return res.data
  }

  useEffect(() => {
    getMangaByName('naruto')
      .then(setMangaInfo)
  }, [])

  return (
    <div/>
  )
}

export default withErrorBoundary(Search, {
  FallbackComponent: ErrorFallback
})