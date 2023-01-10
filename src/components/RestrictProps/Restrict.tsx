/**
 * conditon sapekkhe akadhik porps pathano jabe na .. akti props pathale, arekti pathano jabe na
 */

import React from 'react';

type restrictValueType = {
    value:number
}

type zero = restrictValueType & {
    isZero?: boolean
    isNegative?:never
    isPositive?:never
}

type negative = restrictValueType & {
    isZero?: never
    isNegative?:boolean
    isPositive?:never
}

type positive = restrictValueType & {
    isPositive?: boolean
    isNegative?:never
    isZero?:never
}

type restictProps = zero | negative | positive

const Restrict = ({value,isZero, isNegative, isPositive}:restictProps) => {
    return (
        <div>
            {value} {isZero && "Zero"} {isNegative && "Negative"} {isPositive && "Positive"}
        </div>
    );
};

export default Restrict;