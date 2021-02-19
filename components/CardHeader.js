export default function CardHeader({ text }) {
    return (
        <div className="cardHeader">
            <style jsx>{`
                .cardHeader {
                    border-radius: 10px 10px 0 0;
                    color: var(--dark-grey);
                    height: 8vh;
                    background-color: var(--light-pink);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            `}</style>
            <b>{text}</b>
        </div>
    );
}