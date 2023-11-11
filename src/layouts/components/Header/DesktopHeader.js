import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from './Header.module.scss';
import images from '~/assets/images/header'
import config from '~/config'

import LoginRegister from "./LoginForm";
import Search from "./Search";

import GridViewIcon from '@mui/icons-material/GridViewRounded';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";


import * as defaultService from '~/services/catesService'
import Image from "~/components/Image";

function DesktopHeader() {
  
  const cx = classNames.bind(styles)
  const dropDownRef = useRef()

  const [hideMenuCate, setHideMenuCate] = useState(true)
  // active Login or Register form
  const [formActive, setFormActive] = useState({})

  // Thay đổi form Login or Register
  const handleFormChange = (newForm) => {
    setFormActive(newForm);
  };

  // get data product_cate
  const [listCates, setListCates] = useState([])
  useEffect(()=>{
    const getListCates = async()=>{
      const result = await defaultService.getCates()
      setListCates(result)
    }
  
    getListCates()
  },[])
  
  useEffect(()=>{
    const closeDropMenu = () =>{
      dropDownRef.current.classList.remove(cx('open'))
    }

    window.addEventListener('mouseup', closeDropMenu)
    return () => {
      window.removeEventListener('mouseup', closeDropMenu);
    };
  },[])

  return (
    <div>
      <div className={cx("menu_wrap")}>
        <div className={cx("img_banner_top")}>
          <Link to={config.routes.home}>
            <Image
              src={images.bannerTopNav[0]}
              alt="Tải App Nhanh, Tích Điểm Ngay"
              className={cx("img-responsive")}
              
            />
          </Link>
        </div>

        <div className={cx("header_top")}>
          <div className={cx("container")}>
            <div className={cx("list_box_header")}>
              <div className={cx("header_box_logo")}>
                <Link to={config.routes.home}>
                  <Image src={images.logo[0]} alt="logo" type='logo_pc'/>
                </Link>
              </div>

              <div className={cx("header_box_menu", "cate-menu")}>
                <div
                  className={cx("menu_nav")}
                  onClick={() => {
                    setHideMenuCate(!hideMenuCate);
                  }}
                >
                  <span className={cx("icons")}>
                    <GridViewIcon sx={{ color: "#fff" }}>Rounded</GridViewIcon>
                  </span>
                  <span className={cx("text")}>Danh mục sản phẩm</span>
                </div>

                <ul
                  id="show-cate"
                  className={
                    hideMenuCate ? cx("item-cate") : cx("item-cate", "active")
                  }
                >
                  {listCates &&
                    listCates.map((cate) => (
                      <li key={cate.id} className={cx("has-sub")}>
                        <Link to={cate.to} title="Sản Phẩm Bán Chạy">
                          <Image
                            src={cate.icon}
                            alt={cate.name_cate}
                            style={{ width: "20px", height: "20px" }}
                            type='other'
                          />
                          <span>
                            {cate.name_cate}
                            <FontAwesomeIcon icon={faAngleRight} />
                          </span>
                        </Link>
                        <ul>
                          {cate.cate_child &&
                            cate.cate_child.map((cate_child) => (
                              <li key={cate_child.id}>
                                <Link to={cate_child.to} title="Sức Khỏe">
                                  {cate_child.title}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </li>
                    ))}
                </ul>
              </div>
              {/*------------------------------------------SEARCH------------------------------------------------------*/}
              <div className={cx("header_box_search")}>
                <Search></Search>

                <div className={cx("tags-header", "tag-top")}>
                  <ul>
                    {listCates &&
                      listCates.map(
                        (cate) =>
                          cate.cate_child &&
                          cate.cate_child.map((c_cate) =>
                            c_cate.top === true ? (
                              <li key={c_cate.id}>
                                <Link
                                  className={cx("text-color-white")}
                                  to={c_cate.to}
                                  title={c_cate.title}
                                >
                                  {c_cate.title}
                                </Link>
                              </li>
                            ) : (
                              ""
                            )
                          )
                      )}
                  </ul>
                </div>
              </div>

              {/*------------------------------------------CHECK-ORDER-----------------------------------*/}

              <div className={cx("header_box_tracking")}>
                <Link
                  rel="nofollow"
                  to={config.routes.donhang}
                  title="Theo dõi đơn hàng"
                >
                  <span>
                    <ReceiptIcon sx={{ color: "#fff" }}></ReceiptIcon>
                  </span>
                  <span>
                    <span className={cx("text-color-white")}>
                      Tra cứu đơn hàng
                    </span>
                  </span>
                </Link>
              </div>
              <div className={cx("header_box_user")}>
                <div className={cx("list_cart_user")}>
                  <div className={cx("header_box_cart")}>
                    <Link
                      rel="nofollow"
                      to={config.routes.giohang}
                      title="Giỏ hàng"
                    >
                      <Image src={images.iconGioHang[0]} alt="giỏ hàng" type='other'/>
                      <span className={cx("number-cart")}>
                        <abbr className={cx("count-giohang")}>0</abbr>
                      </span>
                    </Link>
                  </div>

                  <div className={cx("content_box_user")}>
                    <div className={cx("div_avatar")}>
                      <span
                        className={cx("avatar_header", "no_avatar")}
                        style={{ backgroundImage: `url(${images.iconUser})` }}
                      ></span>
                    </div>

                    <div
                      ref={dropDownRef}
                      className={cx("header_box_user_dropdown")}
                      id="dropdown-menu"
                    >
                      <span
                        className={cx("dropdown-toggle")}
                        data-toggle="dropdown"
                        aria-haspopup="true"
                      >
                        <Image
                          src={images.iconDropdown}
                          alt="dropdown"
                          onClick={() => {
                            dropDownRef.current.classList.add(cx("open"));
                          }}
                          onBlur={() => {
                            dropDownRef.current.classList.remove(cx("open"));
                          }}
                          
                        />
                      </span>
                      <div className={cx("dropdown-menu")}>
                        <div className={cx("arrow_div")}>
                          <div className={cx("popover-arrow")}>
                            <div className={cx("popover-arrow-inner")}></div>
                          </div>
                        </div>
                        <span
                          className={cx("dropdown-item")}
                          rel="nofollow"
                          id="register-btn"
                          onClick={() => {
                            setFormActive({
                              tabActive: "li-register",
                              contentActive: "register-content",
                            });
                          }}
                        >
                          Đăng ký
                        </span>
                        <span
                          className={cx("dropdown-item")}
                          rel="nofollow"
                          id="login-btn"
                          onClick={() => {
                            setFormActive({
                              tabActive: "li-login",
                              contentActive: "login-content",
                            });
                          }}
                        >
                          Đăng nhập
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*---------------------------------REGISTER-LOGIN---------------------------*/}

      <LoginRegister
        formActive={formActive}
        onFormChange={handleFormChange}
      ></LoginRegister>
    </div>
  );
}

export default DesktopHeader;
