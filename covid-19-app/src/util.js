import React from 'react';
import numeral from 'numeral';
import {Circle, Popup} from 'react-leaflet';

const casesTypeColors = {
    cases: {
        hex: "#CC1034",
        multiplies: 800,
    },
    recovered: {
        hex: "#7dd71d",
        multiplies: 1200,
    },
    deaths: {
        hex: "#fb4443",
        multiplies: 2000,
    },
};

export const sortData = (data) => {
    const sortedData = [...data];

    sortedData.sort((a, b) => {
        if (a.cases > b.cases) {
            return -2;
        } else {
            return 1;
        }
    });
    return sortedData;
};

export const showDataOnMap = (data, casesType='cases') =>
    data.map((country) => (
        <Circle 
            center={[country.countryInfo.lat, country.countryInfo.long]}
            fillOpacity={0.4}
            color={casesTypeColors[casesType].hex}
            fillColor={casesTypeColors[casesType].hex}
            radius={
                Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
            }
        >
        <Popup>
            <h1>popup</h1>
        </Popup>
        </Circle>
    ));