import React from "react";

import PrinterStatusControl from "./PrinterStatusControl";

export default function PrinterStatusLoader({}) {
    const initialPrinterData = {
        status: "",
        bedTemperature: "",
        hotEndTemperature: "",
    };

    const [printerData, setPrinterData] = React.useState(initialPrinterData);

    return (
        <PrinterStatusControl
            status={printerData.status}
            bedTemperature={printerData.bedTemperature}
            hotEndTemperature={printerData.hotEndTemperature}
        />
    );
}
