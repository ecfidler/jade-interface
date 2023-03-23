import React from "react";

import PrinterStatusControl from "./PrinterStatusControl";

import { getPrinterData } from "../../api/api";
import ConnectionContext from "../../api/connectionContext";

export default function PrinterStatusLoader() {
    const connection = React.useContext(ConnectionContext);

    const initialPrinterData = {
        status: "asd",
        bedTemperature: 70,
        hotEndTemperature: 200,
    };

    const [printerDataStatus, setPrinterDataStatus] = React.useState(
        initialPrinterData.status
    );
    const [printerDataBedTemp, setPrinterDataBedTemp] = React.useState(
        initialPrinterData.bedTemperature
    );
    const [printerDataHotEndTemp, setPrinterDataHotEndTemp] = React.useState(
        initialPrinterData.hotEndTemperature
    );

    React.useEffect(() => {
        async function getData(interval) {
            await getPrinterData(connection.url)
                .then((res) => {
                    setPrinterDataStatus((old) => res.data.status ?? old);
                    setPrinterDataBedTemp(
                        (old) => res.data.bed_temperature ?? old
                    );
                    setPrinterDataHotEndTemp(
                        (old) => res.data.hot_end_temperature ?? old
                    );
                })
                .catch((e) => {
                    // Log here?
                    clearInterval(interval);
                    return false;
                });
        }

        const requestLoop = setInterval(() => {
            getData(requestLoop);
        }, 1000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [connection.url]);

    return (
        <PrinterStatusControl
            status={printerDataStatus}
            bedTemperature={printerDataBedTemp}
            hotEndTemperature={printerDataHotEndTemp}
        />
    );
}
