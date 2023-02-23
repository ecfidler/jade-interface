export default function ErrorElement() {
    return (
        <>
            <div
                style={{
                    width: "80vw",
                    height: "80vh",
                    background: "#FDEDB0",
                    fontFamily: "monospace",
                    padding: "15px",
                }}
            >
                <h1>Error.</h1>
                <strong>
                    Everything fucked up;{" "}
                    <span style={{ background: "#68B490" }}>
                        Ctrl + Shift + I
                    </span>{" "}
                    to read the error log
                </strong>
            </div>
        </>
    );
}
