import { Link } from "react-router-dom";
import { faChevronRight, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as defaultService from '~/services/catesService'

import classNames from "classnames/bind";
import styles from '../Header.module.scss';
import { useEffect, useState } from "react";
import Image from "~/components/Image";

function CateMenu({active}) {
    const cx = classNames.bind(styles)
    const [showSubCate, setShowSubCate] = useState('')

    const [listCates, setListCates] = useState([])
    useEffect(()=>{
    const getListCates = async()=>{
      const result = await defaultService.getCates()
      setListCates(result)
    }
  
    getListCates()
  },[])

    return ( 
        <div className={cx('menu-mobile')} id="menu_cate" style={active ? {display:'block'} : {}}>
          {listCates && listCates.length > 0 && listCates.map( cate => (
            <div key={cate.id} className={cx('item')}>
              <h4
                className={cx('title')}
              >
                <Link to="/" title={cate.name_cate}>
                  <Image
                    src={cate.icon}
                    alt='icon'
                    type='other'
                  />
                  {cate.name_cate}
                </Link>
                <span className={cx('expand-menu')}>
                {cate.cate_child ? 
                  (
                    <FontAwesomeIcon 
                      icon={faChevronRight} 
                      className={cx('icon-m','icon-arrow-m')}
                      onClick={()=>{showSubCate ? setShowSubCate('') : setShowSubCate(`${cate.id}`)}}
                      style={showSubCate === `${cate.id}` ? {transform: 'rotate(90deg)'} : {}}
                    />
                  ) : 
                  (
                    <FontAwesomeIcon 
                      icon={faChevronRight} 
                      className={cx('icon-m','icon-arrow-m')}
                      style={{visibility: 'hidden'}}
                    />
                  )
                }
                </span>
              </h4>
              <ul className={cx('sub-nav')} style={showSubCate === `${cate.id}` ? {display:'block'} : {}}>
                {cate.cate_child && cate.cate_child.map( cate_child => (
                  <li key={cate_child.id}>
                    <Link title="Sức Khỏe" to={cate_child.to} className={cx('sub-nav-item')}>
                    <FontAwesomeIcon icon={faEllipsisVertical} className={cx('icon-m','icon-child-m')}></FontAwesomeIcon>
                      {cate_child.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
    );
}

export default CateMenu;