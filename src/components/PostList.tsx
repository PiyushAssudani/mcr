import React, { useContext, useState } from 'react'
import { forumData } from '../data'
import Post from './Post'
import { postContext } from '../postcontext'

const PostList = () => {
    const {forumDataState,forumDataDispatch} = useContext(postContext)
    const [sortState,setSortState] = useState("SORT_LATEST")

  return (
    <div>
        {/* <select onChange={e=>setSortState(e.target.value)}>
            <option value={"SORT_LATEST"}>Sort by latest</option>
            <option value={"SORT_BY_UPVOTES"}>Sort by upvotes</option>
        </select> */}
        <button onClick={()=>forumDataDispatch({type:"SORT_BY_UPVOTES"})}>sort by latest</button>
        <button onClick={()=>forumDataDispatch({type:"SORT_LATEST"})}>sort by latest</button>
      {forumDataState.posts.map(post=><Post {...post} key={post.postId}/>)}
    </div>
  )
}

export default PostList