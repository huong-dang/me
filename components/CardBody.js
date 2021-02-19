import { Component } from "react";
class CardBody extends Component {
    render() {
        return (
            <div className="cardBody">
                <style jsx>{`
                    .cardBody {
                        padding: 10px;
                        border-radius: 0 0 10px 10px;
                    }
                `}</style>
                {this.props.children}
            </div>
        );
    }
}

export default CardBody;
