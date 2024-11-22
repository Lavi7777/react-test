import React from 'react';
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {

    return (
            <div className="post">
                <div className="post__content">
                    <div>Props</div>
                   <div>
                      <div><strong>1. {props.value}</strong></div>
                      <div><strong>2. {props.item.title}</strong></div>
                      <div><strong>3. {props.number}</strong></div>
                   </div>
                    <strong> 1. Javascript</strong>
                    <div>
                        Javascript - язык программирования
                    </div>
                </div>
                <div className="post__btns">
                    <MyButton>
                        Удалить
                    </MyButton>
                </div>
            </div>

    );
};

export default PostItem;