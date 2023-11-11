import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from '~/layouts/components/Header/Header.module.scss'

const cx = classNames.bind(styles)

function Login({active}) {
  
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

    return ( 
        <div id="login-content" className={active ? cx('tab-pane','fade','active') : cx('tab-pane','fade')}>
          <div className={cx('box-input', 'form-group')}>
            <div className={cx('icon-form')}>
              <span><FontAwesomeIcon icon={faUser}/></span>
            </div>
            <input
              id="username-login"
              type="text"
              name="username"
              placeholder="Email hoặc số điện thoại"
              className={cx('form-control','ipt-text')}
            />
          </div>
          <div className={cx('box-input', 'form-group')}>
            <div className={cx('icon-form')}>
            <span><FontAwesomeIcon icon={faLock}/></span>
            </div>
            <input
              id="password-login"
              type="password"
              name="password"
              placeholder="Mật khẩu"
              className={cx('form-control','ipt-text')}
            />
          </div>
          <button  type="button" className={cx('btn-red')}>
            Đăng nhập
          </button>
          <p id="error-login"></p>
          <div className={cx('box-check','login-popup')}>
            <label className={cx('check-custom')}>
              Ghi nhớ tài khoản{" "}
              <Link
                to="/"
                title="Quên mật khẩu?"
                data-toggle="modal"
                data-target="/ForgotPW"
                data-dismiss="modal"
                className={cx('forgot-pass')}
              >
                Quên mật khẩu?
              </Link>
              <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
              <span className={cx('checkmark')}></span>
            </label>
          </div>
          <input value="/" type="hidden" name="url" />
        </div>
    );
}

export default Login;