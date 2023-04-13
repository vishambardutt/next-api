import { useState } from 'react'
function CommentPage(data) {

      let [comments, setComments] = useState([])

      let fetchComments = async () => {
            let response = await fetch('api/comments')
            let data = await response.json()
            setComments(data)
      }
      return (
            <>
                <p><button onClick={fetchComments}>LOAD COMMENTS</button></p>  

                 {/* {comments.map((comment)=>{
                  return(
                        <div key={comments.id}>
                              {comments.id}{comments.text}
                        </div>
                  )
                 })

                 } */}
                 {comments.map(comment =>{
                  return (
                        <div key={comment.id}>
                              {comments.id}{comments.text}
                        </div>
                  )
                 })
                 
                 }
            </>
      )

}
export default CommentPage