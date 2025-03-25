import React from "react";
import "../css/main.module.css";
import styles from "./topNav.module.css";

import rumiLogo from "../../assets/img/rumiLogo1.jpg";
import hamBtn from "../../assets/icon/hamBtn.svg";
import search from "../../assets/icon/search.svg";
import myPage from "../../assets/icon/my-page.svg";
import cart from "../../assets/icon/cart.svg";


interface TopNavProps {
  toggleSidebar: () => void;
}

const TopNav: React.FC<TopNavProps> = ({ toggleSidebar }) => {

  return (
    <>
      <nav className={styles.wrapper}>
        <div className={styles.loginBarContainer}>
          <a><div className={styles.login}>로그인</div></a>
          <a><div className={styles.join}>회원가입</div></a>
        </div>

        <div className={styles.logoContainer}>
          <figure className={styles.logoFig}>
            <a href="">
              <img src={rumiLogo} alt="로고이미지" />
            </a>
          </figure>
        </div>

        <div className={styles.hamBtnContainer}>
          <figure className={styles.hamBtn}>
            <a href="#" onClick={toggleSidebar}>
              {/* 동적으로 마우스 호버시 햄버거버튼 색상변경 */}
              <img src={hamBtn} alt="ham-btn" />
            </a>
          </figure>
        </div>

        <div className={styles.searchContainer}>
          <input className={styles.searchInput} type="text" placeholder="검색어를 입력하세요" />
          <button className={styles.searchBtn} type="button">
            <img src={search} alt="검색" style={{ width: '50px', height: '50px' }} />
          </button>
        </div>

        <div className={styles.myContainer}>
          <figure className={styles.myPage}>
            <a href="">
              <img src={myPage} alt="마이페이지" />
            </a>
            <figcaption>마이페이지</figcaption>
          </figure>
          <figure className={styles.myCart}>
            <a href="">
              <img src={cart} alt="장바구니" />
            </a>
            <figcaption>장바구니</figcaption>
          </figure>
        </div>

        <ul className={styles.linkList}>
          <li><a className={styles.linkListA} href="/"><img src="" alt="" />BEST 100</a></li>
          <li><a className={styles.linkListA} href="/"><img src="" alt="" />NEW 10%</a></li>
          <li><a className={styles.linkListA} href="/"><img src="" alt="" />SEASON ~90%</a></li>
          <li><a className={styles.linkListA} href="/"><img src="" alt="" />SET</a></li>
          <li><a className={styles.linkListA} href="/"><img src="" alt="" />OUTER</a></li>
          <li><a className={styles.linkListA} href="/"><img src="" alt="" />DRESS</a></li>
          <li><a className={styles.linkListA} href="/"><img src="" alt="" />TOP</a></li>
          <li><a className={styles.linkListA} href="/"><img src="" alt="" />BOTTOM</a></li>
        </ul>
      </nav>
    </>
  );
};

export default TopNav;
