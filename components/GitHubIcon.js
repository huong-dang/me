import Image from "next/image";
const githubUrl = "https://github.com/huong-dang";

export default function LinkedInIcon() {
    return (
        <div className="connect">
            <style jsx>{`
                .connect {
                    margin-right: 5px;
                    margin-bottom: 5px;
                    display: inline-block;
                    border-radius: 50%;
                    border-style: solid;
                    border-width: thin;
                    padding: 7.5px 7.5px 5px 7.5px;
                    transition: background-color 0.5s ease;
                }

                .connect:hover {
                    background-color: var(--light-pink);
                    cursor: pointer;
                }

                .connect:active {
                    opacity: 0.8;
                }
            `}</style>
            <a href={githubUrl} target="_blank">
                <Image
                    width={32}
                    height={32}
                    src={"/GitHub-Mark-Light-64px.png"}
                    alt="GitHub Icon"
                />
            </a>
        </div>
    );
}
