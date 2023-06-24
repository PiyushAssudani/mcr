import { createContext, useReducer } from "react";
import { forumData } from "./data";
import { actionProp, stateProp } from "./postcontext.type";
type postContextType = {
    forumDataState: stateProp
    forumDataDispatch: React.Dispatch<actionProp>
}
export const postContext = createContext<postContextType>({} as postContextType)

export const PostContextProvider = ({children}: {children:React.ReactNode}) => {

    const postReducer = (state:stateProp,action:actionProp) => {
        switch (action.type) {
            case "UP_VOTE":
                console.log(state)
                return {...state,posts:[...state.posts.map(post => post.postId === action.payload.id ?{...post ,upvotes:post.upvotes+1} : {...post})]}

            case "DOWN_VOTE":
                console.log(state)
                return {...state,posts:[...state.posts.map(post => post.postId === action.payload.id ?{...post ,upvotes:post.upvotes-1} : {...post})]}
            case "SORT_LATEST":
                const dateData = state.posts.map(post=>({...post,createdAt:new Date(post.createdAt)})).sort((a,b)=>a.createdAt - b.createdAt).map(post=>({...post,createdAt:post.createdAt.toISOString()}))
                console.log(dateData)
                return {...state,posts:dateData}

            case "SORT_BY_UPVOTES":
                return {...state,posts:state.posts.sort((a,b)=>b.upvotes- a.upvotes)}

        }}

    const intialState :stateProp = forumData

    const [forumDataState,forumDataDispatch] = useReducer(postReducer,intialState)

    return<postContext.Provider value={{forumDataState,forumDataDispatch}}>
            {children}
        </postContext.Provider>

}