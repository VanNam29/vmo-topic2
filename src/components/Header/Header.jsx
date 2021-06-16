import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


Header.propTypes = {}

function Header(props) {

    return (
        <nav className="bg-blue-100 text-center font-serif z-50 relative">
            <ul className="flex h-14 mx-36">
              <li className="w-1/4 text-2xl hover:bg-blue-200 py-4"><Link to="/count">Count</Link></li>
              <li className="w-1/4 text-2xl hover:bg-blue-200 py-4"><Link to="/calculator">Calculator</Link></li>
              <li className="w-1/4 text-2xl hover:bg-blue-200 py-4"><Link to="/todo">Todo</Link></li>
              <li className="w-1/4 text-2xl hover:bg-blue-200 py-4"><Link to="/quote">Quote</Link></li>
            </ul>
          </nav>
    )
}

export default Header;