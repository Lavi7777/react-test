import React from 'react';
import ObjectPropsPost from "./ObjectPropsPost";

const PostList = ({posts,title,remove}) => {


    return (
        <div>
            <h1 style={{textAlign:'center'}}>{title}</h1>
            {posts.map((post,index)=>
                <ObjectPropsPost remove={remove} number={index+1} post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;