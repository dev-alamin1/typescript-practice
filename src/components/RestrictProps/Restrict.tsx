/**
 * conditon sapekkhe akadhik porps pathano jabe na .. akti props pathale, arekti pathano jabe na
 */

import React from 'react';

type restictProps = {
    value:number
    isZero?: boolean
    isNegative?:boolean
    isPositive?:boolean
}

const Restrict = ({value,isZero, isNegative, isPositive}:restictProps) => {
    return (
        <div>
             {value} {isZero && 'Zero'} {isNegative && 'Negative'} {isPositive && 'Positive'}
        </div>
    );
};

export default Restrict;