import React from 'react';

type listProps ={
    students: string[] | number[]
    style:React.CSSProperties
    onClick: (values:string | number)=>void
}

const List = ({students,style,onClick}:listProps) => {
    return (
        <div >
            {students.map((data,index)=>{
                return <div key={index} style={style} onClick={()=>onClick(data)} >{data}</div>
            })}
        </div>
    );
};

export default List;