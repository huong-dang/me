export default function CardHeader({ children }) {
    return (
        <div className="cardHeader">
            <style jsx>{`
                .cardHeader {
                    border-radius: 10px 10px 0 0;
                    height: 50px;
                    color: var(--off-white);
                    background-color: var(--electric-blue);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            `}</style>
            <b>{children}</b>
        </div>
    );
}
