import React,{useState,useRef} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import ObjectPropsPost from "./components/ObjectPropsPost";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
    const [posts,setPosts] = useState([
        {id:1,title:'аа',body:'бб'},
        {id:2,title: 'гг 2', body:'аа'},
        {id:3, title: 'вв 3', body:'яя'}
    ])

    const [posts2,setPosts2] = useState([
        {id:1,title:'Pyton',body:'Description'},
        {id:2,title: 'Pyton 2', body:'Description'},
        {id:3, title: 'Pyton 3', body:'Description'}
    ])

    const [selectedSort,setSelectedSort] = useState('');
    const [searchQuery,setSearchQuery] = useState('');
    const removePost = (post) =>{
        setPosts(posts.filter(p=>p.id !== post.id));
    }

    const  createPost=(newPost)=>{
            setPosts([...posts,newPost])
    }

    const sortPosts = (sort) =>{
        setSelectedSort(sort);
        setPosts([...posts].sort((a,b)=>a[sort].localeCompare(b[sort])))
        console.log(sort);
    }


    return (
    <div className="App">


      <Counter/>
        <ClassCounter/>
        <div className="App">
            <PostItem value={"2222"} item={{title:0}} number={1}/>
            <ObjectPropsPost post={{id:1,title:'Javascript',body:'Description'}} key={21}/>
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MyInput
                    value={searchQuery}
                    onChange={e=>setSearchQuery(e.target.value)}
                    placeholder="Поиск..."
                />
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    options={[
                    {value:'title', name:'По названию'},
                    {value:'body',name:'По описанию'}
                ]} defaultValue="Сортировка"/>
            </div>
            {posts.length !==0
                ?<PostList remove={removePost} posts={posts} title="Посты про JS"/>
                :<h1 style={{textAlign:'center'}}>Посты не найдены!</h1>}

            <PostList posts={posts2} title="Посты про Pyton"/>
        </div>
    </div>
  );
}

export default App;
