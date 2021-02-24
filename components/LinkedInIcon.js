import Image from "next/image";
const linkedInUrl = "https://www.linkedin.com/in/huong-dang/";

export default function LinkedInIcon() {
    return (
        <div className="connect">
            <style jsx>{`
                .connect {
                    margin-right: 5px;
                    display: inline-block;
                    border-radius: 50%;
                    border-style: solid;
                    padding: 10px 5px 5px 10px;
                    border-width: thin;
                    background-color: white;
                    transition: background-color 0.5s ease;
                    border-color: var(--charcoal);
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
            <a href={linkedInUrl} target="_blank">
                <Image
                    width={36}
                    height={32}
                    src={"/LI-In-Bug.png"}
                    alt="LinkedIn Icon"
                />
            </a>
        </div>
    );
}
