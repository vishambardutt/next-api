
import { comments } from '../../../Data/comments'

export default function handler(req, res) {
      if (req.method === 'GET') {
            res.status(200).json(comments)

      }
      else if (req.method === 'POST') {
            let comment = req.body.comment
            let newComment = {
                  id: Date.now(),
                  text: comment
                  //  desc:
                   
            }
            comments.push(newComment)
            res.status(201).json(newComment)
      }
     

}


