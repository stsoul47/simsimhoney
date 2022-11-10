import {Link, useLocation} from "react-router-dom";

const Header = (props: {menu:{id: number, category: string, title: string, link: string, element: JSX.Element}[]}) => {
  const location = useLocation();
  return (
    <div className="app-header">
      <ul>
        {props.menu.map((res:any)=>
          <li key={res.id}>
            <Link
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