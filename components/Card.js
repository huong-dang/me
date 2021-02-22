export default function Card({ children }) {
    return (
        <div className="cardContainer">
            <style jsx>{`
                .cardContainer {
                    border-radius: 10px;
                    background-color: var(--powder-blue);
                    box-shadow: 12px 12px 0 0 var(--charcoal);
                    max-width: 250px;
                    margin-bottom: 20px;
                }
            `}</style>
            {children}
        </div>
    );
}
