import React from "react";
import styles from "../css/main.module.css"; // CSS 모듈 사용

import rumiLogo from "../../assets/rumiLogo1.jpg";
import hamBtn from "../../assets/icon/hamBtn.svg";
import search from "../../assets/icon/search.svg";
import myPage from "../../assets/icon/my-page.svg";
import cart from "../../assets/icon/cart.svg";



const TopNav: React.FC = (): React.ReactElement => {
  return (
    <>
      <nav className={styles.wrapper}>
        <div className={styles.logoContainer}>
          <figure className={styles.logoFig}>
            <a href="">
              <img src={rumiLogo} alt="로고이미지" style={{ width: '100px', height: '100px' }} />
            </a>
          </figure>
        </div>

        <div className={styles.hamBtnContainer}>
          <figure className={styles.sidebarBtn}>
            <a href="">
              <img src={hamBtn} alt="ham-btn"  style={{ width: '30px', height: '30px' }}/>
            </a>
            <figcaption>카테고리</figcaption>
          </figure>
        </div>

        <div className={styles.searchContainer}>
          <input className={styles.searchInput} type="text" placeholder="검색어를 입력하세요" />
          <button className={styles.searchBtn} type="button">
            <img src={search} alt="검색" style={{ width: '60px', height: '60px' }} />
          </button>
        </div>

        <div className={styles.myContainer}>
          <figure className={styles.myPage}>
            <a href="">
              <img src={myPage} alt="마이페이지" style={{ width: '24px', height: '24px' }} />
            </a>
            <figcaption>마이페이지</figcaption>
          </figure>
          <figure className={styles.myCart}>
            <a href="">
              <img src={cart} alt="장바구니" style={{ width: '24px', height: '24px' }} />
            </a>
            <figcaption>장바구니</figcaption>
          </figure>
        </div>

        <ul className={styles.linkList}>
          <li><a href="/"><img src="" alt="" />여성의류</a></li>
          <li><a href="/"><img src="" alt="" />남성의류</a></li>
          <li><a href="/"><img src="" alt="" />유아</a></li>
          <li><a href="/"><img src="" alt="" />신생아</a></li>
        </ul>
      </nav>
    </>
  );
};

export default TopNav;
