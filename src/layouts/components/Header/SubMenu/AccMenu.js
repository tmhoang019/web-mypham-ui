import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from '../Header.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faEnvelope, faFile, faLock, faPhone, faRightToBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function AccMenu({active}) {
    const cx = classNames.bind(styles)

    const objForms = {login:'login', register:'register', forgot_pass:'forgot_pass'}

    const [formSelected, setFormSelected] = useState('')

    
    return ( 
        <div className={cx('side-header-info')} id="menu_acc" style={active ? {display:'block'} : {}}>
                    <div className={cx('box-item')} style={!formSelected ? {} : {display:'none'}}>
                      <ul>
                        <li onClick={()=>{setFormSelected(objForms.register)}}>
                          <Link id="register-btn" to="/" title="title">
                            <FontAwesomeIcon icon={faUser} className={cx('icon-m')}></FontAwesomeIcon>
                            
                            <span>Đăng ký tài khoản</span>
                          </Link>
                        </li>
                        <li onClick={()=>{setFormSelected(objForms.login)}}>
                          <Link id="login-btn" to="/" title="title">
                            <FontAwesomeIcon icon={faRightToBracket} className={cx('icon-m')}></FontAwesomeIcon>
                            <span>Đăng nhập</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/" title="title">
                            <FontAwesomeIcon icon={faFile} className={cx('icon-m')}></FontAwesomeIcon>
                            <span>Tra cứu đơn hàng</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div id='login-m' style={formSelected === objForms.login ? {display:'block'} : {display:'none'}}>
                      <div className={cx('title-login')}>
                        <button
                          type="button"
                          className={cx('back-menu')}
                          onClick={()=>{setFormSelected('')}}
                        >
                          <FontAwesomeIcon icon={faChevronLeft} className={cx('icon-m','icon-arrowback-m')}></FontAwesomeIcon>
                        </button>
                        Đăng nhập
                      </div>
                      <div className={cx('box-login')}>
                        <div className={cx('box-input','form-group')}>
                          <div className={cx('icon-form')}>
                            <FontAwesomeIcon icon={faUser} className={cx('icon-m','icon-user')}></FontAwesomeIcon>
                          </div>
                          <input
                            id="username-login"
                            type="text"
                            name="username"
                            placeholder="Email hoặc số điện thoại"
                            className={cx('form-control','ipt-text')}
                          />
                        </div>
                        <div className={cx('box-input','form-group')}>
                          <div className={cx('icon-form')}>
                            <FontAwesomeIcon icon={faLock} className={cx('icon-m','icon-user')}></FontAwesomeIcon>
                          </div>
                          <input
                            id="password-login"
                            type="password"
                            name="password"
                            placeholder="Mật khẩu"
                            className={cx('form-control','ipt-text')}
                          />
                        </div>
                        <button
                          
                          type="button"
                          className={cx('btn-regis-log')}
                        >
                          <span>Đăng nhập</span>
                        </button>
                        <p
                          aria-hidden="true"

                          id="error-login"
                        ></p>
                        <div className={cx('box-check','login-popup')}>
                          <div className={cx('item-login')} >
                            <Link
                              to="/"
                              title="title"
                            >
                              &gt;&gt; Đăng ký
                            </Link>
                          </div>
                          <div className={cx('item-login')}>
                            <label className={cx('check-custom')}>
                              <span>Ghi nhớ tài khoản</span>
                              <input type="checkbox" checked="checked" />
                              <span className={cx('checkmark')}></span>
                            </label>
                            <Link
                              to="/"
                              title="Quên mật khẩu"
                              onClick={()=>{setFormSelected(objForms.forgot_pass)}}
                            >
                              Quên mật khẩu?
                            </Link>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                    <div id='register-m' style={formSelected === objForms.register ? {display:'block'} : {display:'none'}}>
                      <div className={cx('title-login')}>
                        <button
                          type="button"
                          className={cx('back-menu')}
                          id="back2"
                          onClick={()=>{setFormSelected('')}}
                        >
                          <FontAwesomeIcon icon={faChevronLeft} className={cx('icon-m','icon-arrowback-m')}></FontAwesomeIcon>
                        </button>
                        Đăng ký
                      </div>
                      <div className={cx('box-login')}>
                        <div className={cx('box-input','form-group')}>
                          <div className={cx('icon-form')}>
                            <FontAwesomeIcon icon={faUser} className={cx('icon-m','icon-user')}></FontAwesomeIcon>
                          </div>
                          <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Họ và tên"
                            className={cx('form-contro','ipt-text')}
                          />
                        </div>
                        <div className={cx('box-input','form-group')}>
                          <div className={cx('icon-form')}>
                            <FontAwesomeIcon icon={faEnvelope} className={cx('icon-m','icon-user')}></FontAwesomeIcon>
                          </div>
                          <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Email"
                            className={cx('form-control','ipt-text')}
                          />
                        </div>
                        <div className={cx('box-input','form-group')}>
                          <div className={cx('icon-form')}>
                            <FontAwesomeIcon icon={faPhone} className={cx('icon-m','icon-user')}></FontAwesomeIcon>
                          </div>
                          <input
                            id="phone"
                            type="text"
                            name="phone"
                            placeholder="Số điện thoại"
                            className={cx('form-control','ipt-text')}
                          />
                        </div>
                        <div className={cx('box-input','form-group')}>
                          <div className={cx('icon-form')}>
                            <FontAwesomeIcon icon={faLock} className={cx('icon-m','icon-user')}></FontAwesomeIcon>
                          </div>
                          <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Mật khẩu"
                            className={cx('form-control','ipt-text')}
                          />
                        </div>
                        <div className={cx('box-input','form-group')}>
                          <div className={cx('icon-form')}>
                            <FontAwesomeIcon icon={faLock} className={cx('icon-m','icon-user')}></FontAwesomeIcon>
                          </div>
                          <input
                            id="re_password"
                            type="password"
                            name="re-password"
                            placeholder="Xác nhận mật khẩu"
                            className={cx('form-control','ipt-text')}
                          />
                        </div>
            
                        <div className={cx('box-check')}>
                          <label className={cx('check-custom')}>
                            Bạn đã đọc và đồng ý với điều khoản sử dụng, mua bán và
                            bảo mật của&nbsp;
                            <Link to="/" title="japana">
                              japana
                            </Link>
                            <input
                              type="checkbox"
                              id="check-rule"
                              checked="checked"
                            />
                            <span className={cx('checkmark')}></span>
                          </label>
                        </div>
                        <div className={cx('box-check2')}>
                          <label className={cx('check-custom')}>
                            Đăng ký nhận khuyến mãi từ chúng tôi
                            <input
                              type="checkbox"
                              id="check-promo"
                              checked="checked"
                            />
                            <span className={cx('checkmark')}></span>
                          </label>
                        </div>
                        <button  type="button" className={cx('btn-regis-log')}>
                          <span>Đăng ký</span>
                        </button>
                      </div>
                      
                    </div>
                    <div id='forgot-m' style={formSelected === objForms.forgot_pass ? {display:'block'} : {display:'none'}}>
                      <div className={cx('title-login')}>
                        <button
                          type="button"
                          className={cx('back-menu')}
                          id="backpw"
                          onClick={()=>{setFormSelected(objForms.login)}}
                        >
                          <FontAwesomeIcon icon={faChevronLeft} className={cx('icon-m','icon-arrowback-m')}></FontAwesomeIcon>
                        </button>
                        Quên mật khẩu
                      </div>
                      <div className={cx('box-login')}>
                        <h3 className={cx('title-log')}>Lấy lại mật khẩu</h3>
                        <form method="GET">
                          <p className={cx('intro-log')}>
                            Vui lòng nhập địa chỉ email của bạn vào ô bên dưới. Bạn sẽ
                            nhận được một liên kết để thiết lập lại mật khẩu.
                          </p>
                          <div className={cx('box-input','form-group')}>
                            <div className={cx('icon-form')}>
                              <i className={cx('icon-m','icon-user')}></i>
                            </div>
                            <input
                              type="email"
                              name="email"
                              id="email_loss"
                              placeholder="Nhập email của bạn"
                              className={cx('box-input','form-group')}
                            />
                          </div>
                          <button  type="button" className={cx('btn-red')}>
                            Lấy lại mật khẩu
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
    );
}

export default AccMenu;