import React from 'react';

type listProps<T> ={
    students: T[]
    style:React.CSSProperties
    onClick: (values: T )=>void
}

const List = <T extends {}>({students,style,onClick}:listProps<T>) => {
    return (
        <div >
            {students.map((data,index)=>{
                return <div key={index} style={style} onClick={()=>onClick(data)} >{data.firstName}</div>
            })}
        </div>
    );
};

export default List;