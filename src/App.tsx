import {Route, Routes} from "react-router-dom";

import { MainLayout, Main, SubPage1 } from "@pages/index";
import '@assets/scss/App.scss';

const App = () => {
  const menu = [
    {id:1, category:'main', title:'main', link: '/', element: <Main/> },
    {id:2, category:'main', title:'subPage1', link: '/sub1', element: <SubPage1/> },
  ]
  return (
    <Routes>
      <Route element={<MainLayout menu={menu} />}>
        { menu.map((res) => res.category === 'main' ? <Route path={res.link} element={res.element}/> : null)}
        {/*<Route path='/' element={<Main />}/>*/}
        {/*<Route path='/sub1' element={<SubPage1 />}/>*/}
      </Route>
    </Routes>
  )
};

export default App;