import { Component } from "react"

const cache = {};

class GeoAffiliateLink extends Component {
    constructor(props) {
        super(props);
        if (cache.countryCode) {
            this.state = {
                countryCode: cache.countryCode
            };
        } else {
            this.state = {
                countryCode: "US"
            };
        }
    }
    componentDidMount() {
        this.getGeoInfo()
    }
    render() {
        return (
            <a href={
                this.state.countryCode === "GB" ? this.props.gbLink : this.props.usLink
            } target="_blank" rel="noopener noreferrer">{this.props.linkDescription}</a>
        )
    }
    getGeoInfo = () => {
        if (cache.countryCode) {
            this.setState({
                countryCode: cache.countryCode
            })
        } else {
            fetch('https://ipapi.co/json/')
                .then(response => response.json())
                .then((data) => {
                    this.setState({
                        countryCode: data.country_code
                    });
                    cache.countryCode = data.country_code
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };
}

export default GeoAffiliateLink;
