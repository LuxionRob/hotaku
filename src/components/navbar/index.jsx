import { useState } from 'react'
// import { Dropdown, Button } from 'antd'
import './style.scss'
import '../../assets/logo.scss'
import Search from '../Search'

const genre = [ 'Action', 'Adult', 'Adventure', 'Anime', 'Chuyển Sinh', 'Comedy', 'Comic', 'Demons', 'Detective', 'Doujinshi', 'Drama', 'Ecchi', 'Fantasy', 'Gender Bender', 'Harem', 'Historical', 'Horror', 'Huyền Huyễn', 'Isekai', 'Josei', 'Mafia', 'Magic', 'Manhua', 'Manhwa', 'Martial Arts', 'Mature', 'Military', 'Mystery', 'One shot', 'Psychological', 'Romance', 'School Life', 'Sci-fi', 'Seinen', 'Shoujo', 'Shoujo Ai', 'Shounen', 'Shounen Ai', 'Slice of life', 'Smut', 'Sports', 'Supernatural', 'Tragedy', 'Truyện Màu', 'Yaoi', 'Yuri' ]

const Navbar = () => {
  const [ isGenreDropdownVisible, setIsGenreDropdownVisible ] = useState(false)

  const handleMouseEnter = () => {
    setIsGenreDropdownVisible(true)
  }
  
  const handleMouseLeave = () => {
    setIsGenreDropdownVisible(false)
  }

  const handleMouseEnterDropdown = () => {
    setIsGenreDropdownVisible(true)
    const genreDropdown = document.getElementsByClassName('genre-subnavbar')
    genreDropdown[0].classList.add('active')
  }

  const handleMouseLeaveDropdown = () => {
    setIsGenreDropdownVisible(false)
    const genreDropdown = document.getElementsByClassName('genre-subnavbar')
    genreDropdown[0].classList.remove('active')
  }

  return (
    <div className="flex items-center justify-between h-20 navbar-container pl-52">
      <div className="flex justify-start navbar">
        <a id="logo" href="/" className="items-center justify-center nav-item">
          Hotaku
        </a>
        <div 
          type="button"
          className="relative items-center justify-center genre-subnavbar nav-item"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={() => {}}
        >
          Genre
        </div>
      </div>
      <Search
        className="flex px-2"
      />
      { isGenreDropdownVisible ? (
        <div
          className="absolute right-0 flex flex-wrap justify-center w-full genre-subnav-dropdown-menu top-20 px-52"
          onMouseEnter={handleMouseEnterDropdown}
          onMouseLeave={handleMouseLeaveDropdown}
        >
          {
            genre.map((element, index) => {
              const link = `/search?${element}`
              return (
                <a
                  key={index + 1}
                  href={link}
                  className="justify-center w-48 text-center genre-subnav-dropdown-item"
                >
                  {element}
                </a>
              )
            })
          }
        </div>
      ) : ''
      }
    </div>
  )
}

export default Navbar