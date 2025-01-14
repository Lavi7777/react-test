import React, {useRef, useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post,setPost]=useState({title:'',body:''});
    const bodyInputRef = useRef();
    const addNewPost = (e) =>{
        e.preventDefault();

        const newPost = {
            ...post,id:Date.now()
        }
        create(newPost);
        setPost({title: '',body:''})

    }
    return (
        <form>
            {/*Управляемый компонент*/}
            <MyInput
                value = {post.title}
                onChange = {e=>setPost({...post,title: e.target.value})}
                type="text"
                placeholder="Название поста"/>
            {/*Не управляемый компонент*/}
            <MyInput
                value={post.body}
                ref={bodyInputRef}
                onChange = {e=>setPost({...post,body: e.target.value})}
                type="text"
                placeholder="Описание поста"/>
            <MyButton  onClick={addNewPost} >Создать пост</MyButton>
        </form>
    );
};

export default PostForm;