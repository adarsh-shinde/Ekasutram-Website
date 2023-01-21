import {Link} from 'react-router-dom';

const Navbar = () => {

    const activeTab = ((e)=>{

    })
    return (
        <div className="navbar">

            <h1><Link to ="/" onClick ={activeTab}>Ekasutram</Link></h1>
            <div className="links">
                <Link to = "/">Home</Link>
                <Link to = "/our-team">Our Team</Link>
                <Link to = "/events">Events</Link>
            </div>
            {/* <h1><Link to ="/">The Dojo Blog</Link></h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div> */}


        </div>
    );
}

export default Navbar;