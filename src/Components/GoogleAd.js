import { Component } from "react"

class GoogleAd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            adSlot: props.adSlot
        }
    }

    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render() {
        return (
            <div className="ads">
                <ins className="adsbygoogle"
                    style={{ display: "block" }}
                    data-ad-client="ca-pub-5205110041821805"
                    data-ad-slot={this.state.adSlot}
                    data-ad-format="auto"
                    data-full-width-responsive="true"></ins>
            </div>
        )
    }
}

export default GoogleAd;
