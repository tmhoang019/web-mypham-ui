import classNames from "classnames/bind";
import styles from './Popper.module.scss';
import Image from "~/components/Image";

function SearchItem({image, title, price, to}) {
    const cx = classNames.bind(styles)

    return ( 
        <div className={cx('item')}>
            <div className={cx('box-img')}>
                <a href={to || '/'} title="Hình sản phẩm">
                    <Image src={image} alt={title||'Sản phẩm'}/>
                </a>
            </div>
            <h3 className={cx('title-top')}>
                <a href={to || '/'} title="Nước uống Collagen 82x Classic Fucoidan Chai 500ml">
                    {title}
                </a>
            </h3>
            <div className={cx('box-price')}>
                <p className={cx('price-top')}>{price} đ</p>
                <br/>
           </div>
        </div>
    );
}

export default SearchItem;