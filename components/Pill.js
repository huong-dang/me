export default function Pill({ text }) {
    return (
        <div className="pill">
            <style jsx>{`
                .pill {
                    border-style: solid;
                    border-radius: 20px;
                    border-width: thin;
                    padding: 5px;
                    display: inline-block;
                    margin-top: 5px;
                    margin-right: 5px;
                    font-size: 12px;
                    color: var(--light-grey);
                    cursor: default;
                    text-align: center;
                }
            `}</style>
            {text}
        </div>
    );
}
