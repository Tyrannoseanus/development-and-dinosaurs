import { Component } from "react"
import Highlight from 'react-highlight'
import Categories from "../Components/Categories";
import Footer from "../Components/Footer";
import GoogleAd from "../Components/GoogleAd";
import Navigation from "../Components/Navigation";
import ConnascencePosts from "./ConnascencePosts";
import { Link } from "react-router-dom";

class ConnascenceOfType extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <div className="container">
                    <div className="section">
                        <div className="row hide-on-large-only"></div>
                        <div className="row">
                            <div className="col s12 m8">
                                <h3>Connascence of Type</h3>
                                <p>
                                    Connascence of type is the second weakest form of static connascence. Connascence of type refers to when multiple components must agree on the type of a particular entity. 
                                </p>
                                <p>
                                    Consider the following class we saw previously in <Link to={"/connascence/connascence-of-name"}>connascence of name</Link>:
                                </p>
                                <Highlight className="kotlin">
                                    {`class Dinosaur {
  fun feed(food: Food) {
    // Feed the dinosaur
  }
}`}
                                </Highlight>
                                <p>
                                    I've added the <code className="hljs">food</code> parameter here to show the connascence a little more clearly. The <code className="hljs">feed</code> function has connascence of type, in that it will only work if you pass something in with the type of <code className="hljs">Food</code>. If you try to pass anything else in, you won't be able to and the code won't compile. 
                                </p>
                                <p>
                                    Now based on this you might think that this type of connascence is only applicable to statically typed languages, but that isn't actually true. Statically typed languages are just the easiest languages to catch them in. If we were using a dynamically typed language like Javascript or Python, you would still have connascence of type between your components, it'll just be implicit rather than explicit. Consider this same function in Javascript:
                                </p>
                                <Highlight className="javascript">
                                    {`function feed(food) {
  dinosaur.satiation += food.calories
}`}
                                </Highlight>
                                <p>
                                    I've filled in the comment to make it a bit more obvious where the connascence is here. This function still has connascence of type even without an explicit type system- this code won't work for any argument passed in that doesn't conform to the expected "type", (which we previously called <code className="hljs">Food</code>), in that it needs to have a property called <code className="hljs">calories</code> that we can use to fill up our dinosaur's satiation. 
                                </p>
                                <p>
                                    After having it laid out like this, connascence of type is probably as obvious as connascence of name- if you change the type contract in one place, you need to change it everywhere that relies on that type contract (as in, things that are coupled to, or have <em>connascence of type</em> with) in order to preserve the correct functionality. 
                                </p>
                                <p>
                                    Just like connascence of name, you can't get rid of connascence of type- it's just as fundamental to the way we work with different components and entities in programming as the name is. Whenever we change the type of something that a component relies on, we always have to change all code that refers to the contract of the old type.
                                </p>
                                <p>
                                    And once again likewise with connascence of name, you can lessen the impacts of connascence of type in a codebase. To accomplish this, you do things like reduce the number of different components that interact with a single component- this reduces the blast radius of changes and means you'll need to make less changes across the codebase if you keep this information relatively self-contained. 
                                </p>
                                <p>
                                    A fairly contrived example of this would be having connascence of type across your codebase by sharing a representation between your presentation layer and your data layer- say by returning the same entity from your API that you store in the database. This might look perfectly reasonable whilst the representations are then same, but this introduces connascence of type across your application where if the data type changes in your database, it impacts the data type you return from your application- which might not always be desirable. Introducing a service or translation layer that can take one representation of an entity and convert it into another is one way of reducing (though not removing) connascence of type- you constrain the connascence to a "lower level", more tight-knit group of components which limits the blast radius of a type change to just those components. 
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

export default ConnascenceOfType;
