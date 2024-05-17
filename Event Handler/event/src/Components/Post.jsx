import React from 'react'

function Post({body,title}) {
  return (
    <div>
      <div className='maindiv'>
        <h1>{title}</h1>
        <h3>{body}</h3>
      </div>
    </div>
  )
}

export default Post
