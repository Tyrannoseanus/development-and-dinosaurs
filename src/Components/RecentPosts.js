import { Component } from "react"
import RecentPost from "./RecentPost";

class RecentPosts extends Component {
    render() {
        return (
            <div className="col s12 m8">
                <h3>Recent Posts</h3>
                <RecentPost
                    title="Connascence of Name"
                    link="/connascence/connascence-of-name"
                    description="Connascence of name is the weakest form of connascence in the static category. Connascence of name refers to when multiple components must agree on the name of a particular entity." />
                <RecentPost
                    title="Connascence"
                    link="/connascence"
                    description="In this series of blog posts, we're going to look at how we can use connascence to help drive improvements to our process and write better code. To do this, we're going to have to understand what connascence is, what it means, and how to identify it within our codebases." />
            </div>
        )
    }
}

export default RecentPosts;
