import React from 'react';
import MyButton from "./UI/button/MyButton";

const ObjectPropsPost = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <div>Props</div>
                <div>
                    <div><strong>1. {props.number}</strong></div>
                    <div><strong>2. {props.post.title}</strong></div>
                    <div><strong>3. {props.post.body}</strong></div>
                </div>

            </div>
            <div className="post__btns">
                <MyButton onClick={()=>props.remove(props.post)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    );
};

export default ObjectPropsPost;