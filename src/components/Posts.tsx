import React from 'react';

type propsTypes = {
    posts:{
        postTitle: string
        publishideOn: string
    }[]
}

const Posts = ({posts}:propsTypes) => {
    return (
        <div>
            {posts.map((post)=>{
                return <>
                    <p>{post.postTitle}</p>
                    <small>{post.publishideOn}</small>
                </>
            })}
        </div>
    );
};

export default Posts;