export default function Heading({ text, special = false }) {
    return (
        <h1 className={`heading${special ? "-special" : ""}`}>
            {text}
            <style jsx>{`
                .heading {
                    color: white;
                    text-align: center;
                    text-shadow: 5px 5px var(--dark-grey);
                }

                .heading-special {
                    color: white;
                    text-align: center;
                    text-shadow: 5px 5px var(--dark-grey);
                    overflow: hidden; /* Ensures the content is not revealed until the animation */
                    border-right: 15px solid var(--pink); /* The typwriter cursor */
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
                        border-right-color: var(--pink);
                    }
                    to {
                        border-right-color: transparent;
                    }
                }
            `}</style>
        </h1>
    );
}
