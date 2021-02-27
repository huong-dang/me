export default function Popover({ children, showPopover, updateShowPopover }) {
    const handleExit = () => updateShowPopover(false);
    return (
        <div className="popover-container">
            <style jsx>{`
                .popover-container {
                    display: ${showPopover ? "default" : "none"};
                    position: fixed;
                    top: 12.5%;
                    bottom: 12.5%;
                    left: 12.5%;
                    right: 12.5%;
                    width: 75%;
                    height: 75%;
                    border-radius: 12px;
                    padding: 12px;
                    box-shadow: 0px 0px 3px 1px black;
                    background-color: var(--off-white);
                    overflow: scroll;
                }
                @media only screen and (max-width: 600px) {
                    .popover-container {
                        top: 0;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        width: 100%;
                        height: 100%;
                        border-radius: 0;
                        padding-left: 0;
                        padding-right: 0;
                        border-style: none;
                    }
                }
                .x {
                    border-radius: 50%;
                    border-style: solid;
                    border-width: thin;
                    height: 32px;
                    width: 32px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .x:hover {
                    color: white;
                    background-color: var(--charcoal);
                    cursor: pointer;
                }
                .x:active {
                    opacity: 0.5;
                }
                .x-bar {
                    display: flex;
                    justify-content: flex-end;
                    padding: 5px;
                    height: 40%;
                }
                .popover-children {
                    height: 60vh;
                }
            `}</style>
            <div>
                <div className="x-bar">
                    <div className="x" onClick={handleExit}>
                        X
                    </div>
                </div>
                <div className="popover-children">{children}</div>
            </div>
        </div>
    );
}
