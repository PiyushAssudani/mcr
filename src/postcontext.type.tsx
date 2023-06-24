import { forumData } from "./data"

export type stateProp = typeof forumData

export type actionProp = {
    type : "SORT_BY_UPVOTES"|"SORT_LATEST" | "UP_VOTE" | "DOWN_VOTE"
    payload?: {
        id?:string
    }
}