import { Component } from "react"
import { Link } from "react-router-dom";

class ConnascencePosts extends Component {
    render() {
        return (
            <div className="col s12 m4">
                <h3>More posts</h3>
                <ul className="collection">
                    <Link to="/connascence" className="collection-item blue-text">
                        Connascence
                    </Link>
                    <Link to="/connascence/connascence-of-name" className="collection-item blue-text">
                        Connascence of Name
                    </Link>
                    <Link to="/connascence/connascence-of-type" className="collection-item blue-text">
                        Connascence of Type
                    </Link>
                </ul>
            </div>
        )
    }
}

export default ConnascencePosts;
