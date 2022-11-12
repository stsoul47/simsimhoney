import {Link, useLocation} from "react-router-dom";
import classNames from "classnames";

const Header = (props: {menu:{id: number, category: string, title: string, link: string, element: JSX.Element}[]}) => {
  const location = useLocation();
  return (
    <div className="app-header">
      <div className={classNames('header-left')}></div>
      <ul className={classNames('nav')}>
        {props.menu.map((res:any)=>
          <li key={res.id}>
            <Link
              className={classNames('header-link')}
              to={res.link}
            >{res.title}
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Header;