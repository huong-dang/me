export default function Heading({ children, special = false }) {
    return (
        <h1 className={`heading${special ? "-special" : ""}`}>
            {children}
            <style jsx>{`
                .heading {
                    color: var(--electric-blue);
                    text-align: center;
                    text-shadow: 4px 2px var(--powder-blue);
                }

                .heading-special {
                    color: var(--electric-blue);
                    text-align: center;
                    text-shadow: 4px 2px var(--powder-blue);
                    overflow: hidden; /* Ensures the content is not revealed until the animation */
                    border-right: 15px solid var(--powder-blue); /* The typwriter cursor */
                    white-space: nowrap; /* Keeps the content on a single line */
                    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
                    letter-spacing: 0.1em; /* Adjust as needed */
                    animation: animated-text 1.5s steps(29, end) 1s 1 normal
                            both,
                        animated-cursor 1s steps(29, end) infinite;
                    margin-block-start: 0.67em;
                    margin-block-end: 0.67em;
                    padding-bottom: 5px;
                }

                @keyframes animated-text {
                    from {
                        width: 0;
                    }
                    to {
                        width: 225px;
                    }
                }

                /* cursor animations */
                @keyframes animated-cursor {
                    from {
                        border-right-color: var(--powder-blue);
                    }
                    to {
                        border-right-color: transparent;
                    }
                }
            `}</style>
        </h1>
    );
}
