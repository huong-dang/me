export default function Pill({ text }) {
    return (
        <div className="pill">
            <style jsx>{`
                .pill {
                    border-style: solid;
                    border-radius: 20px;
                    border-width: thin;
                    padding: 1vh;
                    display: inline-block;
                    margin-top: 1vh;
                    margin-right: 1vh;
                    font-size: 12px;
                    border-color: #ebdfe5;
                    color: #ffffff;
                    cursor: default;
                    font-weight: bold;
                    text-align: center;
                }
            `}</style>
            {text}
        </div>
    );
}
