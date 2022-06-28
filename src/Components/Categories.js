import { Component } from "react"
import { Link } from "react-router-dom";

class Categories extends Component {
    render() {
        return (
            <div className="col s12 m4">
                <h3>Categories</h3>
                <ul className="collection">
                    <Link to="/connascence" className="collection-item blue-text">
                        Connascence
                    </Link>
                </ul>
            </div>
        )
    }
}

export default Categories;
