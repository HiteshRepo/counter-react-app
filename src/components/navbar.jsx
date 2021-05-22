
const Navbar = ({totalCounters}) => {
    console.log("Navbar - Rendered")
    return ( 
        <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="http://localhost:3000/">
                Navbar
                <span className="badge badge-pill badge-secondary m-2">
                    {totalCounters}
                </span>
            </a>
        </div>
        </nav>
     );
}
 
export default Navbar;