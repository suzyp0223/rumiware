import React from "react";
import "../css/main.module.css";
import styles from "./sidebar.module.css";


const Sidebar: React.FC = (): React.ReactElement => {
  return (
    <>
      <div className={styles.wrapper}>
        <div>Sidebar 페이지</div>
      </div>
    </>
  );
};

export default Sidebar;