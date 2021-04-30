import React from 'react';
import '../CSS/Table.css';
import numeral from "numeral";

function Table2(props) {
    return (
        <div className='table'>
            {props.states.map(item => (
                <tr>
                    <td>{item.state}</td>
                    <td>
                        <strong>{numeral(item.cases).format("0,0")}</strong>
                    </td>
                </tr>
            ))}
        </div>
    )
}

export default Table2