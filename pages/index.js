import NavMenu from "../components/NavMenu";
import LinkedInIcon from "../components/LinkedInIcon";
import GitHubIcon from "../components/GitHubIcon";
import { useState } from "react";

export default function Home() {
    const [hideContent, setHideContent] = useState(true);

    const toggleView = () => {
        setHideContent(!hideContent);
    };

    return (
        <div className="page-container">
            <NavMenu
                pageTitle={"Huong Dang 🌻"}
                pageHeading={"huong dang"}
                special
            />
            <div className="content">
                <p>
                    Hello, I'm Huong! I'm a mid-level software engineer
                    experienced in developing APIs and building web
                    applications. My professional work experience ranges from
                    working for a 6-person startup to a 40,000+ person
                    corporation. I’m passionate about building scalable,
                    user-friendly, accessible tech that improves our world.
                </p>
                <div
                    id={`show-all${hideContent ? "" : "-hide"}`}
                    onClick={toggleView}
                >
                    Read more
                </div>
                <p id={hideContent ? "more-hide" : ""}>
                    I love cultivating and being a part of a positive community
                    of engineers that share my priorities, namely: increasing
                    the representation of{" "}
                    <a href="https://www.thebipocproject.org/" target="_blank">
                        BIPOC
                    </a>{" "}
                    persons in tech, solutioning problems with the users in
                    mind, and focusing on achieving results without
                    overengineering. Tech should serve everyone, not just those
                    who have historical and continual advantages to be at the
                    table. I’m incredibly thankful that I get to wake up
                    everyday and solve interesting problems, and I'm always here
                    to welcome more folks into this impactful and empowering
                    field.
                </p>
                <div
                    id={`show-less${hideContent ? "-hide" : ""}`}
                    onClick={toggleView}
                >
                    Read less
                </div>
                <div className="box">
                    <div id="works">
                        <h3>PROJECTS</h3>
                        <a
                            href="https://github.com/huong-dang/me"
                            target="_blank"
                        >
                            <h4>huongdang.vercel.app</h4>
                        </a>
                        <p>🛠️: React, Next, deployed with Vercel</p>
                        <p>
                            My website! I get to introduce myself to the world
                            here. I also use it as my playground to sharpen my
                            front-end skills and share (hopefully) helpful &
                            entertaining content.
                        </p>
                        <a
                            href="https://github.com/huong-dang/dear-genie"
                            target="_blank"
                        >
                            <h4>DearGenie</h4>
                        </a>
                        <p>
                            🛠️: React, Next, MongoDB, Auth0, deployed with
                            Vercel
                        </p>
                        <p>
                            A wishlist! My work-in-progress minimal web
                            application built to enable users to easily create
                            and share their wishlists.
                        </p>
                    </div>
                    <div className="boxItem">
                        <h3>SKILLS</h3>
                        <p>💻 React, Next, Express</p>
                        <p>💻 MongoDB, Postgres</p>
                        <p>💻 JavaScript, Python</p>
                        <p>💻 Vercel, Heroku, AWS</p>
                    </div>
                    <div className="boxItem">
                        <h3>CONNECT</h3>
                        <GitHubIcon />
                        <LinkedInIcon />
                    </div>
                </div>
            </div>
            <style jsx>{`
                h3 {
                    border-style: solid;
                    border-width: thin;
                    padding: 5px;
                    border-color: var(--electric-blue);
                }
                .box {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                }

                .boxItem {
                    width: 15%;
                    overflow-wrap: break-all;
                }

                #works {
                    width: 64%;
                }

                .content {
                    color: black;
                    margin-left: 15px;
                    margin-right: 15px;
                }

                @media only screen and (min-width: 768px) {
                    .content {
                        margin-left: 120px;
                        margin-right: 120px;
                    }
                }

                @media only screen and (max-width: 992px) {
                    .boxItem,
                    #works {
                        width: 100%;
                    }
                }

                .connect {
                    margin-right: 5px;
                    display: inline-block;
                    border-radius: 50%;
                    border-style: solid;
                    padding: 10px 5px 5px 10px;
                    border-width: thin;
                }

                h4 {
                    font-style: italic;
                }

                @media only screen and (min-width: 601px) {
                    #show-all,
                    #show-less,
                    #show-all-hide,
                    #show-less-hide {
                        display: none;
                    }
                }

                @media only screen and (max-width: 600px) {
                    #show-all,
                    #show-less {
                        text-decoration: underline;
                        cursor: pointer;
                        font-weight: bold;
                        font-size: 12px;
                        color: var(--charcoal);
                        transition: color 0.5s ease;
                    }

                    #show-all:hover,
                    #show-less:hover {
                        color: var(--powder-blue);
                    }

                    #show-all:active,
                    #show-less:active {
                        color: var(--electric-blue);
                    }

                    #show-all-hide,
                    #show-less-hide,
                    #more-hide {
                        display: none;
                    }
                }
            `}</style>
        </div>
    );
}
