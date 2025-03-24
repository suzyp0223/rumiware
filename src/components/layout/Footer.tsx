import React from "react";
import "../css/main.module.css";
import styles from "./footer.module.css";


const Footer: React.FC = (): React.ReactElement => {
  return (
    <>
      <div className={styles.wrapper}>
        <div>Footer 페이지</div>
      </div>
    </>
  );
};

export default Footer;