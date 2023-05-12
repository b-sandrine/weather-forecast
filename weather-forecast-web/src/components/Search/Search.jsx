import './Search.css'
import { MdSearch } from 'react-icons/md'
export default function Search() {
    return (
        <div className="search--box">
          <input type="text" name="" id="" placeholder='Search ...'/>
          <MdSearch className='icon'/> 
        </div>
    )
}