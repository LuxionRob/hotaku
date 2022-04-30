import './style.scss'
import logo from '../../assets/images/logo.png'

export default function Navbar() {
  // const [ avt, setAvt ] = useState('')

  // useEffect({
  //   // Fetch avt
  //   // Fetch user name
  //   // Fetch nofication
  // }, [])

  return (
    <div>
      <div className="navbar">
        <a href="/" className="nav-item">
          <img src={logo} className="logo" alt="logo" />
          Hotaku
        </a>
        <div type="button" className="genre-subnavbar nav-item">
          Genre
          <div className="genre-subnavbar-dropdown">
            <a href="/search?" className="genre-subnavbar-item">
              Shounen
            </a>
            <a href="search?" className="genre-subnavbar-item">
              Shoujo
            </a>
            <a href="search?" className="genre-subnavbar-item">
              Isekai
            </a>
            <a href="search?" className="genre-subnavbar-item">
              Fantasy
            </a>
            <a href="search?" className="genre-subnavbar-item">
              Horror
            </a>
            <a href="search?" className="genre-subnavbar-item">
              Supernatural
            </a>
            <a href="search?" className="genre-subnavbar-item">
              Tragedy
            </a>
            <a href="search?" className="genre-subnavbar-item">
              Drama
            </a>
            <a href="search?" className="genre-subnavbar-item">
              Fiction
            </a>
            <a href="search?" className="genre-subnavbar-item">
              Romance
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
