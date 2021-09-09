import { CommentType } from "../data/comments"

const Repile = (stat:CommentType) =>{
    return (
          <div className="flex p-2 items-start space-x-2 pl-14">
            <img className="w-10 w-10 rounded-full" src={stat.userImagePath}></img>
            <div className="bg-gray-200 rounded-lg p-2">
              <p className="font-semibold">{stat.username}</p>
              <p>{stat.commentText}</p>
              {stat.likeNum > 0 ? 
              <div className='flex items-center'>
                <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                <p className='text-gray-500'>{stat.likeNum}</p>
              </div>
              : ''}
            </div>
          </div>
    )
}

export default Repile