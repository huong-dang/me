export default function Card({ children }) {
    return (
        <div className="cardContainer">
            <style jsx>{`
                .cardContainer {
                    border-radius: 10px;
                    background-color: var(--pink);
                    box-shadow: 12px 12px 0 0 var(--dark-grey);
                    max-width: 250px;
                    margin-bottom: 20px;
                }
            `}</style>
            {children}
        </div>
    );
}
