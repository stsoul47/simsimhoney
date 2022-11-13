import { Header, Footer } from '@components/index';
import {Outlet} from "react-router-dom";

/**
 * Error 페이지 말고, Layout을 지정
 *
 * @author jslee
 * @since 2022-11-10
 */
const MainLayout = (props: {menu:{id: number, category: string, title: string, link: string, element: JSX.Element}[]}) => {
  return (
    <div className="app">
      {/* header를 선언하는 부분 */}
      <Header menu={props.menu} />
      {/* router에 의해서 동작할 페이지가 render되는 부분 */}
      <div className="container">
        <Outlet />
      </div>
      {/* Footer로 동작할 부분 */}
      <Footer />
    </div>
  )
}
export default MainLayout;