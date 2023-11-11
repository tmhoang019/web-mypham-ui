import styles from "./Swiper.module.scss";
import classNames from "classnames/bind";

function CustomPagination({ swiper }) {
    const cx = classNames.bind(styles);
    console.log(swiper);
  const slides = [];

  for (let i = 0; i < swiper.slides.length; i++) {
    slides.push(
      <span
        key={i}
        className={`${cx('swiper-pagination-bullet')} ${
          i === swiper.activeIndex ? "-active" : ""
        }`}
      />
    );
  }

  return <div className={cx('swiper-pagination','wheel_slider_pagination','swiper-pagination-bullets')}>{slides}</div>;
}

export default CustomPagination;
