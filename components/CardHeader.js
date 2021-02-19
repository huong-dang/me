export default function CardHeader({ text }) {
    return (
        <div className="cardHeader">
            <style jsx>{`
                .cardHeader {
                    border-radius: 10px 10px 0 0;
                    color: #2d2d34;
                    height: 8vh;
                    background-color: #ebdfe5;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            `}</style>
            <b>{text}</b>
        </div>
    );
}
