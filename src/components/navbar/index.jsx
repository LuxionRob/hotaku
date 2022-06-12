import { useState } from 'react'
// import { Dropdown, Button } from 'antd'
import './style.scss'
import '../../assets/logo.scss'
import Input from '../input'

const genre = [ 'Action', 'Adult', 'Adventure', 'Anime', 'Chuyển Sinh', 'Comedy', 'Comic', 'Demons', 'Detective', 'Doujinshi', 'Drama', 'Ecchi', 'Fantasy', 'Gender Bender', 'Harem', 'Historical', 'Horror', 'Huyền Huyễn', 'Isekai', 'Josei', 'Mafia', 'Magic', 'Manhua', 'Manhwa', 'Martial Arts', 'Mature', 'Military', 'Mystery', 'One shot', 'Psychological', 'Romance', 'School Life', 'Sci-fi', 'Seinen', 'Shoujo', 'Shoujo Ai', 'Shounen', 'Shounen Ai', 'Slice of life', 'Smut', 'Sports', 'Supernatural', 'Tragedy', 'Truyện Màu', 'Yaoi', 'Yuri' ]

const Navbar = () => {
  const [ isGenreDropdownVisible, setIsGenreDropdownVisible ] = useState(false)

  // useEffect({
  //   // Fetch avt
  //   // Fetch user name
  //   // Fetch nofication
  // }, [])
  
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
    <div className="navbar-container flex justify-between items-center h-20 pl-52 relative">
      <div className="navbar flex justify-start">
        <a id="logo" href="/" className="nav-item justify-center items-center">
          Hotaku
        </a>
        <div 
          type="button"
          className="genre-subnavbar nav-item justify-center items-center relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={() => {}}
        >
          Genre
        </div>
      </div>
      <Input className="flex"/>
      { isGenreDropdownVisible ? (
        <div
          className="genre-subnav-dropdown-menu flex absolute w-full flex-wrap top-20 right-0 justify-center px-52"
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
                  className="genre-subnav-dropdown-item w-48 justify-center text-center"
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