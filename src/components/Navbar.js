import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-transparent px-3 py-6 text-center space-x-12">
            <Link to="/" className="font-medium text-white bg-transparent hover:text-violet-600">
                Home
            </Link>
            <Link to="/join-waitlist" className="font-medium text-white bg-transparent hover:text-violet-600">
                Join
            </Link>
        </nav>
    );
}

export default Navbar;