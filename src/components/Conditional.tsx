/*
    condtionally show status ,
    we can set a props default string value,
    and make condtion by using props defalutl value;

    if we pass another value which is not default props value, then it will occure error

*/

import React from 'react';

type statusType = {
    status : "loading" | "error" | "loaded"
}

let message = "";

const Conditional = ({status}:statusType) => {
    if(status === "error")
    {
        message = "data fetch error"

    }else if(status === "loaded"){
        message = "data loaded successfully"
    }
    else if(status === "loading")
    {
        message = "Data is loading"
    }

    return (
        <div>
            {message}
        </div>
    );
};

export default Conditional;