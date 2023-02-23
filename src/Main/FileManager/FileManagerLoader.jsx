import React from "react";
import FileManagerSection from "./FileManagerSection";

export default function FileManagerLoader() {
    const [files, setFiles] = React.useState([
        { name: "fileone.stl" },
        { name: "filetwo.stl" },
        { name: "filethree.stl" },
    ]);

    return <FileManagerSection files={files} />;
}
