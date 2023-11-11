import { faEnvelope, faExclamationTriangle, faLock, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useState } from "react";
import styles from '~/layouts/components/Header/Header.module.scss'

const cx = classNames.bind(styles)

function Register({active}) {
  
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

    return ( 
        <div id="register-content" className={active ? cx('tab-pane','fade','active') : cx('tab-pane','fade')}>
            <div className={cx('box-input', 'form-group')}>
              <div className={cx('icon-form')}>
                <span><FontAwesomeIcon icon={faUser}/></span>
              </div>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Họ và tên"
                className={cx('form-control', 'ipt-text')}
              />
            </div>

            <div className={cx('box-input', 'form-group')}>
              <div className={cx('icon-form')}>
                <span><FontAwesomeIcon icon={faEnvelope} /></span>
              </div>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                className={cx('form-control','ipt-text')}
              />
            </div>
            <div className={cx('box-input', 'form-group')}>
              <div className={cx('icon-form')}>
                <span><FontAwesomeIcon icon={faPhone} /></span>
              </div>
              <input
                id="mobile"
                type="tel"
                name="mobile"
                placeholder="Số điện thoại"
                className={cx('form-control','ipt-text')}
              />
            </div>

            <div className={cx('box-input', 'form-group')}>
              <div className={cx('icon-form')}>
                <span><FontAwesomeIcon icon={faLock} /></span>
              </div>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Mật khẩu"
                className={cx('form-control','ipt-text')}
              />
            </div>
            <div className={cx('box-input', 'form-group')}>
              <div className={cx('icon-form')}>
                <span><FontAwesomeIcon icon={faLock} /></span>
              </div>
              <input
                id="re_password"
                type="password"
                name="re-password"
                placeholder="Xác nhận mật khẩu"
                className={cx('form-control','ipt-text')}
              />
            </div>

            <p
              style={{display:'none'}}
              id="warning-register"
              className={cx('warning')}
            >
              <i
                className="fa fa-exclamation-triangle"
                aria-hidden="true"
              ></i>
              <span><FontAwesomeIcon icon={faExclamationTriangle} /></span>{" "}
              Số điện thoại hoặc email đã tồn tại
            </p>
            <div className={cx('box-check')}>
              <label className={cx('check-custom')}>
                Bạn đã đọc và đồng ý với điều khoản sử dụng, mua bán và
                bảo mật của chúng tôi
                <input
                  type="checkbox"
                  id="check-rule"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <span className={cx('checkmark')}></span>
              </label>
            </div>
            
            <button
              onClick={()=>{}}
              type="button"
              name="regis-btn"
              className={cx('btn-red')}
            >
              Tạo tài khoản
            </button>
            <input value="/" type="hidden" name="url" />
        </div>
    );
}

export default Register;