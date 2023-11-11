import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from '../Header.module.scss';
import CateMenu from "./CateMenu";
import AccMenu from "./AccMenu";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function SubMenu({stateOpen, setStateOpen}) {
  console.log('re-render-sub');
    const cx = classNames.bind(styles)
    const [contentActive, setContentActive] = useState(
      { 
        tabActive: 'catetab',
        contentActive: 'menu_cate'
      }
    )
    
    return ( 
        <nav className={cx('nav-primary')} id="submenu_m" style={stateOpen ? {display: 'block'} : {}}>
              <div className={cx('bg-nav')}>
                &nbsp;
                <button
                  type="button"
                  className={cx('closed-mb','closed-search')}
                  onClick={()=>{setStateOpen(false)}}
                >
                  <FontAwesomeIcon icon={faArrowLeft} className={cx('icon-m','icon-close-m')} alt="Close"/>
                </button>
              </div>
              <div className={cx('custom-tab')}>
                <ul className={cx('tab-menu')}>
                  <li
                    onClick={()=>{setContentActive(
                      { 
                        tabActive: 'catetab',
                        contentActive: 'menu_cate'
                      }
                    )}}
                    style={contentActive.tabActive === 'catetab' ? {borderBottom: '2px solid rgb(207, 6, 86)'}: {}}
                    id="catetab"
                  >
                    <Link id="m-menu" to="/">
                      Danh mục
                    </Link>
                  </li>
                  <li 
                    onClick={()=>{setContentActive(
                      { 
                        tabActive: 'acctab',
                        contentActive: 'menu_acc'
                      }
                    )}}
                    style={contentActive.tabActive === 'acctab' ? {borderBottom: '2px solid rgb(207, 6, 86)'}: {}}
                    id="acctab">
                    <Link id="m-user" to="/">
                      Tài khoản
                    </Link>
                  </li>
                </ul>
                <div className={cx('box-tab')}>
                  {
                    contentActive.tabActive === 'catetab' ? 
                    (<>
                      <CateMenu active></CateMenu>
                      <AccMenu></AccMenu>
                    </>)
                    :
                    (<>
                      <CateMenu></CateMenu>
                      <AccMenu active></AccMenu>
                    </>)
                  }
                  
                </div>
              </div>
            </nav>
    );
}

export default SubMenu;