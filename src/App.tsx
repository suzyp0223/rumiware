import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Router from './components/router/Router';

import TopNav from './components/layout/TopNav';
import Footer from './components/layout/Footer';


function App() {

  return (
    <RecoilRoot>
      <BrowserRouter>
      {/* 사이드바, 토글 공부하기 250325화 */}
        {/* <input type="checkbox" id="side-menu" className="drawer-toggle" /> */}
        <section className='drawer-content'>
          <TopNav />
          <section className='main pt-16'>
            <Router />
          </section>
          <Footer />
        </section>
        {/* <Drawer /> */}
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
//   .drawer - toggle: checked + .drawer - content {
//   display: block; /* 사이드바를 표시 */
// }

// .drawer - toggle: not(: checked) + .drawer - content {
//   display: none; /* 사이드바를 숨김 */
// }