import React from "react";
import FileManagerSection from "./FileManagerSection";

export default function FileManagerLoader({ updateActiveFileName }) {
    const [files, setFiles] = React.useState([
        { name: "fileone.stl" },
        { name: "filetwo.stl" },
        { name: "filethree.stl" },
        { name: "3dBenchy.stl" },
    ]);

    const updateActiveFile = (fileName) => {
        updateActiveFileName(fileName);
    };

    return (
        <FileManagerSection files={files} updateActiveFile={updateActiveFile} />
    );
}
