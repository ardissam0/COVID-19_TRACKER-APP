import React from 'react';
import '../CSS/InfoBox.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function InfoBox({title, cases, total, activeC, activeR, activeD, isBlack, isRed, ...props }) {
    return (
        <Card  
        onClick={props.onClick}
        className={`infoBox ${activeR && "infoBox--selected"} ${activeD && "infoBox--selected2"} ${
          activeC && "infoBox--red"
        }`}
        >
            <CardContent>
                <Typography className="infoBox__title" color='textSecondary' gutterBottom>
                    {title}
                </Typography>

                <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"} ${isBlack && "infoBox__deaths--black"}`}>{cases}</h2>

                <Typography className="infoBox__total" color='textSecondary'>
                    {total} Total
                </Typography>

            </CardContent>
        </Card>
    )
}

export default InfoBox
