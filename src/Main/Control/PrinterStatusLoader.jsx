import React from "react";

import PrinterStatusControl from "./PrinterStatusControl";

export default function PrinterStatusLoader({}) {
    const initialPrinterData = {
        status: "",
        temperature: "",
    };

    const [printerData, setPrinterData] = React.useState(initialPrinterData);

    return (
        <PrinterStatusControl
            status={printerData.status}
            temperature={printerData.temperature}
        />
    );
}
