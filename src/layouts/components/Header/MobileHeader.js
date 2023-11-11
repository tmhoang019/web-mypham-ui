import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from './Header.module.scss';
import config from '~/config'
import images from '~/assets/images/header'
import { useEffect, useMemo, useRef, useState } from "react";

import SubMenu from "./SubMenu";
import Search from "./Search";
import Image from "~/components/Image";

const cx = classNames.bind(styles)

function MobileHeader() {
  console.log("re-render-main");
  const refHeader = useRef()
  const [openSubMenu, setOpenSubMenu] = useState(false)

  // State save classList of FORM SEARCH
  const [classOfSearch, setClassOfSearch] = useState(['form-search'])

  const memoizedClassOfSearch = useMemo(() => JSON.stringify(classOfSearch), [classOfSearch])
  
  // Transform Header when user scroll website
  useEffect(()=>{
    const transformHeader = ()=>{
      if(window.scrollY >= 200){
        // transform logo, cart
        refHeader.current.classList.add(cx('header-transform'))
        
        // transform search
        setClassOfSearch(['form-search', 'search-transform'])
      }
      else{
        setClassOfSearch(['form-search'])

        refHeader.current.classList.remove(cx('header-transform'))
      }
    }
    window.addEventListener('scroll', transformHeader)
    return () => {
      window.removeEventListener('scroll', transformHeader);
    };
  },[])
  

    return ( 
        <div>
            {/*--------------------------------------MENU MOBILE------------------------------*/}
            
            <header className={cx('site-header')}>
              <Link
                className={cx('banner-header')}
                to={config.routes.home}
                title="Tải App Nhanh, Tích Điểm Ngay"
              >
                <Image
                  src={images.bannerTopNav[1]}
                  alt="Tải App Nhanh, Tích Điểm Ngay"
                />
              </Link>
              <div ref={refHeader} className={cx('top-header')}>
                <div className={cx('container')}>
                  <div className={cx('icon-nav')}>
                    <Image src={images.iconMenu} className={cx('icon_menu')} onClick={()=>{setOpenSubMenu(true)}} alt='icon-menu' type='other'/>
                  </div>
                  <input type="hidden" value="none" id="show_submenu" />
                  <div className={cx('logo')}>
                    <Link to={config.routes.home} title="Siêu thị Nhật Bản Japana.vn">
                      <Image
                        src={images.logo[0]}
                        alt="Siêu thị Nhật Bản Japana.vn"
                        type='logo_phone'
                      />
                    </Link>
                  </div>
                  <div className={cx('other-top')}>
                    <Link className=""  to={config.routes.giohang} title="giỏ hàng">
                      <Image
                        src= {images.iconGioHang[1]}
                        alt="giỏ hàng"
                        type='other'
                      />
                      <span className={cx('count-item','count-giohang')}>0</span>
                    </Link>
                  </div>
                  
                  <Search classSearch={memoizedClassOfSearch}></Search>
                </div>
              </div>
            </header>
            
            {/*--------------------------------------SUBMENU MOBILE------------------------------*/}
            
            {
              openSubMenu ? (<SubMenu stateOpen={openSubMenu} setStateOpen={setOpenSubMenu}></SubMenu>) : ''
            }
        </div> 
    );
}

export default MobileHeader;