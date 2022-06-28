import { Component } from "react"
import { Link } from "react-router-dom";

class RecentPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            link: props.link,
            description: props.description
        }
    }

    render() {
        return (
            <div class="card horizontal">
                <div class="card-stacked">
                    <div class="card-content">
                        <span class="card-title">
                            <Link to={this.state.link}>{this.state.title}</Link>
                        </span>
                        <p>
                            {this.state.description}
                        </p>
                    </div>
                    <div class="card-action">
                        <Link to={this.state.link}>Read more</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default RecentPost;
