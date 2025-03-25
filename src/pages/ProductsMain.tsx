// 라우팅 되는 하면 컴포넌트 -
// 브라우저 url바뀌고 그에 맞게 페이지 전환,
// 실제로 화면을 다시 불러오지 않음{SPA}

import React from "react";
import "../components/css/main.module.css";
import styles from "./productsMain.module.css";


const ProductsMain: React.FC = (): React.ReactElement => {
  return (
    <>
      <main className={styles.wrapper}>
        <h2>Welcome to RumiWare</h2>
        <div>

          {/* 무한 스크롤 콘텐츠 */}


        </div>
      </main>
    </>
  );
};

export default ProductsMain;