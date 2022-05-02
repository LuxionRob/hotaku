import { useState } from 'react'
// import { Dropdown, Button } from 'antd'
import './style.scss'
import logo from '../../assets/images/logo.png'

const genre = [ 'Action', 'Adult', 'Adventure', 'Anime', 'Chuyển Sinh', 'Comedy', 'Comic', 'Demons', 'Detective', 'Doujinshi', 'Drama', 'Ecchi', 'Fantasy', 'Gender Bender', 'Harem', 'Historical', 'Horror', 'Huyền Huyễn', 'Isekai', 'Josei', 'Mafia', 'Magic', 'Manhua', 'Manhwa', 'Martial Arts', 'Mature', 'Military', 'Mystery', 'One shot', 'Psychological', 'Romance', 'School Life', 'Sci-fi', 'Seinen', 'Shoujo', 'Shoujo Ai', 'Shounen', 'Shounen Ai', 'Slice of life', 'Smut', 'Sports', 'Supernatural', 'Tragedy', 'Truyện Màu', 'Yaoi', 'Yuri' ]

export default function Navbar() {
  const [ isGenreDropdownVisible, setIsGenreDropdownVisible ] = useState(true)

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

  return (
    <div className="navbar-container">
      <div className="navbar">
        <a href="/" className="nav-item">
          <img src={logo} className="logo" alt="logo" />
          Hotaku
        </a>
        <div 
          type="button"
          className="genre-subnavbar nav-item"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={() => {}}
        >
          Genre
        </div>
      </div>
      { isGenreDropdownVisible ? (
        <div className="genre-subnav-dropdown-menu">
          {
            genre.map((element, index) => {
              const link = `/search?${element}`
              return (
                <a
                  key={index + 1}
                  href={link}
                  className="genre-subnav-dropdown-item"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
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
