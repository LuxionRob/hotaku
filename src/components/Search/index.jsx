import { withErrorBoundary } from 'react-error-boundary';
import { Input } from 'antd'
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { useNavigate, createSearchParams } from 'react-router-dom';
import { searchManga } from '../../api/axiosClient'
import './style.scss'
import ErrorFallback from '../error';

const updateMangaDelay = 200

const Search = ({ className }) => {
  const [mangaName, setMangaName] = useState('')
  const [mangaInfo, setMangaInfo] = useState({})

  const navigate = useNavigate()
  let typingTimer

  const onSearch = (e) => {
    navigate({
      pathname: '/search',
      search: `?${createSearchParams({q: e})}`,
    })
  }

  const onBlur = (e) => {
    e.target.parentNode.parentNode.classList.remove('focused')
  }
  const onFocus = (e) => {
    e.target.parentNode.parentNode.classList.add('focused')
  }
  const onChange = (e) => {
    clearTimeout(typingTimer)
    typingTimer = setTimeout(() => {
      setMangaName(e.target.value)
    }, updateMangaDelay)
  }

  const getMangaByName = async () => {
    try {
      const res = await searchManga(mangaName)
      console.log(res.data, mangaName)
      setMangaInfo(res.data)
    } catch (error) {
      console.warn(error);
    }
  } 
  
  useEffect(() => {
    if (mangaName.trim() !== '') {
      getMangaByName(mangaName)
    }
  }, [mangaName]);
  

  return (
    <div className='relative flex w-full'>
      <div className='flex justify-end w-full'>
        <Input.Search
          enterButton
          autoFocus
          placeholder='Input name....'
          className={`rounded py-2 mr-6 ${className}`}
          onSearch={onSearch}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
        />
      </div>
      { mangaInfo.data && mangaName ? (
        <div className='absolute right-0 z-30 w-2/5 shadow-xl top-12 bg-slate-50'>
          {mangaInfo.data.slice(0, 4).map(manga => (
            <a href={`/manga/${manga.mal_id}`} key={manga.mal_id} className='flex py-4 pl-2 border-2 border-slate-200'>
              <img
                src={manga.images.jpg.large_image_url}
                alt={`${manga.tilte} thumbnail`}
                className='w-[6.4rem]'
              />
              <div className='flex flex-col ml-4'>
                <span className='mt-2 text-xl font-bold'>{manga.title}</span>
                <span className='text-slate-500'>Chapters: {manga.chapters}</span>
                <span className='text-slate-500'>Rank: {manga.rank}</span>
                <span className='text-slate-500'>Rate: {manga.score} / {manga.scored_by}</span>
                <span className='text-slate-500'>Type: {manga.type}</span>
              </div>
            </a>
          ))}
          <a href={`/search?${mangaName}`} className='block w-full py-4 font-bold text-center text-blue-500 underline text-md '>Go to filter page</a>
        </div>
      ) : (
        ''
        )
      }
    </div>
  )
} 

Search.defaultProps = {
  className: "",
}

Search.propTypes = {
  className: PropTypes.string,
}

export default withErrorBoundary(Search, {
  FallbackComponent: ErrorFallback
})
