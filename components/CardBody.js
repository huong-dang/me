export default function CardBody({ children }) {
    return (
        <div className="cardBody">
            <style jsx>{`
                .cardBody {
                    padding: 10px;
                    border-radius: 0 0 10px 10px;
                }
            `}</style>
            {children}
        </div>
    );
}
