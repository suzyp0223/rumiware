// 라우팅 되는 하면 컴포넌트 -
// 브라우저 url바뀌고 그에 맞게 페이지 전환,
// 실제로 화면을 다시 불러오지 않음{SPA}

import React from "react";

const OrderList: React.FC = (): React.ReactElement => {
  return (
    <>
      <div className="${TM_FILENAME_BASE.toLowerCase()}">
        <div>OrderList 페이지</div>
      </div>
    </>
  );
};

export default OrderList;