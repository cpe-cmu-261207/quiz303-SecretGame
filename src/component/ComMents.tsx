import { useState } from "react"
import { comments, CommentType } from "../data/comments"
import Repile from "./Repile"

const ComMentsPost = (state : CommentType) => {
    console.log(comments.map(x => x))

    return(
       <div className="">
          {/* normal comment */}
          <div className="flex p-2 items-start space-x-2">
            <img className="w-10 w-10 rounded-full" src={state.userImagePath}></img>
            <div className="bg-gray-200 rounded-lg p-2">
              <p className="font-semibold">{state.username}</p>
              <p>{state.commentText}</p>
              {/* like section (จะไม่แสดงถ้าไม่มีใครไลค์เลย) */}
              {state.likeNum > 0 ? 
              <div className='flex items-center'>
                <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                <p className='text-gray-500'>{state.likeNum}</p>
              </div>
              : ''}
            </div>
          </div>

          {state.replies.map(x => <Repile 
            username={x.username}
            userImagePath={x.userImagePath}
            commentText={x.commentText}
            likeNum={x.likeNum}
            replies={x.replies}
            />
            )}
        </div>
    )
}

export default ComMentsPost