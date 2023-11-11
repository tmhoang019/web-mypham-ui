import classNames from "classnames/bind";
import styles from './Popper.module.scss';

function Wrapper({children}) {
    const cx = classNames.bind(styles)

    return ( 
        <div className={cx('auto-search')}>
            <div className={cx('pro-top')}>
                <div style={{marginTop: '15px'}} className={cx('list-pro-search')}>
                    {children}
                </div>
            </div>
        </div>
     );
}

export default Wrapper;