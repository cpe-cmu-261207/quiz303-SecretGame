import React from 'react';
import logo from './logo.svg';
import './App.css';
import OwnerPost from './component/OwnerPost';
import ComMentsPost from './component/ComMents';
import { comments } from './data/comments';

function App() {
  return (
    <div className="p-2">
      {/* post container */}
      <div className="mx-auto max-w-2xl bg-white rounded-md shadow p-4 space-y-2 divide-y">

        {/* ส่วนของเจ้าของ post */}
        <OwnerPost/>

        {/* comments section */}
        {comments.map(x => <ComMentsPost 
        username={x.username}
        userImagePath={x.userImagePath}
        commentText={x.commentText}
        likeNum={x.likeNum}
        replies={x.replies}
        />
        )}
      </div>
    </div>
  );
}

export default App;
