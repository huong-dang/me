function TotalText({ total }) {
    return (
        <p>
            Showing {total} items
            <style jsx>{`
                p {
                    text-align: center;
                    color: black;
                    font-size: 12px;
                }
            `}</style>
        </p>
    );
}
export default TotalText;
