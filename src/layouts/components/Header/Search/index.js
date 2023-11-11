import { useEffect, useState, memo } from "react";
import { useDebounce } from "~/hook";
import classNames from "classnames/bind";
import styles from './Search.module.scss';
import {Wrapper as WrapperSearch, SearchItem} from '../Popper'
import * as searchService from '~/services/searchService'
import Tippy from '@tippyjs/react/headless';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from "react-router-dom";

function Search({ classSearch }) {
    
    const cx = classNames.bind(styles)
    const classOfSearch = classSearch ? JSON.parse(classSearch) : {}

    const navigate = useNavigate()

    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])

    const [showResult, setShowResult] = useState(true) // show and hide when input is focused or blurred

    const debounce = useDebounce(searchValue,500)

    // Lắng nghe onChange value input search để lấy thông tin sản phẩm cần tìm với API
    useEffect(()=>{
        if (!debounce.trim()){
            return;
        }
        
        const getSuggest = async()=>{
            const result = await searchService.search(debounce)
            setSearchResult(result)
        }
        getSuggest()
        
    },[debounce])

    // Lắng nghe sự kiện submit form search
    const handleSubmit = (e) => {
        e.preventDefault()

        // Chuyển hướng
        navigate(`/search?q=${searchValue}&type=all`)

        setSearchValue('')
    }

    function handleHideResult(){
        setShowResult(false)
    }

    return (
        <form
            method="GET"
            name="frm"
            id="frm"
            onSubmit={handleSubmit}
            action=''
            encType="multipart/form-data"
            className={classOfSearch ? cx(classOfSearch[0], classOfSearch[1]) : {}}
        >
            <Tippy
                visible={showResult && debounce}
                interactive={true}
                placement="bottom"
                onClickOutside={handleHideResult}
                render={attrs => (
                    <div className={cx('wrapper_search')}>
                        <WrapperSearch>
                            {searchResult && searchResult.length > 0 ? (
                                <div>
                                    {searchResult.map(item => (
                                        <SearchItem
                                            key={item.id}
                                            image={item.image}
                                            title={item.name}
                                            price={item.price} 
                                            to={item.to}
                                        >
                                        </SearchItem>
                                    ))}
                                    <Link to={`/search?q=${searchValue}&type=all`} className={cx('seemore-top')}>Xem tất cả</Link>
                                    
                                </div>
                            )   
                            :
                                (<div className={cx('info-notfound')}>Không tìm thấy sản 
                                phẩm tương ứng...</div>)
                            }
                        
                        </WrapperSearch>
                    </div>
                )}
            >
                <div className={cx('form-group', 'form-group-search')}>
                    <button type="submit" className={cx('icon-search')}>
                        <SearchIcon>Filled</SearchIcon>
                    </button>
                    
                    <input
                        value={searchValue?searchValue:''}
                        autoComplete="off"
                        x-webkit-speech="false"
                        spellCheck="false"
                        id="search"
                        name="q"
                        className={cx('form-control', 'input-search')}
                        placeholder="Tìm kiếm sản phẩm ..."
                        type="text"
                        onChange={(e)=>{setSearchValue(e.target.value)}}
                        onFocus={()=>{setShowResult(true)}}
                    />
                    
                </div>
            </Tippy>
        </form>
    );
}

export default memo(Search);