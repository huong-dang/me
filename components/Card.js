import { Component } from "react";
class Card extends Component {
    render() {
        return (
            <div className="cardContainer">
                <style jsx>{`
                    .cardContainer {
                        border-radius: 10px;
                        background-color: var(--pink);
                        margin-bottom: 5vh;
                        box-shadow: 12px 12px 0 0 var(--dark-grey);
                        max-width: 250px;
                    }
                `}</style>
                {this.props.children}
            </div>
        );
    }
}

export default Card;
