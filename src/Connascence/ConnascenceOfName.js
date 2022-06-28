import { Component } from "react"
import Highlight from 'react-highlight'
import Categories from "../Components/Categories";
import Footer from "../Components/Footer";
import GoogleAd from "../Components/GoogleAd";
import Navigation from "../Components/Navigation";
import ConnascencePosts from "./ConnascencePosts";

class ConnascenceOfName extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <div className="container">
                    <div className="section">
                        <div className="row hide-on-large-only"></div>
                        <div className="row">
                            <div className="col s12 m8">
                                <h3>Connascence of Name</h3>
                                <p>
                                    Connascence of name is the weakest form of connascence in the static category. Connascence of name refers to when multiple components must agree on the name of a particular entity.
                                </p>
                                <p>
                                    Consider the following class:
                                </p>
                                <Highlight className="kotlin">
                                    {`class Dinosaur {
  fun feed() {
    // Feed the dinosaur
  }
}`}
                                </Highlight>
                                <p>
                                    Our <code className="hljs">Dinosaur</code> class has connascence of name- both for the class declaration and the method declaration. If we change the class from <code className="hljs">Dinosaur</code> to <code className="hljs">Chicken</code>, anything that references the class by name will break. If we change the method name from <code className="hljs">feed()</code> to <code className="hljs">devour()</code> or anything else, anything that is using that method will break. All components that use <code className="hljs">Dinosaur</code> are dependent on the names that it uses.
                                </p>
                                <p>
                                    Pretty obvious right? As previously mentioned, connascence of name is the weakest form of connascence, but it still does describe the concept of connascence in a simple, easy to understand manner. If you change something in one place (like the name of a class), you have to change it somewhere else to maintain correctness.
                                </p>
                                <p>
                                    You can't get rid of connascence of name- it's fundamental to the way we refer to different components and entities in programming. Whenever we change the name of a component in it's declaration, we always have to change all code that refers to the old name. This is why we refer to connascence of name as the weakest form of connascence- it's littered all over our codebases, and there's not anything we can do about it. Fortunately as you might have surmised already- it's also not a big deal.
                                </p>
                                <p>
                                    To lessen the impacts of connascence of name in a codebase, you can do things like reduce the number of different components that interact with a single component- this reduces the blast radius of name changes. Additionally, taking care when naming things and choosing a good name will help you not have to change it in the future- but this is easier said than done!
                                </p>
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

export default ConnascenceOfName;
