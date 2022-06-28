import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Navigation from "../Components/Navigation";

function About() {
    return (
        <div>
            <Navigation path="about" />
            <div className="container">
                <h1>About</h1>
                <p>
                    Development and Dinosaurs is like any other development blog, except it has dinosaurs, and sometimes it isn't about development. This site contains blog posts about different areas of my interest in particular and is not intended to be a defacto source of truthful fact- this is just my opinion on things, and things that I think. Any statement of fact is purely accidental. 
                </p>
                <p>
                    Ok that is probably all I need to say- maybe even more than I need to say. I don't even know why I have an about page. It's not like anyone is going to be reading this- if anyone is reading the blog posts in the first place! 
                </p>
                <p>
                    Ok that's not entirely true- not the part about nobody reading the posts- that part is mostly true. But I do know why I have this page. It's because the navigation looked pretty empty with nothing there, so this is a filler page to make it look better. 
                </p>
                <p>
                    And the reason this page has so many paragraphs of "content" is to make sure the footer at the bottom is at the bottom of the page, without me having to look up how to do that using CSS or whatever. It would have been a much better ruse if I had enough to talk about that I didn't need to spend 3/4 of the content explaining the lack of content.
                </p>

                <h2>Legal Stuff</h2>
                <p>
                    There's some legal stuff we need to have too- like a link to our <Link to="privacy">Privacy Policy</Link> and... that's probably it?
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default About;
