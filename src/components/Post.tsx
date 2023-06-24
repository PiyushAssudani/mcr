import { FaBeer } from 'react-icons/fa';
import { postContext } from '../postcontext';
import {useContext} from "react"
type postProps = {
    postId : string;
    username : string;
    name: string;
    picUrl : string;
    post : string
    postDescription: string
    upvotes:number
    downvotes : number
    tags : string[]
    createdAt: string
    comments : {}[]
}

const Post = ({postId,username,name,picUrl,post,postDescription,upvotes,downvotes,tags,createdAt,comments} : postProps) => {

    const {forumDataState,forumDataDispatch} = useContext(postContext)

    const upvote = () => {
        forumDataDispatch({type:'UP_VOTE',payload:{
            id:postId
        }})
    }
    const downvote = () => {
        forumDataDispatch({type:'DOWN_VOTE',payload:{
            id:postId
        }})}
  return (
    <div>
        <div>
            <button className='upvoteButton' onClick={()=>upvote()}>+</button>
            <p>{upvotes}</p>
            <button className='upvoteButton' onClick={()=>downvote()}>-</button>
        </div>
        <div>
            <div>
                <img src='picUrl'/>
                <p>Posted by @{username} • {createdAt}</p>
                <h3>{post}</h3>
                <p>{postDescription}</p>
                <hr/>
                <div>
                    <FaBeer/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post