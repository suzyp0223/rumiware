import React from "react";
import "../css/main.module.css";
import styles from "./sidebar.module.css";

interface SidebarProps {
  isOpen: boolean;
}

// 동적으로 렌더링하여 사이드바 카데고리 생성
const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  // 카테고리 데이터를 배열로 정의
  const categories = [
    { name: 'BEST 100', link: '/best-100' },
    { name: 'NEW 10%', link: '/new-10' },
    { name: 'SEASON ~90%', link: '/season' },
    { name: 'SET', link: '/set' },
    { name: 'OUTER', link: '/outer' },
    { name: 'DRESS', link: '/dress' },
    { name: 'TOP', link: '/top' },
    { name: 'BOTTOM', link: '/bottom' },
    { name: 'JACKET', link: '/jacket' },
    { name: 'COAT', link: '/coat' },
    { name: 'VEST', link: '/vest' },
    { name: 'PADDED', link: '/padded ' },
    { name: 'CARDIGAN', link: '/cardigan' },
    { name: 'KNIT', link: '/knit' },
    { name: 'T-SHIRT', link: '/t-shirt' },
    { name: 'BLOUSE', link: '/blouse' },
    { name: 'SHIRT', link: '/shirt' },
    { name: 'SLEEVELESS', link: '/sleeveless' },
    { name: 'SWEATSHIRT', link: '/sweatshirt' },
    { name: 'HOODIE', link: '/hoodie' },
    { name: 'SKIRT', link: '/skirt' },
    { name: 'CASUAL_PANTS', link: '/casual_pants' },
    { name: 'DENIM', link: '/denim' },
    { name: 'SHORTS', link: '/shorts' },
    { name: 'LEGGINGS', link: '/leggings' },
    { name: 'FLARE', link: '/flare' },
    { name: 'A-LINE', link: '/a-line' },
    { name: 'H-LINE', link: '/h-line' },
    { name: 'PATTERN', link: '/pattern' },
    { name: 'PLAIN', link: '/plain' },
    { name: 'CHIFFON', link: '/chiffon' },
    { name: 'LACE', link: '/lace' },
    { name: 'GUEST_LOOK', link: '/guest_look' },
    { name: 'DRESS', link: '/dress' },
    { name: 'SLACKS', link: '/slacks' },
    { name: '', link: '/' },
  ];

  return (
    <>
      <div className={`${styles.wrapper} ${isOpen ? styles.open : ""}`}>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <a href={category.link}>{category.name}</a>
            </li>

          ))}
          <li className="dep1-li">
            <a>
              <img src="" alt="" />
              BEST 100</a>

            {/* 2depth */}
            <ul>
              <li className="dep2-li">
                <a href="">OUTER</a>

                {/* 3depth */}
                <ul>
                  <li className="dep3-li">
                    <a href="">자켓</a>
                  </li>
                  <li className="dep3-li">
                    <a href="">코트</a>
                  </li>
                  <li className="dep3-li">
                    <a href="">조끼</a>
                  </li>
                  <li className="dep3-li">
                    <a href="">패딩</a>
                  </li>
                </ul>

              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;