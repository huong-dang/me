export default function Heading({ text }) {
    return (
        <h1 className="heading">
            {text}
            <style jsx>{`
                .heading {
                    color: white;
                    text-align: center;
                    text-shadow: 5px 5px #4e4d5c;
                }
            `}</style>
        </h1>
    );
}
