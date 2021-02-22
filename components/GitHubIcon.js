import Image from "next/image";
const githubUrl = "https://github.com/huong-dang";

const dark = "/GitHub-Mark-64px.png";
const light = "/GitHub-Mark-Light-64px.png";

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
                    background-color: var(--powder-blue);
                    border-color: var(--electric-blue);
                    cursor: pointer;
                }

                .connect:active {
                    opacity: 0.8;
                }
            `}</style>
            <a href={githubUrl} target="_blank">
                <Image width={32} height={32} src={dark} alt="GitHub Icon" />
            </a>
        </div>
    );
}
