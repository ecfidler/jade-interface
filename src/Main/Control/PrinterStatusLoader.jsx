import React from "react";

import PrinterStatusControl from "./PrinterStatusControl";

import { getPrinterStatus } from "../../api/api";

export default function PrinterStatusLoader({ connectionURL }) {
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
        const getData = async (interval) => {
            const response = await getPrinterStatus(connectionURL);

            if (!response) {
                clearInterval(interval);
                return;
            }

            setPrinterDataStatus((old) => response.data.status ?? old);
            setPrinterDataBedTemp(
                (old) => response.data.bed_temperature ?? old
            );
            setPrinterDataHotEndTemp(
                (old) => response.data.hot_end_temperature ?? old
            );
        };

        const requestLoop = setInterval(() => {
            getData(requestLoop);
        }, 1000);
    }, [connectionURL]);

    // React.useEffect(() => {
    //     async function getData(interval) {
    //         await getPrinterStatus(connectionURL)
    //             .then((res) => {
    //                 setPrinterDataStatus((old) => res.data.status ?? old);
    //                 setPrinterDataBedTemp(
    //                     (old) => res.data.bed_temperature ?? old
    //                 );
    //                 setPrinterDataHotEndTemp(
    //                     (old) => res.data.hot_end_temperature ?? old
    //                 );
    //             })
    //             .catch((e) => {
    //                 // Log here?
    //                 clearInterval(interval);
    //                 return false;
    //             });
    //     }

    //     const requestLoop = setInterval(() => {
    //         getData(requestLoop);
    //     }, 1000);
    // }, [connectionURL]);

    return (
        <PrinterStatusControl
            status={printerDataStatus}
            bedTemperature={printerDataBedTemp}
            hotEndTemperature={printerDataHotEndTemp}
        />
    );
}
