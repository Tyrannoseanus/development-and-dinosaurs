import { Component } from "react"
import { Link } from "react-router-dom";
import Categories from "../Components/Categories";
import Footer from "../Components/Footer";
import GeoAffiliateLink from "../Components/GeoAffiliateLink";
import GoogleAd from "../Components/GoogleAd";
import Navigation from "../Components/Navigation";
import ConnascencePosts from "./ConnascencePosts";

class Connascence extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <div className="container">
                    <div className="section">
                        <div className="row hide-on-large-only"></div>
                        <div className="row">
                            <div className="col s12 m8">
                                <h3>Connascence</h3>
                                <p>
                                    In this series of blog posts, we're going to look at how we can use connascence to help drive improvements to our  process and write better code. To do this, we're going to have to understand what connascence is, what it means, and how to identify it within our codebases.
                                </p>
                                <h4>What is connascence?</h4>
                                <blockquote>
                                    A relationship between two or more elements of software in which changing one necessitates changing the others in order to maintain overall correctness; a metric for such a relationship.
                                </blockquote>
                                <p>
                                    Connascence is a term used to describe the relationship and taxonomy of dependencies between two software components. Connascence as a term was first used by Meilir Page-Jones in the 90's in the book <GeoAffiliateLink gbLink="https://amzn.to/3s6Keb1" usLink="https://amzn.to/3vBrxy7" linkDescription="What Every Programmer Should Know about Object-Oriented Design" />, which was later updated to use UML instead of Page-Jones's own modelling language in <GeoAffiliateLink gbLink="https://amzn.to/3I8QdSd" usLink="https://amzn.to/3Mq5kce" linkDescription="Fundamentals of Object-Oriented Design in UML (Addison-Wesley Object Technology Series)" />
                                </p>
                                <p>
                                    Put more simply, connascence describes the level of coupling within a codebase, which can be used to reason about the code quality. The more coupled a codebase is, the more difficult it becomes to change.
                                </p>
                                <p>
                                    There are two broad categories of connascence- static and dynamic. Within these categories there are 9 different types or levels. Finally, connascence also has three properties which can help us decide how bad the particular level of connascence is.
                                </p>
                                <p>
                                    The concept of connascence has not seen widespread popularity in the development community. However, there are a few pieces of information out there such as <Link to="https://vimeo.com/10837903" target="_blank" rel="noopener noreferrer">this talk</Link> by Jim Weirich and a series of <Link to="https://silkandspinach.net/tag/connascence/" target="_blank" rel="noopener noreferrer">blog posts</Link> and <Link to="https://www.youtube.com/watch?v=fSr8LDcb0Y0" target="_blank" rel="noopener noreferrer">a talk</Link> by Kevin Rutherford.
                                </p>
                                <h4>What can we do with connascence?</h4>
                                <p>
                                    We can use connascence to guide our software development practices, to write more maintainable code. By keeping connascence in mind when writing code, we can reduce the coupling within. By learning to identify connascence when we see it, we can perform refactoring to reduce connascence and improve quality.
                                </p>
                                <p>
                                    That's where this series of posts come in. We're going to go over the different levels of connascence and how to spot them in the wild (or at least in some contrived examples), as well as touch on the different properties of connascence to decide when we need to act. We'll then work through how to remove or replace the connascence with something else to avoid trouble with tightly coupled code in the future.
                                </p>
                                <p>
                                    We're going to cover the following areas:
                                </p>

                                <h4>Static Connascence</h4>
                                <ul className="bullet-list">
                                    <li className="collection-item"><Link to="/connascence/connascence-of-name" className="collection-item blue-text">
                                        Connascence of Name
                                    </Link></li>
                                    <li className="collection-item">Connascence of Type</li>
                                    <li className="collection-item">Connascence of Meaning</li>
                                    <li className="collection-item">Connascence of Position</li>
                                    <li className="collection-item">Connascence of Algorithm</li>
                                </ul>

                                <h4>Dynamic Connascence</h4>
                                <ul className="bullet-list">
                                    <li className="collection-item">Connascence of Execution</li>
                                    <li className="collection-item">Connascence of Timing</li>
                                    <li className="collection-item">Connascence of Value</li>
                                    <li className="collection-item">Connascence of Identity</li>
                                </ul>

                                <h4>Properties of Connascence</h4>
                                <ul className="bullet-list">
                                    <li className="collection-item">Strength</li>
                                    <li className="collection-item">Locality</li>
                                    <li className="collection-item">Degree</li>
                                </ul>
                            </div>
                            <Categories />
                            <ConnascencePosts />
                            <GoogleAd adSlot="2237470310" />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Connascence;
