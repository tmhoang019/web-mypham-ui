import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Link } from "react-router-dom";
import images from "~/assets/images/banner_cate";

import styles from "./Swiper.module.scss";
import stylesGlobal from "~/components/GlobalStyles/GlobalStyles.module.scss";
import classNames from "classnames/bind";

function SwiperBanner() {
  const cx = classNames.bind(styles);
  const cxGlobal = classNames.bind(stylesGlobal)

  return (
    <div className={cx('wrapper_swipper')}>
      <div className={cxGlobal("container")}>
        <div className={cx("wrapper_img_cate")}>
          <img
            src={images.bannerCate[0]}
            style={{ width: "100%" }}
            alt="banner-cate"
          />
          <Link className={cx("link_banner_cate")} to="/"></Link>
        </div>
      </div>
      <div className={cxGlobal("container")}>
        <div className={cx("box_slider_home")}>
          <Swiper
            className={cx("wheel_slider", "swiper-container-horizontal")}
            style={{
          '--swiper-navigation-color': 'red',
          '--swiper-pagination-color': '#fff',
        }}
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true}}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              576: {
                slidesPerView: 3
              },
              768: {
                slidesPerView: 4
              },
              922: {
                slidesPerView: 5
              },
              1200: {
                slidesPerView: 6
              }
            }}
          >
            <SwiperSlide className={cx("item", "swiper-slide")}>
              <Link to="/" title="">
                <img alt="" src={images.imagesOutstanding[0]} />
              </Link>
            </SwiperSlide>

            <SwiperSlide className={cx("item", "swiper-slide")}>
              <Link to="/" title="">
                <img alt="" src={images.imagesOutstanding[1]} />
              </Link>
            </SwiperSlide>

            <SwiperSlide className={cx("item", "swiper-slide")}>
              <Link to="/" title="">
                <img alt="" src={images.imagesOutstanding[0]} />
              </Link>
            </SwiperSlide>

            <SwiperSlide className={cx("item", "swiper-slide")}>
              <Link to="/" title="">
                <img alt="" src={images.imagesOutstanding[1]} />
              </Link>
            </SwiperSlide>

            <SwiperSlide className={cx("item", "swiper-slide")}>
              <Link to="/" title="">
                <img alt="" src={images.imagesOutstanding[1]} />
              </Link>
            </SwiperSlide>

            <SwiperSlide className={cx("item", "swiper-slide")}>
              <Link to="/" title="">
                <img alt="" src={images.imagesOutstanding[1]} />
              </Link>
            </SwiperSlide>

            <SwiperSlide className={cx("item", "swiper-slide")}>
              <Link to="/" title="">
                <img alt="" src={images.imagesOutstanding[1]} />
              </Link>
            </SwiperSlide>

            <SwiperSlide className={cx("item", "swiper-slide")}>
              <Link to="/" title="">
                <img alt="" src={images.imagesOutstanding[1]} />
              </Link>
            </SwiperSlide>

            <SwiperSlide className={cx("item", "swiper-slide")}>
              <Link to="/" title="">
                <img alt="" src={images.imagesOutstanding[1]} />
              </Link>
            </SwiperSlide>

            <SwiperSlide className={cx("item", "swiper-slide")}>
              <Link to="/" title="">
                <img alt="" src={images.imagesOutstanding[1]} />
              </Link>
            </SwiperSlide>
            
          </Swiper>
        </div>
      </div>

      {/* ---------------SESSION TWO----------------- */}

      <div className={cxGlobal("container")}>
        <div className={cx("wrapper_img_cate")}>
          <img
            src={images.bannerCate[1]}
            style={{ width: "100%" }}
            alt="banner-cate"
          />
          <Link className={cx("link_banner_cate")} to="/"></Link>
        </div>
      </div>
      <div className={cxGlobal("container")}>
        <div className={cx("box_slider_home")}>
          <Swiper
            className={cx("wheel_slider", "swiper-container-horizontal")}
            style={{
          '--swiper-navigation-color': 'red',
          '--swiper-pagination-color': '#fff',
        }}
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true}}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              479: {
                slidesPerView: 2
              },
              576: {
                slidesPerView: 3
              },
              768: {
                slidesPerView: 4
              },
              922: {
                slidesPerView: 5
              },
              1200: {
                slidesPerView: 5
              }
            }}
          >
            <SwiperSlide className={cx("item", "swiper-slide")}>
              <Link to="/" title="">
                <img alt="" src={images.imagesBestSeller[0]} />
              </Link>
            </SwiperSlide>

            <SwiperSlide className={cx("item", "swiper-slide")}>
              <Link to="/" title="">
                <img alt="" src={images.imagesBestSeller[1]} />
              </Link>
            </SwiperSlide>

            <SwiperSlide className={cx("item", "swiper-slide")}>
              <Link to="/" title="">
                <img alt="" src={images.imagesBestSeller[0]} />
              </Link>
            </SwiperSlide>

            <SwiperSlide className={cx("item", "swiper-slide")}>
              <Link to="/" title="">
                <img alt="" src={images.imagesBestSeller[1]} />
              </Link>
            </SwiperSlide>

            <SwiperSlide className={cx("item", "swiper-slide")}>
              <Link to="/" title="">
                <img alt="" src={images.imagesBestSeller[1]} />
              </Link>
            </SwiperSlide>

            <SwiperSlide className={cx("item", "swiper-slide")}>
              <Link to="/" title="">
                <img alt="" src={images.imagesBestSeller[1]} />
              </Link>
            </SwiperSlide>

            <SwiperSlide className={cx("item", "swiper-slide")}>
              <Link to="/" title="">
                <img alt="" src={images.imagesBestSeller[1]} />
              </Link>
            </SwiperSlide>

            <SwiperSlide className={cx("item", "swiper-slide")}>
              <Link to="/" title="">
                <img alt="" src={images.imagesBestSeller[1]} />
              </Link>
            </SwiperSlide>

            <SwiperSlide className={cx("item", "swiper-slide")}>
              <Link to="/" title="">
                <img alt="" src={images.imagesBestSeller[1]} />
              </Link>
            </SwiperSlide>

            <SwiperSlide className={cx("item", "swiper-slide")}>
              <Link to="/" title="">
                <img alt="" src={images.imagesBestSeller[1]} />
              </Link>
            </SwiperSlide>
            
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default SwiperBanner;
