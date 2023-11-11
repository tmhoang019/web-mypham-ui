import classNames from "classnames/bind";
import styles from '~/layouts/components/Header/Header.module.scss'
import Register from "./Register"
import Login from "./Login";
import { useEffect } from "react";

const cx = classNames.bind(styles)

function LoginRegister({ formActive, onFormChange }) {
  
  let classForm = Object.keys(formActive).length !== 0 ? cx('custom_modal', 'modal', 'active') : cx('custom_modal', 'modal')

  // Lắng nghe sự kiện window: đóng Login/Register Form nếu user focus ra ngoài form
  useEffect(() => {
    const closeForm = (event) => {
      // Cập nhật lại state formActive thành object rỗng khi user nhấp chuột ra ngoài form
      if (event.target.id === 'login_register_form')
        onFormChange({})
    };

    window.addEventListener('mouseup', closeForm);

    return () => {
      window.removeEventListener('mouseup', closeForm);
    };
  })


    return ( 
      <div className={classForm}  id="login_register_form" role="dialog">
        <div className={cx('modal-dialog')}>
          <div className={cx('modal-content')}>
            <div className={cx('modal-body')}>
              <ul className={cx('nav', 'nav-tabs')}>
                <li
                  className={'li-register' === formActive.tabActive ? cx('active'): {}}
                  id='li-register'
                  onClick={()=>{
                    onFormChange(
                    {
                      tabActive: 'li-register',
                      contentActive: 'register-content'
                    }
                  )}}
                >
                  <span className={cx('title-log')}>
                    Đăng ký
                  </span>
                </li>
                <li
                  className={'li-login' === formActive.tabActive ? cx('active'): {}}
                  id="li-login"
                  onClick={()=>{
                    onFormChange(
                    {
                      tabActive: 'li-login',
                      contentActive: 'login-content'
                    }
                  )}}
                >
                  <span className={cx('title-log')}>
                    Đăng nhập
                  </span>
                </li>
              </ul>
              <div className={cx('tab-content')}>
                  {
                    formActive.contentActive === 'register-content' ?
                    (<>
                      <Register active></Register>
                      <Login></Login>
                    </>)
                    :
                        formActive.contentActive === 'login-content' ?
                        (<>
                          <Register></Register>
                          <Login active></Login>
                        </>)
                        : // Trường hợp mặc định ban đầu khi vào website
                          (<>
                          <Register></Register>
                          <Login></Login>
                          </>)
                  }

              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default LoginRegister;