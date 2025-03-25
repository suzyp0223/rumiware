import React from "react";
import "../css/main.module.css";
import styles from "./sidebar.module.css";
import { Category } from "../common/Category";

interface SidebarProps {
  isOpen: boolean;
}

// 동적으로 렌더링하여 사이드바 카데고리 생성
const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {

  return (
    <>
      <div className={`${styles.wrapper} ${isOpen ? styles.open : ""}`}>
        <ul>
          {Category.map((category, index) => (
            <li key={index}>
              <a href={category.link}>{category.name}</a>
            </li>

          ))}

          {/* 3dep으로 만들기 */}
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