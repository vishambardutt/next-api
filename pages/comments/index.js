
import { useState } from 'react'


function CommentPage() {

      let [comments, setComments] = useState([])
      let [comment, setComment] = useState('')


      let fetchComments = async () => {
            let response = await fetch('/api/comments')
            let data = await response.json()
            setComments(data)
      }
      let submitComment = async ()=> {
            let response = await fetch('/api/comments',{
                  method: 'POST',
                  body:JSON.stringify({comment}),
                  headers:{
                        'Content-type':'application/JSON'
                  }
            })
            let data = await response.json()
            console.log(data)


      }
      return (
            <>
                  <p><input type='text' value={comment} onChange={e=>setComment(e.target.value)}/>
                  <button onClick={submitComment}>ADD COMMENTS</button>

                        <button onClick={fetchComments}>LOAD CONTENT</button></p>

                  {comments.map((comment) => {
                        return (
                              <div key={comment.id}>
                                    <h4>{comment.id}. {comment.text}</h4>
                                    <p>{comment.desc}</p>
                                    <hr></hr>
                              </div>

                        )
                  })}
            </>
      )

}
export default CommentPage

