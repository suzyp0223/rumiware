import React from "react";
import "../css/main.module.css";
import styles from "./footer.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import Resume from "../../assets/icon/resume.svg";
import GitHub from "../../assets/icon/github.svg";
import Phone from "../../assets/icon/phone.svg";


const Footer: React.FC = (): React.ReactElement => {



  return (
    <>
      <div className={styles.wrapper}>
        {/* 메인 콘텐츠 */}
        <div className={styles.mainContent}>
          {/* 여기에 무한 스크롤 콘텐츠가 들어갑니다. */}
          <p>무한 스크롤 콘텐츠</p>
          <div style={{ height: '2000px' }}>
            {/* 예시 콘텐츠 (스크롤이 발생하도록 높이 추가) */}
            <p>스크롤 가능한 콘텐츠가 여기에 있습니다.</p>
          </div>
        </div>

        <footer className={styles.footerWrapper}>
          {/* <div className={styles.textContainer}> */}
          <div className={styles.textContainer}>
            <p className={styles.title}><a href="/">LumiWare 루미웨어</a></p>

            <div className={styles.personalInfoBox}>
              <p className={styles.email}>
                <a href="">
                  <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico" style={{ width: "24px", height: "24px" }} />
                  suzyp0223@gmail.com
                </a>
              </p>
              <p className={styles.phone}>
                <a href="">
                  <img src={Phone} />
                  010.3395.0640
                </a>
              </p>
              <p className={styles.name}>
                <a href="">

                  made by 박수지
                </a>
              </p>
            </div>

            <div className={styles.resumeBox}>
              <p className={styles.resume}>
                <a href="">
                  <img src={Resume} />
                  이력서
                </a>
              </p>
              <p className={styles.blog}>
                <a href="https://ppojjakcoding.tistory.com">
                  <img src="https://t1.daumcdn.net/tistory_admin/favicon/tistory_favicon_32x32.ico" />
                  뽀짝코딩
                </a>
              </p>
              <p className={styles.githup}>
                <a href="https://github.com/suzyp0223?tab=repositories">
                  <img src={GitHub} />
                  https://github.com/suzyp0223
                </a>
              </p>
            </div>

          </div>

          <div className={styles.sourceBox}>
            {/* 투명도 넣기 */}
            <p className={styles.sourceTitle}>Img Source</p>
            <div className={styles.sourceLinkBox}>
              <p className={styles.sourceLink}>
                <a href="https://unsplash.com">
                  <img src="https://unsplash.com/favicon-32x32.png" />
                </a>
              </p>
              {/* 검색어 예시: clothing, fashion, apparel */}
              <p className={styles.sourceLink}>
                <a href="https://www.pexels.com">
                  <img src="https://www.pexels.com/assets/static/images/meta/pexels-icon.png" />
                </a>
              </p>
              {/* 검색어 예시: clothing, fashion, men's fashion, women's fashion */}
              <p className={styles.sourceLink}>
                <a href="https://pixabay.com">
                  <img src="https://pixabay.com/favicon-32x32.png" />
                </a>
              </p>
              {/* 검색어 예시: clothing, fashion, apparel */}
              <p className={styles.sourceLink}>
                <a href="https://burst.shopify.com">
                  <img src="https://cdn.shopify.com/shopifycloud/growth_tools/assets/global/favicon-ab7018e1fe708a49edcfecce3166032fbeeb1fd7ba4a078c366de344d32ee193.png" />
                </a>
              </p>
              {/* 검색어 예시: clothing, fashion, clothes */}
              <p className={styles.sourceLink}>
                <a href="https://www.freepik.com">
                  <img src="https://cdn-front.freepik.com/favicons/favicon.svg?v=2" alt="freepikIcon"></img>
                </a>
              </p>
              {/* 검색어 예시: clothing, fashion, apparel */}
              <p className={styles.sourceLink}>
                <a href="https://www.rawpixel.com">
                  <img
                    src="https://static2.rawpixel.com/_next/static/images/rawpixel-logomark-black-394a2cad2aa430631a56cc6b871d6ca1.png"
                    alt="Rawpixel logo" />
                </a>
              </p>
              {/* 검색어 예시: fashion, clothing, men's fashion, women's fashion */}
              <p className={styles.sourceLink}>
                <a href="https://stocksnap.io">
                  <FontAwesomeIcon icon={faCameraRetro} />
                </a>
              </p>
              {/* 검색어 예시: fashion, clothing, apparel */}
              <p className={styles.sourceLink}>
                <a href="https://www.lifeofpix.com">
                  <img src="https://www.lifeofpix.com/dist/favicon-32x32.png" />
                </a>
              </p>
            </div>
            {/* 검색어 예시: fashion, clothing */}
          </div>


          {/* </div> */}
        </footer>
      </div>
    </>
  );
};

export default Footer;